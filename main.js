var star = document.getElementById("btn");
var container = document.getElementById("container-numbers");
var coins = 5;

function numbersGenerate(coincidences){

    var contador = false;

    for (let index = 0; index < 5; index++) {
        var aleatorio = Math.random() * (5 - 1) + 1;
        aleatorio = aleatorio.toFixed();

        if(coincidences == aleatorio){
            container.innerHTML += `<div class="circle greed">${aleatorio}</div>`;
            contador = true;
        }else{
            container.innerHTML += `<div class="circle">${aleatorio}</div>`;
        }
    }

    return contador;
}

function displayCoins(numbers){
    var coins = document.getElementById('container-coins');
    var contador = document.getElementById('contador');

    coins.innerHTML = ' ';
    contador.innerHTML = `${numbers}`;

    for (let index = 0; index < numbers; index++) {
        coins.innerHTML+='<img class="moneda" src="moneda.png" alt="">';
    }

}

star.addEventListener('click',function(){

    container.innerHTML = ' ';

    let bet = document.getElementById("bet").value;
    let conincidences = document.getElementById("coincidences").value;
    var result = document.getElementById("container-result");
    let acierto;


    bet = parseInt(bet);
    conincidences = parseInt(conincidences);
    

    if(bet > coins || bet < 0){
        result.innerHTML=` <h1 class="error-bet">No puede apostar mas de las monedas que tines</h1>`;   
    }else if(conincidences > 5 || conincidences < 0){
        result.innerHTML=` <h1 class="error-bet">El numero de coincidencia 1-5</h1>`
    }else{
        acierto = numbersGenerate(conincidences);

        if(acierto == false){
            coins = coins - bet;
            result.innerHTML=`NO HAZ ACERTADO PIERDES ${bet} MONEDAS`;
            
            if(coins == 0){
                result.innerHTML=` JUEGO TERMINADO NO TE QUEDAN MONEDAS`;
            }
        }else{
            result.innerHTML=`HAZ ASERTADO +1 MONDEDAS`;
            coins++;
        }
    
        displayCoins(coins);
    }

});
