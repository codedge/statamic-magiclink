<?php declare(strict_types=1);

namespace Codedge\MagicLink\Http\Controllers\Cp;

use Codedge\MagicLink\Repositories\SettingsRepository;
use Illuminate\Http\Request;

final class SettingsController extends BaseCpController
{
    protected SettingsRepository $settingsRepository;

    public function __construct(SettingsRepository $settingsRepository)
    {
        $this->settingsRepository = $settingsRepository;
    }

    public function index()
    {
        $this->authorize('view settings');

        $settings = $this->settingsRepository->get();

        return view('magiclink::cp.settings.index', $settings->all());
    }

    public function update(Request $request)
    {
        $this->authorize('view settings');

        $request->validate([
            'enabled' => ['required', 'boolean'],
            'expireTime' => ['required', 'numeric'],
        ]);

        $this->settingsRepository->put($request);

        session()->flash('success', __('magiclink::cp.settings.updated_successfully'));

        return [
            'redirect' => cp_route('magiclink.index')
        ];
    }
}
