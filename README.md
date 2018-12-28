# Adobe_Bridge_Show_Geo_Location

Adobe Bridge CC startup-script.

Adds option to photo context menus in Adobe Bridge CC, to see the photo's geo-position on Google Maps (Opens in default webbrowser).

You _might_ want/need to experiment with how _cmd_ is defined in the code. Mac users should probably replace `start "" "url"` with `open "url"`.

To install, simply copy [the jsx file](https://github.com/StigNygaard/Adobe_Bridge_Show_Geo_Location/raw/master/ShowOnGoogleMaps.jsx) into Adobe Bridge's _Startup Scripts_ folder. To find this folder's location, open Bridge and choose: Preferences -> Startup Scripts -> Reveal My Startup Scripts.

Tested with Adobe Bridge CC v8.1 (Photoshop CC 2018) and v9.0 (Photoshop CC 2019) on Windows 10.

I don't really have any knowledge or prior experience on scripting in Adobe CC, but inspired by a [discussion at Photoshop Family support](https://feedback.photoshop.com/photoshop_family/topics/_mapping_the_photo_in_bridge) and largely based on an [older script by Paul-Riggott](https://github.com/Paul-Riggott/PS-Scripts/blob/master/Map%20from%20Geotag.jsx) (which ain't working in recent CC versions), I have been able to create this.
