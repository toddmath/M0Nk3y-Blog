#!/bin/bash
# A simple shell script to create PWA icons in all necessary sizes
# Todd Matheson 11/14/2018

# Exit the script on any command with non 0 return code
set -e

sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/icon.png -o ./static/icons/favicon-16x16.png resize 16;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/icon.png -o ./static/icons/favicon-32x32.png resize 32;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/icon.png -o ./static/icons/favicon-96x96.png resize 96;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/icon.png -o ./static/icons/icon-512x512.png resize 512;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/icon.png -o ./static/icons/icon-384x384.png resize 384;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/icon.png -o ./static/icons/icon-256x256.png resize 256;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/icon.png -o ./static/icons/icon-192x192.png resize 192;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/icon.png -o ./static/icons/icon-144x144.png resize 144;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/icon.png -o ./static/icons/icon-96x96.png resize 96;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/icon.png -o ./static/icons/icon-48x48.png resize 48;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/apple-icon.png -o ./static/icons/apple-icon-180x180.png resize 180;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/apple-icon.png -o ./static/icons/apple-icon-152x152.png resize 152;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/apple-icon.png -o ./static/icons/apple-icon-144x144.png resize 144;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/apple-icon.png -o ./static/icons/apple-icon-120x120.png resize 120;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/apple-icon.png -o ./static/icons/apple-icon-114x114.png resize 114;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/apple-icon.png -o ./static/icons/apple-icon-76x76.png resize 76;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/apple-icon.png -o ./static/icons/apple-icon-72x72.png resize 72;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/apple-icon.png -o ./static/icons/apple-icon-60x60.png resize 60;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/apple-icon.png -o ./static/icons/apple-icon-57x57.png resize 57;
sharp normalise -i ${HOME}/gatsby/M0Nk3y-WebDev/src/images/app-icons/icon.png -o ./static/icons/icon-32x32.png resize 32;
