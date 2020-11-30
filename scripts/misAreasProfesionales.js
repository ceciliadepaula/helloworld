// FUNCIONES DE CAMBIO DE ESTILO AL PASAR EL MOUSE POR ARRIBA

function CambiarColor(elemento){
    elemento.style.background ="#181819";
    elemento.style.color = "#fdce30";
    elemento.style.zIndex = "20";
}

function VolverColor(elemento){
    elemento.style.background ="#fdce30";
    elemento.style.color = "#181819";
    elemento.style.zIndex = "10";
}

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