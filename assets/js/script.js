


do{
    gameAgain = +prompt("¿Cuantas veces quieres jugar? ");
    
}while(gameAgain < 1);


function jugada(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function convertirJugada(gameCode){
let jugada = "";

    if(gameCode === 1 )
        jugada = "PIEDRA";
    else if(gameCode === 2)
        jugada = "PAPEL";
    else if (gameCode === 3)
        jugada = "TIJERA";


    return jugada;
}

for(let i = 1; i <= gameAgain; i++){

    do{
        gameUser = prompt(`Jugada N° ${i} Piedra, Papel, Tijera: `);
        gameUser = gameUser.trim().toUpperCase();

    }while((gameUser != "PIEDRA") && (gameUser != "PAPEL") && (gameUser != "TIJERA"));

   
    gameCode = jugada(1, 3);
  
    game = convertirJugada(gameCode);


  
    if (gameUser === "PIEDRA" && game === "PAPEL")
        winer = "CONSOLA"
    else if (gameUser === "PIEDRA" && game === "TIJERA")
        winer = "USUARIO";
    else if (gameUser === "PAPEL" && game === "PIEDRA")
        winer = "USUARIO";
    else if (gameUser === "PAPEL" && game === "TIJERA")
        winer = "CONSOLA";
    else if (gameUser === "TIJERA" && game === "PAPEL")
        winer = "USUARIO";
    else if (gameUser === "TIJERA" && game === "PIEDRA")
        winer = "CONSOLA";
    else if (gameUser ===  game)
        winer = "EMPATE";


document.write(`Usuario: ${gameUser} <br>` );
document.write(`Consola: ${game} <br> `);
document.write(`El winer es : ${winer} <br>`);
document.write(`___________________________________<br>`);

}