// USO DE FUNCIONES EN CÍRCULOS DE AREAS PROFESIONALES
// Traigo a los círculos que voy a usar

let ldcv = document.getElementById("ldcv");
let dwfs = document.getElementById("dwfs");
let fotografia = document.getElementById("fotografia");
let uxui  = document.getElementById("uxui");
let tipografia  = document.getElementById("tipografia");
let semiotica = document.getElementById("semiotica");
let docencia  = document.getElementById("docencia");
let investigacion  = document.getElementById("investigacion");
let tecnicatura = document.getElementById("tecnicatura");

// Al pintarse de negro el círculo, me muestra un texto descriptivo al lado

const arrayCirculos = [
    "ldcv", 
    "dwfs", 
    "fotografia", 
    "uxui", 
    "tipografia", 
    "semiotica", 
    "docencia", 
    "investigacion", 
    "tecnicatura"
];

var posicion;

// FUNCIONES DE CAMBIO DE ESTILO AL PASAR EL MOUSE POR ARRIBA

function CambiarColor(elemento){
    elemento.style.background ="#181819";
    elemento.style.color = "#fdce30";
    elemento.style.zIndex = "20";

    posicion= arrayCirculos.indexOf(elemento.id, 0);
    TextoDescriptivo()
}

function VolverColor(elemento){
    elemento.style.background ="#fdce30";
    elemento.style.color = "#181819";
    elemento.style.zIndex = "10";
}

// Le aplico la función de cambio de estilo al pasar el mouse

ldcv.addEventListener("mouseenter", () => CambiarColor(ldcv) )
ldcv.addEventListener("mouseleave", () => VolverColor(ldcv) )

dwfs.addEventListener("mouseenter", () => CambiarColor(dwfs) )
dwfs.addEventListener("mouseleave", () => VolverColor(dwfs) )

fotografia.addEventListener("mouseenter", () => CambiarColor(fotografia) )
fotografia.addEventListener("mouseleave", () => VolverColor(fotografia) )

uxui.addEventListener("mouseenter", () => CambiarColor(uxui) )
uxui.addEventListener("mouseleave", () => VolverColor(uxui) )

tipografia.addEventListener("mouseenter", () => CambiarColor(tipografia) )
tipografia.addEventListener("mouseleave", () => VolverColor(tipografia) )

semiotica.addEventListener("mouseenter", () => CambiarColor(semiotica) )
semiotica.addEventListener("mouseleave", () => VolverColor(semiotica) )

docencia.addEventListener("mouseenter", () => CambiarColor(docencia) )
docencia.addEventListener("mouseleave", () => VolverColor(docencia) )

investigacion.addEventListener("mouseenter", () => CambiarColor(investigacion) )
investigacion.addEventListener("mouseleave", () => VolverColor(investigacion) )

tecnicatura.addEventListener("mouseenter", () => CambiarColor(tecnicatura) )
tecnicatura.addEventListener("mouseleave", () => VolverColor(tecnicatura) )


// Cambio de lado derecho

let descripcionAreas = document.getElementById("descripcionAreas");

if (posicion==undefined) {
    descripcionAreas.innerHTML = `
        <p class="textoDescripciones" style="text-align:center;">
            Selecciona un área para obtener 
            <br> 
            más información al respecto
        </p>        
    `
}

