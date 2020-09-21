<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Tags;

use Codedge\MagicLink\Repositories\SettingsRepository;
use Statamic\Tags\Tags;

class Magiclink extends Tags
{
    protected SettingsRepository $settingsRepository;

    public function __construct(SettingsRepository $settingsRepository)
    {
        $this->settingsRepository = $settingsRepository;
    }

    public function loginLink()
    {
        return $this->settingsRepository->isEnabled() ? view('magiclink::partials.login-link') : '';
    }

    public function loginRoute(): string
    {
        return $this->settingsRepository->isEnabled() ? route('magiclink.show-send-link-form') : '';
    }
}
