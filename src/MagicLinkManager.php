<?php

declare(strict_types=1);

namespace Codedge\MagicLink;

use Codedge\MagicLink\Repositories\SettingsRepository;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Collection;
use Statamic\Contracts\Auth\User;
use Statamic\Facades\YAML;

final class MagicLinkManager
{
    protected MagicLink $magicLink;
    protected Filesystem $files;
    protected SettingsRepository $settingsRepository;
    protected string $path;
    protected User $user;

    public function __construct(Filesystem $files, SettingsRepository $settingsRepository)
    {
        $this->files = $files;
        $this->settingsRepository = $settingsRepository;
        $this->path = storage_path('statamic-magiclink/magic-links.yaml');
    }

    public function createForUser(User $user): self
    {
        $this->user = $user;
        $this->magicLink = new MagicLink($user);

        return $this;
    }

    public function redirectTo(string $redirect): self
    {
        $this->magicLink->setRedirectTo($redirect);

        return $this;
    }

    public function generate(): MagicLink
    {
        $link = $this->magicLink->generate();

        $payload[$this->user->email()] = [
            'email'       => $this->user->email(),
            'expire_time' => $this->magicLink->getExpireTime()->timestamp,
            'hash'        => $link->getHash(),
            'redirect_to' => $this->magicLink->getRedirectTo(),
        ];

        $this->save(collect($payload));

        return $link;
    }

    public function get(): Collection
    {
        if (! $this->files->exists($this->path)) {
            return collect();
        }

        return collect(YAML::parse($this->files->get($this->path)));
    }

    public function save(Collection $content)
    {
        if (! $this->files->isDirectory($dir = dirname($this->path))) {
            $this->files->makeDirectory($dir);
        }

        // Handle already existing entries and overwrite them with the new content
        // Each user can only have one magic link!
        $existing = $this->get();
        $merged = $existing->merge($content);

        return $this->files->put($this->path, YAML::dump($merged->all()));
    }

    /**
     * Validate a given email address against the addresses set either in
     * - ALLOWED_ADDRESSES
     * - ALLOWED_DOMAINS.
     *
     * If no allowed address or domain is set, the given email is considered valid.
     */
    public function validAddress(string $email): bool
    {
        $valid = true;

        if ($this->settingsRepository->allowedAddresses()->count() !== 0) {
            if (! in_array($email, $this->settingsRepository->allowedAddresses()->toArray())) {
                $valid = false;
            }
        }

        if ($this->settingsRepository->allowedDomains()->count() !== 0) {
            $parts = explode('@', $email);
            if (! in_array($parts[0], $this->settingsRepository->allowedDomains()->toArray())
            ) {
                $valid = false;
            }
        }

        return $valid;
    }
}
