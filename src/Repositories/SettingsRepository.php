<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Repositories;

use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Collection;
use Statamic\Facades\YAML;

final class SettingsRepository
{
    const IS_ENABLED_KEY = 'enabled';
    const EXPIRE_TIME_KEY = 'expireTime';
    const ALLOWED_ADDRESSES = 'allowedAddresses';
    const ALLOWED_DOMAINS = 'allowedDomains';

    private array $defaultValues;

    protected Filesystem $files;
    protected string $path;

    public function __construct(Filesystem $files)
    {
        $this->files = $files;
        $this->path = storage_path('statamic-magiclink/settings.yaml');

        $this->defaultValues = [
            self::IS_ENABLED_KEY => false,
            self::EXPIRE_TIME_KEY => config('statamic-magiclink.expire_time'),
            self::ALLOWED_ADDRESSES => [],
            self::ALLOWED_DOMAINS => [],
        ];
    }

    public function isEnabled(): bool
    {
        return $this->get()->get(self::IS_ENABLED_KEY);
    }

    public function expireTime(): int
    {
        return (int) $this->get()->get(self::EXPIRE_TIME_KEY);
    }

    public function allowedAddresses(): Collection
    {
        return collect($this->get()->get(self::ALLOWED_ADDRESSES));
    }

    public function allowedDomains(): Collection
    {
        return collect($this->get()->get(self::ALLOWED_DOMAINS));
    }

    public function get(): Collection
    {
        if (! $this->files->exists($this->path)) {
            return collect($this->defaultValues);
        }

        return collect(YAML::parse($this->files->get($this->path)));
    }

    public function put(Collection $content)
    {
        if (! $this->files->isDirectory($dir = dirname($this->path))) {
            $this->files->makeDirectory($dir);
        }

        return $this->files->put($this->path, YAML::dump($content->all()));
    }
}
