//options

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    ScrollWheelZoom: false,
    zoomControl: false
}

//create map

const map = L.map('mapid', options).setView([-27.222633, -49.6455874], 16);

//create and add tilelayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    /*{
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }*/)
    .addTo(map);

//create icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [56, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});


//create and add marker

L.marker([-27.222633, -49.6455874], {icon})
    .addTo(map);

/*image gallery*/

function selectImage(event){
    const button = event.currentTarget;
    //remover classes .active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button)=>{
        button.classList.remove("active");
    });
    //selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");
    imageContainer.src = image.src;
    //atualizar o container da imagem

    //adicionar a classe .active para este botão
    button.classList.add('active');
}