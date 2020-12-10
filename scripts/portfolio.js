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

// Diseño web

const imagenesDisWeb = [

    {
        imagen: "./images/disweb-wallar1.jpg",
        descripcion: "«Wallar» es una app pensada para conectar a profesionales del mundo de la construcción con personas que necesitan y buscan su servicio. Fue diseñada como Proyecto Final del curso de Diseño UX/UI en Coder House",
        link: "https://www.behance.net/gallery/96709257/Wallar-UIUX",
    },

    {
        imagen: "./images/desarrollo-tecnonews2.jpg",
        descripcion: "«TecnoNews» es un diario de noticias tecnológicas desarrollado como consigna de la clase 10 del curso de Desarrollo Web Full Stack de Acámica.",
        link: "https://github.com/ceciliadepaula/tecnonews",
    },

    {
        imagen: "./images/desarrollo-tecnonews1.jpg",
        descripcion: "«TecnoNews» es un diario de noticias tecnológicas desarrollado como consigna de la clase 10 del curso de Desarrollo Web Full Stack de Acámica.",
        link: "https://github.com/ceciliadepaula/tecnonews",
    },

    {
        imagen: "./images/desarrollo-helloworld1.jpg",
        descripcion: "Diseño y desarrollo de esta página",
        link: "#",
    },

    {
        imagen: "./images/desarrollo-helloworld2.jpg",
        descripcion: "Diseño y desarrollo de esta página",
        link: "#",
    },

    {
        imagen: "./images/desarrollo-alalata1.jpg",
        descripcion: "Diseño y desarrollo de la página de «Alalata Taller de fotografía estenopeica»",
        link: "https://ceciliadepaula.github.io/alalata/",
    },

    {
        imagen: "./images/desarrollo-alalata2.jpg",
        descripcion: "Diseño y desarrollo de la página de «Alalata Taller de fotografía estenopeica»",
        link: "https://ceciliadepaula.github.io/alalata/",
    },


    {
        imagen: "./images/disenio-portfolio1.jpg",
        descripcion: "Porfolio personal diseñado y desarrollado como consigna de la clase 08 del curso de Desarrollo Web Full Stack de Acámica.",
        link: "https://ceciliadepaula.github.io/",
    },

    {
        imagen: "./images/disenio-portfolio2.jpg",
        descripcion: "Porfolio personal diseñado y desarrollado como consigna de la clase 08 del curso de Desarrollo Web Full Stack de Acámica.",
        link: "https://ceciliadepaula.github.io/",
    },
]

// Desarrollo web

