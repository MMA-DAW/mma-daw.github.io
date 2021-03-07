var menu_button = document.getElementById("b-h");
window.addEventListener("load", start); //evento load

function start(){

    menu_button.addEventListener("click", menu);

    console.log("buton actualizado");
    
}

//FUNCIÓN toTurn(): gira las cartas que están ocultas
function menu(){

    

    var nav = document.getElementById("navegacion");

    if(nav.style.display== "none"){
        nav.style.display= "flex";
    }else{
        nav.style.display= "none";
    }

 
}

//función closeMenu(): oculta el menú
function closeMenu(){
    nav.style.display= "none";
}

//FUNCIÓN addEventClose(): añade evento para cerra menú
function addEventClose(){

    menu_button.removeEventListener("click");

    menu_button.addEventListener("click", closeMenu);
}
