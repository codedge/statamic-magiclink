<?php

declare(strict_types=1);

return [
    'links' => [
        'expire_time' => 'Expire time',
        'links' => 'Links',
        'no_links' => 'No links created yet.',
        'pw_protected' => 'Password protected',
        'redirect_to' => 'Redirect to',
    ],
    'settings' => [
        'headline'                    => 'MagicLink',
        'configure_your_needs'        => 'Configure MagicLink after your needs.',
        'ml_enabled'                  => 'MagicLink enabled?',
        'ml_enabled_instructions'     => 'Activate or deactivate the usage of magic links.',
        'ml_expire_time'              => 'Expire time',
        'ml_expire_time_instructions' => 'Time the login link is valid. Default is 30 minutes.',
        'ml_allowed_addresses' => 'Allowed addresses',
        'ml_allowed_addresses_instructions' => 'Allowed addresses to request a magic link for viewing protected content. Enter one address in each field.',
        'settings'                    => 'Settings',
        'updated_successfully'        => 'Settings updated successfully.',
    ],
    'permissions' => [
        'settings'                  => 'MagicLink Settings',
        'view_links'                => 'View links',
        'view_links_description'    => 'Grants access to see magic links',
        'view_settings'             => 'View settings',
        'view_settings_description' => 'Grants access to see settings',
    ],
    'email' => [
        'email' => 'Email',
        'new_link_subject' => 'Your login link',
    ],

    'unable_to_save' => 'Unable to save settings. Please correct the wrong fields and try again.',

];
