## Permissions

The access to settings of MagicLink can be restricted to certain users. When navigation to _Permissions_ inside the
Control Panel just create a new role and assign the _MagicLink > View settings_ permission.
 

## Customization

Views, translations and config settings can be tweaked by you. You just need to run 

```
php artisan vendor:publish --tag=config --provider="Codedge\MagicLink\ServiceProvider"
```

to publish all assets things you like to modify.

