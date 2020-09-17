import SendMagicLinkComponent from './components/SendMagicLinkComponent';
import SettingsComponent from './components/SettingsComponent';

Statamic.booting(() => {
    Statamic.$components.register('magiclink-settings', SettingsComponent);
    Statamic.$components.register('magiclink-send-link', SendMagicLinkComponent);
});
