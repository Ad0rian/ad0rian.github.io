function showMovingMap(){
var bounds = [[0,0], [1233,1000]];
var map = L.map('movingMap', {
    zoom: 2,
    maxZoom: 2,
    minZoom: 0,
    zoomControl: false,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,  
crs: L.CRS.Simple
}).setView([0,0],0);

var image = L.imageOverlay('assets/maps/Hagia.png',
 bounds).addTo(map);
map.fitBounds(bounds);
}