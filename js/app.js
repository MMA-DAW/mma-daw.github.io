
window.addEventListener("load", start); //evento load

function start(){
    var menu_button = document.getElementById("b-h");
    
    menu_button.addEventListener("click", menu);

    console.log("buton actualizado");
    
}

//FUNCTION toTurn(): gira las cartas que están ocultas
function menu(){
    
    var nav = document.getElementById("navegacion");

    console.log(nav);

    nav.style.display= "flex";
 
}

function menuInterno(){
    var nav = document.getElementsByClassName("segundary");

    console.log(nav);

    nav.style.display= "flex";

}
