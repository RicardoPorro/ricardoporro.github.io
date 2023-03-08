
/* Ir hasta arriba (Inicio)*/

let btnToTop=document.getElementById("btnToTop");
window.onscroll=function(){visibilidadBtnToTopFunc()};

btnToTop.addEventListener("click",function(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
});

// Mostrar flechita para ir al inicio por pocos segundos
function visibilidadBtnToTopFunc(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        btnToTop.style.display="block";
        setTimeout(function(){
            btnToTop.style.display="none";
        }, 2100);
    } else {
        btnToTop.style.display="none";
    }
}


/** Función para mostrar u ocultar botones y datos de contacto*/

let botones = document.getElementsByClassName('fleVisibilidad');
for(let i=0; i<botones.length; i++){
    botones[i].addEventListener('click', function () {
        let identificador = botones[i].id;
        let padre = botones[i].parentNode;
        let abuelo= padre.parentNode;
        let elementoVisibilidad = abuelo.children[1];
        
        mostrarOcultar(identificador, elementoVisibilidad);

    }, false);
};


function mostrarOcultar(identificador, elementoVisibilidad){
    switch (identificador) {
        
        case 'mostrarContactar':
            elementoVisibilidad.style.display="block";
            mostrarContactar.style.display="none";
            ocultarContactar.style.display="block";
           
            break;
        case 'ocultarContactar':
            elementoVisibilidad.style.display="none";
            ocultarContactar.style.display="none";
            mostrarContactar.style.display="block";
            break;
    }
}

