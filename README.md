# Statamic MagicLink - Login without a password

![Statamic 5.0+](https://img.shields.io/badge/Statamic-5.0+-FF269E?style=for-the-badge&link=https://statamic.com)
[![Latest Version on Packagist](https://img.shields.io/packagist/v/codedge/statamic-magiclink?style=for-the-badge)](https://packagist.org/packages/codedge/statamic-magiclink)
![Tests](https://github.com/codedge/statamic-magiclink/workflows/Tests/badge.svg)

A Statamic addon to provide the option to login into the Control Panel or Statamic [Protected Content](https://statamic.dev/protecting-content) feature without using a password,
instead use a magic link which is sent by email.

**Features**
* Login to Control Panel with magic links
* Login to protected content with custom password form with magic links
* Restrict sending magic links to defined email addresses
* Display issued magic links in Control Panel
* Permission scheme for display links and settings in Control Panel

# Installation

Run the following the pull in the package with composer:

## Step 1

````bash
composer require codedge/statamic-magiclink
````

## Step 2

Login into your Statamic CP, see "MagicLink" in the side menu and enable it.

## Step 3

On the CP login page you can now see a link "Send Magic Link". 

:information_source: Make sure your email settings are configured and email sending works. 

# Wishes & ideas

Just open an [issue at Github](https://github.com/codedge/statamic-magiclink/issues).

# Security

If you find any security related issues, please get in contact via post@codedge.de first. Please do not open an issues on Github.

# License 

Before going into production with *Statamic MagicLink*, you need to buy a licence at the [Statamic Marketplace](https://statamic.com/addons?statamic=3). 
*Statamic MagicLink* is not free software!
