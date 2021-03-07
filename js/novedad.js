var rutas = [["img/news/new-memorama.png", "img/news/new-memorama-small.png"], ["img/news/new-web.png", "img/news/new-web-small.png"]];
var novedades_section = document.getElementById("news");
var descripcion_div = document.getElementById("desc");
var count = -1;

window.addEventListener("load", start); //evento load

function start(){

    salida(0);

    setInterval(salida,3000);
  
}

function salida(){
    count ++;
    if( window.matchMedia("(min-width: 820px").matches){
        novedades_section.style.backgroundImage = "URL(" + rutas[count][0] + ")";
        descripcion_div.innerHTML = textos(count);
    } else{
        novedades_section.style.backgroundImage = "URL(" + rutas[count][1] + ")";
        descripcion_div.innerHTML = textos(count);
    }
    

    if(count == rutas.length - 1 ){
        count = -1;
    }

}

function textos(option){
    var texto = "";

    switch(option){
        
        case 0:
            texto = "<h2>MEMORAMA</h2> <h3>¡JUEGA YA!</h3>";
            break;

        case 1:
            texto = "<h2>YA ESTÁ AQUÍ WEB-FLEX</h2> <h3>[EN CONSTRUCCIÓN]</h3>";
            break;
    }

    return texto;

}