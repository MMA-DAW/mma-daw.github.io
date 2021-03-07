//CARTAS EXISTENTES:
const card = ["img/juego/cardA.png", "img/juego/cardB.png", "img/juego/cardC.png", "img/juego/cardD.png", "img/juego/cardE.png", "img/juego/cardF.png"]; //almacenar ubicación imágenes
const opportunities = 12;
const numCards = 12; //número de cartas para juegar
var shots = -1; //tiros
var hit = 0; //aciertos
var gameBoard = []; //Almacenar tablero
var cardBack1 = null ;  //Carta destapada
var cardBack2 = null ;  //Carta destapada
var card_div = document.getElementsByClassName("card"); //todas las cartas
var opportunities_div = document.getElementById("opportunities");
var hit_div = document.getElementById("hit");
var button_input = document.getElementById("button");
var result_div = document.getElementById("game-result");

result_div.innerHTML = "Comienza";

window.addEventListener("load", start); //evento load

function start(){
    
    button_input.addEventListener("click", reload);
    
    contador();

    board();

    addEvent();
}

//FUNCTION toTurn(): gira las cartas que están ocultas
function toTurn(){
    result_div.innerHTML = " ";

    selectCard(this);

    if(cardBack1 == null) cardBack1 = this.dataset.value;
    else{
        cardBack2 = this.dataset.value;
        deaddEvent();  //para impedir que puedan seleccionarse 3 cartas

        if(gameBoard[cardBack2] == gameBoard[cardBack1]){

            result_div.innerHTML = "¡BUENA!";

                hit++;

        }else{

            result_div.innerHTML = "¡CASI!";

            var t = setTimeout(function(){

                deselect(card_div[cardBack1]);
                deselect(card_div[cardBack2]);
                
            }, 350);

        }
 
        var t = setTimeout(function(){

            cardBack1 = null; //para permitir que se pueda volver a seleccionar una primera carta
            addEvent(); //volvemos a añadir los eventos antes quitados
            contador(); //actualizamos la puntuación

        }, 351); // para que se ejecute después de terminar de hacer la comparación
        
    }
  
}

//FUNCION board(): para generar un tablero aleatorio.
function board(){

    var count = [0,0,0,0,0,0];
    var number = 0;

    for(var i=0; i<numCards; i++){

        number = randomNumber(card.length,0);

        if(count[number] < 2) {
            gameBoard.push(card[number]);
            count[number]++;

        }else{
            i--;
        }
    }
    
}

//FUNCTION addEvent(): añade los enventos a las cartas
function addEvent(){

    for(var i=0;i< card_div.length; i++){
           
        card_div[i].addEventListener('click' ,toTurn);  //event onclic
        card_div[i].dataset.value = i;
        
    }
  
}

//FUNCTION deaddEvent(): elimina los eventos de las cartas
function deaddEvent(){

    for(var i=0;i< card_div.length; i++){
           
        card_div[i].removeEventListener('click' ,toTurn); //quitar evento onclic
        card_div[i].dataset.value = i;
        
    }

}

//FUNCTION randomNumber(max, min): devuelve un número aleatorio entre dos números dados
function randomNumber(max, min){

    return Math.floor(Math.random() * (max - min) + min);
}

//FUNCTION selectCard(card): voltea la carta impidendo que pueda volver a ser seleccionada
function selectCard(card){
    card.classList.add("card-select");
    card.removeEventListener('click',toTurn);
    card.innerHTML= "<img src=\"" + gameBoard[card.dataset.value] + "\">";
}

//FUNCTION deselect(card): oculta la carta permitiendo que vuelva a ser seleccionada
function deselect(card){
    card.classList.remove("card-select");
    card.addEventListener('click' ,toTurn); 
    card.innerHTML = "";
}

//FUNCTION contador(): acualiza los puntos y oprtunidades.
function contador(){
    shots++;
    opportunities_div.innerHTML= "<h3>Jugadas: " + shots + "/" + opportunities + "</h3>";
    hit_div.innerHTML= "<h3>Aciertos: " + hit + "</h3>" ;

    if(opportunities - shots <  card.length - hit){
        gameOver();
    }
    if(hit == card.length){
        gameWin();

    }

}

//FUNCTION gameOver(): avisa el juego perdido.
function gameOver(){

    deaddEvent();
    console.log("ha perdido.");
    result_div.innerHTML = "OOOOH ¡QUÉ PENA! ¡VUELVE A PROBAR!.";
    
}

//FUNCTION gameWin(): avisa el juego ganado.
function gameWin(){
    result_div.innerHTML = "¡FELICIADES!<br/> SOLO HAS NECESITADO " + shots + "TIROS.";
}

//FUNCTION reload(): recarga la web, reiniciando el juego.
function reload(){
    location.reload();
}