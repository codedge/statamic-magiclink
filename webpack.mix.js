const mix = require('laravel-mix')

mix.js('resources/js/app.js', 'public/js/statamic-magiclink.js').vue({ version: 2 });

mix.postCss('resources/css/statamic-magiclink.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-focus-visible'),
    require('autoprefixer'),
]);

mix.options({
    cssNano: { minifyFontValues: false }
});

mix.browserSync({
    proxy: process.env.APP_URL,
    files: [
        'resources/views/**/*.html',
        'public/**/*.(css|js)',
    ],
    // Option to open in non default OS browser.
    // browser: "firefox",
    notify: false
})
