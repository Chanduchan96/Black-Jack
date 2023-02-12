//create two vaiables - firstcard and secondcard.
//set their values to a random number between 2-11

//create a varaiable, sum and set it to the sum od two cards

function getRandomCard(){
    let randomNum;
    randomNum=Math.floor(Math.random()*13)+1;
    if(randomNum>10)
    {
        return 10;
    }
    else if(randomNum===1)
    {
        return 11;
    }
    else {
        return randomNum;
    }

}


let sum=0;
let cards=[];
let hasBlackJack=false;
let isAlive=false;
let message='';
const messageEl=document.getElementById('message-el');
const sumEl=document.querySelector('#sum-el');
const cardsEl=document.getElementById('cards-el');

//create an object
let player={
name:'per',
chips:145
}

let playerEl=document.getElementById('player-el');
playerEl.textContent=player.name+': $ '+player.chips;

function startGame()
{
let firstcard=getRandomCard();
let secondcard=getRandomCard();
isAlive=true;
cards=[firstcard,secondcard];
sum=firstcard+secondcard;
renderGame();
}

function renderGame()
{
sumEl.textContent= "Sum::"+ sum;
cardsEl.textContent="Cards::";
for(let i=0;i<cards.length;i++){
cardsEl.textContent+=cards[i]+' :: ';
}
if(sum <= 20)
{
    message='Do you want to draw a new card';
    
}
else if(sum === 21)
{
   
    message="Wohoo! You've got Blackjack!";
    hasBlackJack=true;
}
else 
{

    message='You are out of the game!';
    isAlive=false;
}

messageEl.textContent=message;
console.log(sum);
}



function newCard()
{
    if (isAlive && hasBlackJack==false){
    console.log('Drawing a New card from the deck');
    let newCard=getRandomCard();
   
    sum+=newCard;
    cards.push(newCard);
    renderGame();
    }
}


