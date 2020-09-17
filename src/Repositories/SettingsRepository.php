<?php declare(strict_types=1);

namespace Codedge\MagicLink\Repositories;

use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Collection;
use Statamic\Facades\YAML;

final class SettingsRepository
{
    const IS_ENABLED_KEY = 'isEnabled';
    const EXPIRE_TIME_KEY = 'expireTime';

    private array $defaultValues;

    protected Filesystem $files;
    protected string $path;

    public function __construct(Filesystem $files)
    {
        $this->files = $files;
        $this->path = storage_path('statamic-magiclink/settings.yaml');

        $this->defaultValues = [
          self::IS_ENABLED_KEY => true,
          self::EXPIRE_TIME_KEY => config('statamic-magiclink.expire_time'),
        ];
    }

    public function isEnabled(): bool
    {
        return $this->get()->get(self::IS_ENABLED_KEY);
    }

    public function expireTime(): string
    {
        return $this->get()->get(self::EXPIRE_TIME_KEY);
    }

    public function get(): Collection
    {
        if (! $this->files->exists($this->path)) {
            return collect($this->defaultValues);
        }

        return collect(YAML::parse($this->files->get($this->path)));
    }

    public function put($content)
    {
        if (! $this->files->isDirectory($dir = dirname($this->path))) {
            $this->files->makeDirectory($dir);
        }

        return $this->files->put($this->path, YAML::dump($content->all()));
    }
}