const imagenesDesarrollo = [
    {
        imagen: "./images/desarrollo-gifos.jpg",
        descripcion: "«Gifos» es una aplicación web interactiva para compartir GIFs animados, desarrollada como Proyecto del Sprint 2: «Javascript», del curso de Desarrollo Web Full Stack de Acámica.",
        link: "https://gifosdepaula.000webhostapp.com/index.html",
    },

    {
        imagen: "./images/desarrollo-gifos1.jpg",
        descripcion: "«Gifos» es una aplicación web interactiva para compartir GIFs animados, desarrollada como Proyecto del Sprint 2: «Javascript», del curso de Desarrollo Web Full Stack de Acámica.",
        link: "https://gifosdepaula.000webhostapp.com/index.html",
    },

    {
        imagen: "./images/desarrollo-podcast1.jpg",
        descripcion: "«Podcast Channel» desarrollado para la consigna del Proyecto del Sprint 1: «HTML y CSS» del curso de Desarrollo Web Full Stack de Acámica.",
        link: "https://github.com/ceciliadepaula/podcast_Hello_pale_blue_dot",
    },

    {
        imagen: "./images/desarrollo-podcast2.jpg",
        descripcion: "«Podcast Channel» desarrollado para la consigna del Proyecto del Sprint 1: «HTML y CSS» del curso de Desarrollo Web Full Stack de Acámica.",
        link: "https://github.com/ceciliadepaula/podcast_Hello_pale_blue_dot",
    },

    {
        imagen: "./images/desarrollo-helloworld1.jpg",
        descripcion: "Diseño y desarrollo de esta página",
        link: "#",
    },

    {
        imagen: "./images/desarrollo-helloworld2.jpg",
        descripcion: "Diseño y desarrollo de esta página",
        link: "#",
    },

    {
        imagen: "./images/desarrollo-alalata1.jpg",
        descripcion: "Diseño y desarrollo de la página de «Alalata Taller de fotografía estenopeica»",
        link: "https://ceciliadepaula.github.io/alalata/",
    },

    {
        imagen: "./images/desarrollo-alalata2.jpg",
        descripcion: "Diseño y desarrollo de la página de «Alalata Taller de fotografía estenopeica»",
        link: "https://ceciliadepaula.github.io/alalata/",
    },

    {
        imagen: "./images/desarrollo-tecnonews2.jpg",
        descripcion: "«TecnoNews» es un diario de noticias tecnológicas desarrollado como consigna de la clase 10 del curso de Desarrollo Web Full Stack de Acámica.",
        link: "https://github.com/ceciliadepaula/tecnonews",
    },

    {
        imagen: "./images/desarrollo-tecnonews1.jpg",
        descripcion: "«TecnoNews» es un diario de noticias tecnológicas desarrollado como consigna de la clase 10 del curso de Desarrollo Web Full Stack de Acámica.",
        link: "https://github.com/ceciliadepaula/tecnonews",
    },

    {
        imagen: "./images/disenio-portfolio1.jpg",
        descripcion: "Porfolio personal diseñado y desarrollado como consigna de la clase 08 del curso de Desarrollo Web Full Stack de Acámica.",
        link: "https://ceciliadepaula.github.io/",
    },

    {
        imagen: "./images/disenio-portfolio2.jpg",
        descripcion: "Porfolio personal diseñado y desarrollado como consigna de la clase 08 del curso de Desarrollo Web Full Stack de Acámica.",
        link: "https://ceciliadepaula.github.io/",
    },
]

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
        imagen: "./images/disenio-litoral2.jpg",
        descripcion: "Rediseño sustentable del Diario «El Litoral» con interfaz gráfica de usuario accesible desde smartphone con sistema operativo Android. Proyecto para Taller IV de la carrera de LDCV FADU UNL, realizado junto con Gabriela Lubiano y Gilda Martini.",
        link: "#portfolio",
    },

    {
        imagen: "./images/disenio-litoral1.jpg",
        descripcion: "Rediseño sustentable del Diario «El Litoral» con interfaz gráfica de usuario accesible desde smartphone con sistema operativo Android. Proyecto para Taller IV de la carrera de LDCV FADU UNL, realizado junto con Gabriela Lubiano y Gilda Martini.",
        link: "#portfolio",
    },


    {
        imagen: "./images/disenio-vientos.jpg",
        descripcion: "Diseño de identidad de la dietética «Vientos Verdes»",
        link: "https://www.behance.net/gallery/61224283/Diettica-Vientos-Verdes",
    },

    {
        imagen: "./images/disenio-alalata1.jpg",
        descripcion: "Diseño de logotipo y material publicitario para «Alalata Fotografía Estenopeica»",
        link: "https://www.behance.net/gallery/96872605/Alalata-Fotografia-Estenopeica",
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
        descripcion: "«Pop.Corn» es una obra premiada en el rubro Visuales de la 10ma. Bienal de Arte Joven. Obra compuesta por 25 fotografías independientes que exploran la morfología de diferentes palomitas de maíz. ",
        link: "https://www.behance.net/gallery/96587339/PopCorn",
    },

    {
        imagen: "./images/foto-pop1.jpg",
        descripcion: "«Pop.Corn» es una obra premiada en el rubro Visuales de la 10ma. Bienal de Arte Joven. Obra compuesta por 25 fotografías independientes que exploran la morfología de diferentes palomitas de maíz. ",
        link: "https://www.behance.net/gallery/96587339/PopCorn",
    },

    {
        imagen: "./images/foto-pop0.jpg",
        descripcion: "«Pop.Corn» es una obra premiada en el rubro Visuales de la 10ma. Bienal de Arte Joven. Obra compuesta por 25 fotografías independientes que exploran la morfología de diferentes palomitas de maíz. ",
        link: "https://www.behance.net/gallery/96587339/PopCorn",
    },

    {
        imagen: "./images/foto-encuentro1.jpg",
        descripcion: "«En remolinos» es una obra expuesta en el rubro Visuales de la 11va. Bienal de Arte Joven. Explora el momento de encuentro bajo el agua de dos tintas de colores.",
        link: "#portfolio",
    },

    {
        imagen: "./images/foto-encuentro2.jpg",
        descripcion: "«El encuentro» es una obra expuesta en el rubro Visuales de la 11va. Bienal de Arte Joven. Explora el momento de encuentro bajo el agua de dos tintas de colores.",
        link: "#portfolio",
    },

    {
        imagen: "./images/foto-ojosciegos.jpg",
        descripcion: "«Los ojos ciegos bien abiertos» es una obra expuesta en el rubro Visuales de la 9na. Bienal de Arte Joven.",
        link: "#portfolio",
    },

    {
        imagen: "./images/foto-angeles.jpg",
        descripcion: "Cobertura del recital de Teen Angels en el Club Atlético Unión, Santa Fe, 27.ago.11",
        link: "https://www.flickr.com/photos/visionpropia/albums/72157627410467075",
    },

    {
        imagen: "./images/foto-bob.jpg",
        descripcion: "Cobertura del recital de Bob Dylan en el Gran Rex, Buenos Aires, 27.abr.12",
        link: "https://www.flickr.com/photos/visionpropia/albums/72157629556394710",
    },

    {
        imagen: "./images/foto-bunbury1.jpg",
        descripcion: "Cobertura del recital de Enrique Bunbury en el Gran Rex, Buenos Aires, 04.nov.10",
        link: "https://www.flickr.com/photos/visionpropia/albums/72157625195178975",
    },

    {
        imagen: "./images/foto-paez.jpg",
        descripcion: "Cobertura del recital de Fito Paez en ATE Casa España, Santa Fe, 17.sep.10",
        link: "https://www.flickr.com/photos/visionpropia/albums/72157624854523661",
    },

    {
        imagen: "./images/foto-ivan.jpg",
        descripcion: "Cobertura del recital de Iván Noble en el Centro Cultural Provincial, Santa Fe, 20.may.11",
        link: "https://www.flickr.com/photos/visionpropia/albums/72157626773333656",
    },

    {
        imagen: "./images/foto-calamaro.jpg",
        descripcion: "Cobertura del recital de Andrés Calamaro en el Club Atlético Unión, Santa Fe, 30.sep.10",
        link: "https://www.flickr.com/photos/visionpropia/albums/72157625074177050",
    },

    {
        imagen: "./images/foto-roberto.jpg",
        descripcion: "Cobertura del recital de Dr. Roberto, Santa Fe, 05.feb.11",
        link: "https://www.flickr.com/photos/visionpropia/albums/72157625867561311",
    },

    {
        imagen: "./images/foto-cafres.jpg",
        descripcion: "Cobertura del recital de Los Cafres en Música en el Río, en la Costanera Oeste, Santa Fe, 19.feb.11",
        link: "https://www.flickr.com/photos/visionpropia/albums/72157625968901825",
    },


    {
        imagen: "./images/foto-bichofeo.jpg",
        descripcion: "Fotografías de estudio para «Bichofeo Animación»",
        link: "https://www.instagram.com/bichofeo_studio/",
    },

    {
        imagen: "./images/foto-casamiento.jpg",
        descripcion: "Fotografía de eventos sociales",
        link: "#portfolio",
    },


    {
        imagen: "./images/foto-letrae.jpg",
        descripcion: "Fotografía de productos para venta online para «Librería Letra.e»",
        link: "http://www.librerialetrae.com.ar/",
    },


    {
        imagen: "./images/foto-sandracravero.jpg",
        descripcion: "Fotografías para sitio web de «Sandra Cravero Lenguage Solutions»",
        link: "http://www.sandracravero.com.ar/index.html",
    },


    {
        imagen: "./images/foto-estenopeica1.jpg",
        descripcion: "Fotografía estenopeica sacada en los talleres de «Alalata Fotografía»",
        link: "https://www.behance.net/gallery/96872605/Alalata-Fotografia-Estenopeica",
    },

    {
        imagen: "./images/foto-estenopeica3.jpg",
        descripcion: "Fotografía estenopeica sacada en los talleres de «Alalata Fotografía»",
        link: "https://www.behance.net/gallery/96872605/Alalata-Fotografia-Estenopeica",
    },

    {
        imagen: "./images/foto-estenopeica2.jpg",
        descripcion: "Fotografía estenopeica sacada en los talleres de «Alalata Fotografía»",
        link: "https://www.behance.net/gallery/96872605/Alalata-Fotografia-Estenopeica",
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

function Iteraciones(arrayInvocado){
    for (i = 0; i < arrayInvocado.length; i++){

        let contenedorImg = document.createElement("div");
        contenedorImg.classList.add("imagenesIndividuales");

        contenedorImg.innerHTML = `
            <img src="${arrayInvocado[i]["imagen"]}" alt="Trabajo">
            <div class='pasarMouse'>
                <p class="textoDescriptivo">${arrayInvocado[i]["descripcion"]}</p>
                <a href="${arrayInvocado[i]["link"]}" target="_blank">
                    <div class="boton botonImgPort">
                        <p class="pBoton">MÁS INFORMACIÓN</p>
                    </div>
                </a>
            </div>
        `
        contenedorImagenes.appendChild(contenedorImg);
    } 
}


////////////////////////////////////////////////////////////////

// Eventos para mostrar imágenes de arrays según sección llamada

MostrarDisWeb();

// Diseño web

seleccionDisWeb.addEventListener("click", MostrarDisWeb);

function MostrarDisWeb(){
    contenedorImagenes.innerHTML = "";
    contenedorImagenes.scrollLeft = 0;
    Iteraciones(imagenesDisWeb);

    seleccionDisGrafico.style.backgroundColor = "#ffffff";
    seleccionDisWeb.style.backgroundColor = "#fdce30";
    seleccionDesarrollo.style.backgroundColor = "#ffffff";
    seleccionFotografia.style.backgroundColor = "#ffffff";
}

// Desarrollo web

seleccionDesarrollo.addEventListener("click", MostrarDesarrollo);

function MostrarDesarrollo(){
    contenedorImagenes.innerHTML = "";
    contenedorImagenes.scrollLeft = 0;
    Iteraciones(imagenesDesarrollo);

    seleccionDisGrafico.style.backgroundColor = "#ffffff";
    seleccionDisWeb.style.backgroundColor = "#ffffff";
    seleccionDesarrollo.style.backgroundColor = "#fdce30";
    seleccionFotografia.style.backgroundColor = "#ffffff";
}

// Diseño gráfico

seleccionDisGrafico.addEventListener("click", MostrarDisGra);

function MostrarDisGra(){
    contenedorImagenes.innerHTML = "";
    contenedorImagenes.scrollLeft = 0;
    Iteraciones(imagenesDisGraf);

    seleccionDisGrafico.style.backgroundColor = "#fdce30";
    seleccionDisWeb.style.backgroundColor = "#ffffff";
    seleccionDesarrollo.style.backgroundColor = "#ffffff";
    seleccionFotografia.style.backgroundColor = "#ffffff";
}

// Fotografía

seleccionFotografia.addEventListener("click", MostrarFotos);

function MostrarFotos(){
    contenedorImagenes.innerHTML = "";
    contenedorImagenes.scrollLeft = 0;
    Iteraciones(imagenesFotografia);

    seleccionDisGrafico.style.backgroundColor = "#ffffff";
    seleccionDisWeb.style.backgroundColor = "#ffffff";
    seleccionDesarrollo.style.backgroundColor = "#ffffff";
    seleccionFotografia.style.backgroundColor = "#fdce30";
}