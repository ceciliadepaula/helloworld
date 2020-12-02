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
        imagen: "../images/disenio-danilo1.jpg",
        descripcion: "Diseño de identidad y contenido para redes sociales de «Danilo Gaetano Personal Trainer»",
        link: "https://www.behance.net/gallery/82821565/Danilo-Gaetano-Personal-Trainer",
    },

    {
        imagen: "../images/disenio-danilo2.jpg",
        descripcion: "Diseño de identidad y contenido para redes sociales de «Danilo Gaetano Personal Trainer»",
        link: "https://www.behance.net/gallery/82821565/Danilo-Gaetano-Personal-Trainer",
    },

    {
        imagen: "../images/disenio-danilo3.jpg",
        descripcion: "Diseño de identidad y contenido para redes sociales de «Danilo Gaetano Personal Trainer»",
        link: "https://www.behance.net/gallery/82821565/Danilo-Gaetano-Personal-Trainer",
    },

    {
        imagen: "../images/disenio-juancruz2.jpg",
        descripcion: "Diseño de contenido para redes sociales de «Juan Cruz Benitez Profesor de Guitarra & Ukelele»",
        link: "https://www.behance.net/gallery/82821565/Danilo-Gaetano-Personal-Trainer",
    },

    {
        imagen: "../images/disenio-juancruz1.jpg",
        descripcion: "Diseño de contenido para redes sociales de «Juan Cruz Benitez Profesor de Guitarra & Ukelele»",
        link: "https://www.behance.net/gallery/82821565/Danilo-Gaetano-Personal-Trainer",
    },
]

/* imagenesDisGraf.length */

for (i = 0; i < 1; i++){

    let contenedorImg = document.createElement("div");
    contenedorImg.classList.add("imagenesIndividuales");

    contenedorImg.innerHTML = `
        <img src="${imagenesDisGraf[i]["imagen"]}" alt="Trabajo">
        <div class='pasarMouse'>
            <p class="textoDescriptivo">${imagenesDisGraf[i]["descripcion"]}</p>
            <a href="${imagenesDisGraf[i]["link"]}">
                <div class="boton botonImgPort">
                    <p class="pBoton">MÁS INFORMACIÓN</p>
                </div>
            </a>
        </div>
    `
    contenedorImagenes.appendChild(contenedorImg);
}

// Ir derecha e izquierda

flechaIzquierda.addEventListener("click", () => {
    contenedorImagenes.scrollLeft -= 200;
 }); 
 
 flechaDerecha.addEventListener("click", () => {
    contenedorImagenes.scrollLeft += 200;    
 }); 