function TextoDescriptivo(){
    if (posicion==8){
       
        descripcionAreas.innerHTML = `
            <h4 class="titulosDescripciones">
                <span>TECNICATURA</span>
            </h4>
            <p class="textoDescripciones">
                Cursé la secundaria en una escuela técnica: la <strong>Escuela Industrial Superior</strong>. 
                Allí me recibí de <strong>Técnica Constructora Nacional</strong> (TCN). Si bien nunca ejercí, 
                considero que haber terminado en una escuela técnica marcó significativamente 
                mi forma de ser, de pensar y de trabajar. Por eso cuando empecé a estudiar Desarrollo, 
                creo que el haber terminado en el Industrial me ayudó a la hora de abordar los problemas 
                y las metodologías de trabajo.
            </p>        
        `

    } else if (posicion==7){

        descripcionAreas.innerHTML = `
            <h4 class="titulosDescripciones">
                <span>INVESTIGACIÓN</span>
            </h4>
            <p class="textoDescripciones">
                En 2016 obtuve una <strong>Beca de Iniciación a la Investigación Científica</strong> en la UNL 
                con la cual realicé mi primer trabajo de investigación.
                <br>
                El mismo, posteriormente tuvo continuación con la <strong>Tesina de Grado</strong> titulada «Estudio de los procesos 
                de hibridación y códigos visuales presentes en las tipografías experimentales latinoamericanas,
                a través de la relación formal/funcional del signo tipográfico», la cual fue invitada a formar parte 
                del <strong>Proyecto CAI+D 2016</strong> «Imágenes del Diseño: Cartografía de los modos de visibilizar. 
                Argentina, desde mediados del SXX».
            </p>        
        `

    } else if (posicion==6){

        descripcionAreas.innerHTML = `
            <h4 class="titulosDescripciones">
                <span>DOCENCIA</span>
            </h4>
            <p class="textoDescripciones">
                Durante mi período de estudiante de diseño, tras finalizar de cursar los 
                dos niveles de Tipografía obligatorios (<strong>Tipografía I</strong> y <strong>Tipografía II</strong> de la Cátedra González),
                tuve la posibilidad de llevar a cabo mi primera pasantía en docencia. Aquellos contenidos
                que había visto desde el rol de estudiante, ahora los volvía a ver pero desde el lugar de docente pasante.
                <br>
                Esta experiencia luego me sirvió para llevar a cabo un proyecto personal de enseñanza
                de fotografía estenopeica experimental, en <strong>Alalata Fotografía</strong>. 
            </p>        
        `
        
    } else if (posicion==5){

        descripcionAreas.innerHTML = `
            <h4 class="titulosDescripciones">
                <span>SEMIÓTICA</span>
            </h4>
            <p class="textoDescripciones">
                Una de las disciplinas en las que más hice hincapié al estudiar Diseño y, que a su vez, fue la que 
                posibilitó hacer el abordaje teórico de la Tesina de Grado, fue la <strong>semiótica</strong>. 
                <br>
                El análisis semiótico de los signos es el que aún hoy repercute a la hora de analizar o
                proyectar cualquier pieza de diseño, ya que permite analizar el 
                <strong>proceso de significación</strong> de la misma.
            
            </p>        
        `
    } else if (posicion==4){

        descripcionAreas.innerHTML = `
            <h4 class="titulosDescripciones">
                <span>TIPOGRAFÍA</span>
            </h4>
            <p class="textoDescripciones">
                Mi relación con la tipografía empezó a hacerse más estrecha cuando llevé a cabo la pasantía en docencia
                en los niveles de <strong>Tipografía I</strong> y <strong>II</strong> de la Cátedra González en FADU UNL. 
                Tal es así que al año siguiente fui convocada para formar parte del equipo de <strong>Tipos Latinos</strong> Sede Santa Fe. 
                <br>
                Años más tarde ambos hechos repercutieron a la hora de llevar a cabo la Beca de Iniciación a la Investigación Científica 
                y la Tesina de grado, ambas enfocadas en el estudio de la <strong>tipografía latinoamericana</strong>.
            </p>        
        `
    } else if (posicion==3){

        descripcionAreas.innerHTML = `
            <h4 class="titulosDescripciones">
                <span>DISEÑO UX/UI</span>
            </h4>
            <p class="textoDescripciones">
                Al terminar mis estudios de grado decidí seguir capacitándome en <strong>UX/UI</strong>. 
                Por este motivo realicé un curso en <strong>Coder House</strong>, el cual sirvió para potenciar 
                mis conocimientos en diseño web, tanto en el diseño de interfaces como en la experiencia de usuario. 
                <br>
                Llevar adelante dicho curso despertó en mí un interés por la programación y 
                así el diseño UX/UI se convirtió en el nexo entre el desarrollo y la comunicación visual. 
            </p>        
        `
    } else if (posicion==2){

        descripcionAreas.innerHTML = `
            <h4 class="titulosDescripciones">
                <span>FOTOGRAFÍA</span>
            </h4>
            <p class="textoDescripciones">
                Comencé estudiando fotografía en el Estudio Guidotti y más tarde en la Escuela Alem. Posteriormente, esto me permitió
                desempeñarme como fotógrafa de <strong>recitales</strong> y <strong>eventos varios</strong>, 
                así como para también participar de diferentes <strong>muestras</strong> y <strong>concursos</strong>. 
                <br>
                En la actualidad dirijo <strong>Alalata Fotografía</strong>, un taller experimental de fotografía estenopeica 
                en donde se le enseña al alumno a crear su  propia cámara fotográfica, a sacar fotos con ella 
                y luego a revelarlas en el cuarto oscuro.
            </p>        
        `
        
    } else if (posicion==1){

        descripcionAreas.innerHTML = `
            <h4 class="titulosDescripciones">
                <span>DESARROLLO WEB FULL STACK</span>
            </h4>
            <p class="textoDescripciones">
                Con mis conocimientos en diseño yo ya podía proyectar el área más superficial y visible de un sitio web, 
                pero eso no era suficiente: quería ir más allá, quería conocer todo lo que pasaba por detrás. 
                <br>
                Por ese motivo decidí estudiar <strong>Desarrollo Web Full Stack</strong> en <strong>Acámica</strong>, 
                para entender cómo eso que proyectaba con el diseño se podía materializar con el código. 
            </p>        
        `
    } else if (posicion==0){

        descripcionAreas.innerHTML = `
            <h4 class="titulosDescripciones">
                <span>Lic. DISEÑO COMUNICACIÓN VISUAL</span>
            </h4>
            <p class="textoDescripciones">
                A finales de 2019 egresé de <strong>FADU UNL</strong> en la carrera de <strong>Lic. en Diseño de la 
                Comunicación Visual</strong>, obteniendo a su vez la mención de <strong>Cuadro de Honor</strong> por ser 
                uno de los mejores promedios de la Provincia de Santa Fe en la promoción 2019.
            </p>        
        `
    }
}
