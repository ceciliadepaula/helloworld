// CAMBI0 DE IMÁGENES DE CARRUSEL
// Traigo a los elementos que voy a usar

let contenedorImagenes = document.getElementById("contenedorImagenes");

let seleccionDisWeb = document.getElementById("seleccionDisWeb");
let seleccionDesarrollo = document.getElementById("seleccionDesarrollo");
let seleccionDisGrafico = document.getElementById("seleccionDisGrafico");
let seleccionFotografia = document.getElementById("seleccionFotografia");

let flechaDerecha = document.getElementById("flechaDerecha");
let flechaIzquierda = document.getElementById("flechaIzquierda");

// Arrays de elementos a mostrar

// Diseño Gráfico

const imagenesDisGraf = [
    {
        imagen: "./images/disenio-danilo1.jpg",
        descripcion: "Diseño de identidad y contenido para redes sociales de «Danilo Gaetano Personal Trainer»",
        link: "https://www.behance.net/gallery/82821565/Danilo-Gaetano-Personal-Trainer",
    },

    {
        imagen: "./images/disenio-danilo2.jpg",
        descripcion: "Diseño de identidad y contenido para redes sociales de «Danilo Gaetano Personal Trainer»",
        link: "https://www.behance.net/gallery/82821565/Danilo-Gaetano-Personal-Trainer",
    },

    {
        imagen: "./images/disenio-danilo3.jpg",
        descripcion: "Diseño de identidad y contenido para redes sociales de «Danilo Gaetano Personal Trainer»",
        link: "https://www.behance.net/gallery/82821565/Danilo-Gaetano-Personal-Trainer",
    },

    {
        imagen: "./images/disenio-juancruz2.jpg",
        descripcion: "Diseño de contenido para redes sociales de «Juan Cruz Benitez Profesor de Guitarra & Ukelele»",
        link: "https://www.behance.net/gallery/100081491/Social-Media",
    },

    {
        imagen: "./images/disenio-juancruz1.jpg",
        descripcion: "Diseño de contenido para redes sociales de «Juan Cruz Benitez Profesor de Guitarra & Ukelele»",
        link: "https://www.behance.net/gallery/100081491/Social-Media",
    },

    {
        imagen: "./images/disenio-once1.jpg",
        descripcion: "Diseño de identidad, folletería, afiches y material de promoción para el Colectivo de Fotógrafas Independientes «Once Mujeres»",
        link: "https://www.behance.net/gallery/62196545/Once-Mujeres",
    },

    {
        imagen: "./images/disenio-once2.jpg",
        descripcion: "Diseño de identidad, folletería, afiches y material de promoción para el Colectivo de Fotógrafas Independientes «Once Mujeres»",
        link: "https://www.behance.net/gallery/62196545/Once-Mujeres",
    },

    {
        imagen: "./images/disenio-once3.jpg",
        descripcion: "Diseño de identidad, folletería, afiches y material de promoción para el Colectivo de Fotógrafas Independientes «Once Mujeres»",
        link: "https://www.behance.net/gallery/62196545/Once-Mujeres",
    },

    {
        imagen: "./images/disenio-tl1.jpg",
        descripcion: "Diseño de identidad y folletería de la Sexta Bienal de Tipografía Latinoamericana «Tipos Latinos 2014», Sede Santa Fe",
        link: "https://www.behance.net/gallery/61391629/Folleteria-Tipos-Latinos-2014",
    },

    {
        imagen: "./images/disenio-tl2.jpg",
        descripcion: "Diseño de identidad y folletería de la Sexta Bienal de Tipografía Latinoamericana «Tipos Latinos 2014», Sede Santa Fe",
        link: "https://www.behance.net/gallery/61391629/Folleteria-Tipos-Latinos-2014",
    },
]



// Fotografía

const imagenesFotografia = [
    {
        imagen: "./images/foto-pop3.jpg",
        descripcion: "",
        link: "",
    },

    {
        imagen: "./images/foto-pop1.jpg",
        descripcion: "",
        link: "",
    },

    {
        imagen: "./images/foto-pop0.jpg",
        descripcion: "",
        link: "",
    },

    {
        imagen: "./images/foto-encuentro1.jpg",
        descripcion: "",
        link: "",
    },

    {
        imagen: "./images/foto-encuentro2.jpg",
        descripcion: "",
        link: "",
    },

    {
        imagen: "./images/foto-ojosciegos.jpg",
        descripcion: "",
        link: "",
    },
]

// Ir derecha e izquierda

flechaIzquierda.addEventListener("click", () => {
    contenedorImagenes.scrollLeft -= 200;
 }); 
 
 flechaDerecha.addEventListener("click", () => {
    contenedorImagenes.scrollLeft += 200;    
 }); 



// For en función

function Iteraciones(arrayInvicado){
    for (i = 0; i < arrayInvicado.length; i++){

        let contenedorImg = document.createElement("div");
        contenedorImg.classList.add("imagenesIndividuales");

        contenedorImg.innerHTML = `
            <img src="${arrayInvicado[i]["imagen"]}" alt="Trabajo">
            <div class='pasarMouse'>
                <p class="textoDescriptivo">${arrayInvicado[i]["descripcion"]}</p>
                <a href="${arrayInvicado[i]["link"]}" target="_blank">
                    <div class="boton botonImgPort">
                        <p class="pBoton">MÁS INFORMACIÓN</p>
                    </div>
                </a>
            </div>
        `
        contenedorImagenes.appendChild(contenedorImg);
    } 
}


 // Eventos

seleccionFotografia.addEventListener("click", MostrarFotos);

function MostrarFotos(){
    /* boorar primero si hay algo */
    Iteraciones(imagenesFotografia);
}

seleccionDisGrafico.addEventListener("click", MostrarDisGra);

function MostrarDisGra(){
    /* boorar primero si hay algo */
    Iteraciones(imagenesDisGraf);
}