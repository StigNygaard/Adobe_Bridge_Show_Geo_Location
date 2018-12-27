# Adobe_Bridge_Show_Geo_Location

Adobe Bridge CC startup-script.

Adds an option to photo context menus in Adobe Bridge CC, to see the photo's geo-position on Google Maps.

You might want/need to experiment with how _cmd_ is defined. Mac users should probably replace _start "" "url"_ with _open "url"_... 

To install, simply copy the jsx file into Adobe Bridge's Startup Scripts folder before opening Bridge. To find this folder's location, open Bridge and choose: Preferences -> Startup Scripts -> Reveal My Startup Scripts.

Tested in Adobe Bridge CC v8.1 on Windows 10.

Inspired by an old script by Paul-Riggot which doesn't work in modern Photoshop/Bridge versions:
https://github.com/Paul-Riggott/PS-Scripts/blob/master/Map%20from%20Geotag.jsx
