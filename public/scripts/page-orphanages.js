//create map

const map = L.map('mapid').setView([-27.222633, -49.6455874], 16);

//create and add tilelayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    /*{
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }*/)
    .addTo(map);

//create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [56, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

//create popup overlay

function addMarker({id, name, lat, lng}){
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    })
    .setContent(`${name}<a href="/orphanage?id=${id}" class="choose-orphanage"><img src="/images/arrow-white.svg"></a>`);

    //create and add marker

    L.marker([lat, lng], {icon})
        .addTo(map)
        .bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span');
orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    };
    addMarker(orphanage);
});
console.log(orphanagesSpan);
