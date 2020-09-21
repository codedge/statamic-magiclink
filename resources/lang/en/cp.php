<?php

declare(strict_types=1);

return [
    'settings' => [
        'headline'                    => 'MagicLink',
        'configure_your_needs'        => 'Configure MagicLink after your needs.',
        'ml_enabled'                  => 'MagicLink enabled?',
        'ml_enabled_instructions'     => 'Activate or deactivate the usage of magic links.',
        'ml_expire_time'              => 'Expire time',
        'ml_expire_time_instructions' => 'Time the login link is valid. Default is 30 minutes.',
        'updated_successfully'        => 'Settings updated successfully.',
    ],
    'permissions' => [
        'settings'                  => 'MagicLink Settings',
        'view_settings'             => 'View settings',
        'view_settings_description' => 'Grants access to see settings',
    ],
    'email' => [
        'new_link_subject' => 'Your login link',
    ],

    'unable_to_save' => 'Unable to save settings. Please correct the wrong fields and try again.',

];
