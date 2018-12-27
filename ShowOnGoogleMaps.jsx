#target bridge
if (BridgeTalk.appName === "bridge") {
    mapFromGPS = MenuElement.create("command", "Show location on Google Maps", "at the end of Thumbnail");
}
mapFromGPS.onSelect = function () {
    if (app.document.selections.length < 1) return;
    var thumb = app.document.selections[0];
    var md = thumb.synchronousMetadata;
    md.namespace = "http://ns.adobe.com/exif/1.0/";
    var lat = md.GPSLatitude ? md.GPSLatitude : "" ;
    var lon = md.GPSLongitude ? md.GPSLongitude : "";
    if (lat === "") return;
    if (lon === "") return;
    var latparts = lat.match(/\d+/g);
    var lat1 = (Number(latparts[0]) +(Number(latparts[1].toString()+"."+latparts[2].toString())/60)).toFixed(4);
    var lonparts = lon.match(/\d+/g);
    var lon1 = (Number(lonparts[0]) +(Number(lonparts[1].toString()+"."+lonparts[2].toString())/60)).toFixed(4);
    var latneg = "";
    switch (lat.match(/.$/).toString()) {
        case "S":
            latneg = "-";
            break;
        case "W":
            latneg = "-";
            break;
    }
    var lonneg = "";
    switch (lon.match(/.$/).toString()){
        case "S":
            lonneg = "-";
            break;
        case "W":
            lonneg = "-";
            break;
    }
    var latResult = latneg+lat1;
    var lonResult = lonneg+lon1;
    // var cmd = "start /B \"C:\\Program Files\\Mozilla Firefox\\firefox.exe\" \""+ "https://www.google.com/maps/search/?api=1&query=" + latResult + "," + lonResult + "\"";
    var cmd = "start /B \"\" \"https://www.google.com/maps/search/?api=1&query=" + latResult + "," + lonResult + "\""; // Should open url in default browser
    app.system(cmd);
};
