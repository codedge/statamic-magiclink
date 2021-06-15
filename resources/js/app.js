import SendMagicLinkComponent from './components/SendMagicLinkComponent';
import SettingsComponent from './components/SettingsComponent';
import LinksListingComponent from './components/Links/ListingComponent';

window.axios  = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Statamic.booting(() => {
    Statamic.$components.register('magiclink-settings', SettingsComponent);
    Statamic.$components.register('magiclink-send-link', SendMagicLinkComponent);

    Statamic.$components.register('magiclink-links-listing', LinksListingComponent);
});
