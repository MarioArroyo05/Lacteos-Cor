(() => {
 if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success, error);
 }else{
    alert("Geolocation no es soportada por este navegador");
 }   
})();
function success(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getMap(latitude, longitude);
}
function error(){
    alert("No se puede abrir la ubicacion")
}
function getMap(latitude, longitude) {
    const map = L.map("map").setView([9.067619, -75.347136], 12);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    L.marker([9.067619, -75.347136]).addTo(map).bindPopup('Lacteos-Cor <b> Aqui </b>').openPopup();
}