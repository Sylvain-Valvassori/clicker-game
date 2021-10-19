class Multiplier{
    constructor(value,price){
        this.value = value,
        this.price = price
    }

    inflation(){
        this.price = this.price + parseInt(this.price/10); 
    }
}

let MultiplierOwned = [];

function sumOfMultiplier(){
    let sum = 0;
    MultiplierOwned.forEach( element => {
        sum += element.value
    } )
    return Math.round(sum);
}

let palier1 = new Multiplier(2,100);
let palier2 = new Multiplier(3,500);
let palier3 = new Multiplier(5,2000);
let palier4 = new Multiplier(10,10000);
let palier5 = new Multiplier(20,50000);

let btn1 = document.getElementById('btnBonusOne');
let btn2 = document.getElementById('btnBonusTwo');
let btn3 = document.getElementById('btnBonusThree');
let btn4 = document.getElementById('btnBonusFour');
let btn5 = document.getElementById('btnBonusFive');

(score < palier1.price) ? btn1.setAttribute("disabled", true) : btn1.removeAttribute("disabled");
(score < palier2.price) ? btn2.setAttribute("disabled", true) : btn2.removeAttribute("disabled");
(score < palier3.price) ? btn3.setAttribute("disabled", true) : btn3.removeAttribute("disabled");
(score < palier4.price) ? btn4.setAttribute("disabled", true) : btn4.removeAttribute("disabled");
(score < palier5.price) ? btn5.setAttribute("disabled", true) : btn5.removeAttribute("disabled");


let curentMultiplication = document.getElementById('multiplicateur');
let priceOne   = document.getElementById("priceOne");
let priceTwo   = document.getElementById("priceTwo");
let priceThree = document.getElementById("priceThree");
let priceFour  = document.getElementById("priceFour");

document.getElementById('btnBonusOne').addEventListener('click', () => {
    score -= palier1.price;
    console.log(score);
    scoreContainer.innerHTML = "";
    scoreContainer.innerHTML += score;
    MultiplierOwned.push(palier1);
    palier1.inflation();
    priceOne.innerHTML = "";
    priceOne.innerHTML += palier1.price;
    curentMultiplication.innerHTML = "";
    curentMultiplication.innerHTML += "" + sumOfMultiplier().toString();

    (score < palier1.price) ? btn1.setAttribute("disabled", true) : btn1.removeAttribute("disabled");

})


document.getElementById('btnBonusTwo').addEventListener('click', () => {
    score -= palier2.price;
    scoreContainer.innerHTML = "";
    scoreContainer.innerHTML += score;
    MultiplierOwned.push(palier2);
    palier2.inflation();
    priceTwo.innerHTML = "";
    priceTwo.innerHTML += palier2.price;
    curentMultiplication.innerHTML = "";
    curentMultiplication.innerHTML += "" + sumOfMultiplier();

    (score < palier2.price) ? btn2.setAttribute("disabled", true) : btn2.removeAttribute("disabled");
})


document.getElementById('btnBonusThree').addEventListener('click', () => {
    score -= palier3.price;
    scoreContainer.innerHTML = "";
    scoreContainer.innerHTML += score;
    MultiplierOwned.push(palier3);
    palier3.inflation();
    priceThree.innerHTML = "";
    priceThree.innerHTML += palier3.price;
    curentMultiplication.innerHTML = "";
    curentMultiplication.innerHTML += "" + sumOfMultiplier();

    (score < palier3.price) ? btn3.setAttribute("disabled", true) : btn3.removeAttribute("disabled");
})


document.getElementById('btnBonusFour').addEventListener('click', () => {
    score -= palier4.price;
    scoreContainer.innerHTML = "";
    scoreContainer.innerHTML += score;
    MultiplierOwned.push(palier4);
    palier4.inflation();
    priceFour.innerHTML = "";
    priceFour.innerHTML += palier4.price;
    curentMultiplication.innerHTML = "";
    curentMultiplication.innerHTML += "" + sumOfMultiplier();

    (score < palier4.price) ? btn4.setAttribute("disabled", true) : btn4.removeAttribute("disabled");
})


btn5.addEventListener('click', () => {
    score -= palier5.price;
    scoreContainer.innerHTML = "";
    scoreContainer.innerHTML += score;
    
    btn5.setAttribute("disabled", true);
    
    setInterval( () => {
            document.getElementById('ghost').click();
    }, 1000);
})