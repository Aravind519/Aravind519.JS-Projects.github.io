// project 1: Your Age In Days
let countSentence = 0;

function AgeInDays()
{
  var birthYear = prompt('What month and year were you born... Good friend? (Format: YYYY/MM)');
  var birthyearSplit = birthYear.split('/');
  var d = new Date();
  var y = d.getFullYear();
  var m = d.getMonth();

  if (birthYear ==""){ }
  else
  {
    var AgeInYears = (y-1) - birthyearSplit[0];
    var AgeInMonths = m + (13 - birthyearSplit[1]);
    if(AgeInMonths >= 12)
    {
      AgeInYears ++;
      console.log(AgeInYears);
      AgeInMonths -= 12;
      console.log(AgeInMonths);
    }
    var h2 = document.createElement('h2');
    var textAnswer = document.createTextNode('Born in ' + birthyearSplit[0]+ '/' + birthyearSplit[1] + ': You are approximately ' + AgeInYears + ' year(s) and ' + AgeInMonths + ' month(s) old');
    h2.setAttribute('id','ageInDays');
    h2.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h2);
    countSentence = countSentence + 1;
  }
}

function reset_ageInDays()
{
document.getElementById('ageInDays').remove();
countSentence = countSentence - 1;
}

function resetall_ageInDays()
{
  for(let i=0; i < countSentence; i++)
  {
    document.getElementById('ageInDays').remove();
  }

}

// project 2: Cat Generator

let countCats = 0;

function generateCat()
{
  var image = document.createElement('img');
  var div = document.getElementById('flex-cat-gen');
  image.setAttribute('id','imagee');
  image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
  countCats = countCats + 1;

  let cathappySound = new Audio('static/sounds/cat.mp3');
  cathappySound.play();
}

function reset_CatGen()
{
  document.getElementById('imagee').remove();
  countCats = countCats - 1;

  let catsadSound1 = new Audio('static/sounds/cathiss.mp3');
  catsadSound1.play();
}

function resetall_CatGen()
{
  for(let i=0; i < countCats; i++)
  {
    document.getElementById('imagee').remove();
    let catsadSound2 = new Audio('static/sounds/cathiss.mp3');
    catsadSound2.play();
  }
}

// Rock, Paper, Scissors

function rpsGame(yourChoice)
{
    var humanChoice, botChoice;
    humanChoice = yourChoice.id

    if (yourChoice.id == 'rock')
    {
      let soundRock = new Audio('static/sounds/rock.mp3');
      soundRock.play();
    }
    else if (yourChoice.id == 'paper')
    {
      let soundPaper = new Audio('static/sounds/paper.mp3');
      soundPaper.play();
    }
    else if (yourChoice.id == 'scissors')
    {
      let soundScissors = new Audio('static/sounds/scissors.mp3');
      soundScissors.play();
    }

    botChoice = numberToChoice(randToRpsInt());
    results = decideWinner(humanChoice,botChoice);
    message = finalMessage(results);
    rpsFrontEnd(humanChoice,botChoice,message);
}
  
  function randToRpsInt()
{
    return Math.floor(Math.random() * 3);
}
  
  function numberToChoice(number)
{
    return ["rock", "paper", "scissors"] [number];
}
  
  function decideWinner(yourChoice, computerChoice) 
{
      var rpsDatabase = 
     {
       "rock" : {"scissors": 1, "rock": 0.5, "paper": 0},
       "paper": {"rock": 1, "paper": 0.5, "scissors": 0},
       "scissors": {"paper": 1, "scissors": 0.5, "rock": 0}
     };
      var yourScore = rpsDatabase[yourChoice][computerChoice];
      var computerScore = rpsDatabase[computerChoice][yourChoice];
  
      return [yourScore,computerScore];
}
  
  function finalMessage([yourScore,computerScore]) 
{
    if (yourScore === 0)
    {
      return {"message": "You lost!", "color": "red"};
       humanlostScore = humanlostScore + 1;
    }
    else if(yourScore === 0.5)
    {
      return {"message": "You tied!", "color": "blue"};
       humantiedScore = humantiedScore + 1;
      
    }
    else
    {
      return {"message": "You won!", "color": "green"};
       humanwonScore = humanwonScore + 1;
    }
}
  
  function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) 
{
  
    var imagesDatabase = 
    {
      'rock': document.getElementById('rock').src,
      'paper': document.getElementById('paper').src,
      'scissors': document.getElementById('scissors').src
    }
    // remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
  
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
  
    humanDiv.setAttribute('id','humanPick');
    messageDiv.setAttribute('id','messageWonLost');
    botDiv.setAttribute('id','botPick');
    
  
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding:30px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"
  
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

    setTimeout(SoundWinLoss, 1500);

    function SoundWinLoss()
    {
      if (finalMessage['message'] == 'You lost!')
      {
        let soundLoss = new Audio('static/sounds/aww.mp3');
        soundLoss.play();
      }
      else if (finalMessage['message'] == 'You won!')
      {
        let soundWin = new Audio('static/sounds/winning.mp3');
        soundWin.play();
      }
    }
}
  
  function reset()
{
   let hitsoundPlay = new Audio('static/sounds/swish.m4a');
   hitsoundPlay.play();

    document.getElementById('humanPick').remove();
    document.getElementById('messageWonLost').remove();
    document.getElementById('botPick').remove();
  
    
    imageRock = document.createElement('img');
    imageRock.setAttribute('id','rock');
    imageRock.src = "http://images.clipartpanda.com/rock-clipart-clipart-harvestable-resources-rock.png";
    imageRock.style.height = '150px';
    imageRock.style.width = '150px';
    document.getElementById('flex-box-rps-div').appendChild(imageRock);
    document.getElementById('rock').onclick = function() {rpsGame(this)};
    
  
    
    imagePaper = document.createElement('img');
    imagePaper.setAttribute('id','paper');
    imagePaper.src = "http://images.clipartpanda.com/paper-clipart-nexxuz-Loose-Leaf-Paper.png";
    imagePaper.style.height = '150px';
    imagePaper.style.width = '150px';
    document.getElementById('flex-box-rps-div').appendChild(imagePaper);
    document.getElementById('paper').onclick = function() {rpsGame(this)};
    
  
    imageScissors = document.createElement('img');
    imageScissors.setAttribute('id','scissors');
    imageScissors.src = "http://thumbs.dreamstime.com/b/female-hand-sign-victory-sign-peace-sign-scissors-vector-color-flat-illustration-isolated-white-background-web-83128345.jpg";
    imageScissors.style.height = '150px';
    imageScissors.style.width = '150px';
    document.getElementById('flex-box-rps-div').appendChild(imageScissors);
    document.getElementById('scissors').onclick = function() {rpsGame(this)};
  
}

// Challenge 4: Change Button Colors

var all_buttons = document.getElementsByTagName('button');
var copyAllButtons = []

for (let i = 0; i < all_buttons.length; i++)
{
  copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy) 
{
  if (buttonThingy.value === 'red') 
  {
    buttonsRed();
  } 
  else if (buttonThingy.value === 'green') 
  {
    buttonsGreen();
  } 
  else if (buttonThingy.value === 'reset') 
  {
    buttonNocolor();
  } 
  else if (buttonThingy.value === 'random')
  {
    randomColors();
  } 
  else if (buttonThingy.value === 'yellow')
  {
    buttonsYellow();
  }
  else if (buttonThingy.value === 'blue')
  {
    buttonsBlue();
}

function buttonsRed()
{
  for (let i = 0; i < all_buttons.length; i++)
   {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}

function buttonsGreen()
{
  for (let i = 0; i < all_buttons.length; i++)
   {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}

function buttonsYellow()
{
  for (let i = 0; i < all_buttons.length; i++)
   {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-warning');
  }
}

function buttonsBlue()
{
  for (let i = 0; i < all_buttons.length; i++) 
  {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-primary');
  }
}


function buttonNocolor()
 {
  for (let i = 0; i < all_buttons.length; i++) 
  {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors()
{
  var allButtons = document.getElementsByTagName('button');

  var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

  for (i = 0; i < allButtons.length; i++) 
  {
    var randomNumber = Math.floor(Math.random() * 4);
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(choices[randomNumber]);
  }
}
}

// Project 5: blackJack

let blackjackGame =
{
  'you' : {'scoreSpan':'#your-blackjack-result', 'div':'#your-box', 'score':0},
  'dealer' : {'scoreSpan':'#dealer-blackjack-result', 'div':'#dealer-box', 'score':0},
  'cards': ['2','3','4','5','6','7','8','9','10','K','J','Q','A',],
  'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
  'wins':0,
  'losses':0,
  'draws':0,
  'isStand':false,
  'turnsOver':false,
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);

//When a hit button is clicked 
function blackjackHit()
{
  if(blackjackGame['isStand'] === false)
  {
    let card = randomCard(); 
    showCard(card,YOU);  
    updateScore(card,YOU);
    showScore(YOU);
  }
}

function sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve,ms));
}

// When a stand button is clicked
async function dealerLogic ()
{
  blackjackGame['isStand'] = true;

  while(DEALER['score'] < 16 && blackjackGame['isStand'] === true)
  {
    let card = randomCard();
    showCard(card,DEALER);
    updateScore(card,DEALER);
    showScore(DEALER);
    await sleep(1000);
  }
  blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
}

// When a Deal button is clicked
function blackjackDeal()
{
  if (blackjackGame['turnsOver'] === true)
  {
    blackjackGame['isStand'] = false;

    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    for(let i=0; i < yourImages.length; i++)
    {
      yourImages[i].remove(); 
    }

    for(let i=0; i < dealerImages.length; i++)
    {
      dealerImages[i].remove(); 
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;

    document.querySelector('#your-blackjack-result').style.color = '#ffffff';
    document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';

    document.querySelector('#blackjack-result').textContent = 'Lets Play';
    document.querySelector('#blackjack-result').style.color = 'black';

    blackjackGame['turnsOver'] = false; // In the PP course video it is mentioned as true.
  }  
}

// picks a Random Card
function randomCard()
{
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame['cards'][randomIndex];
}

// Show Card on the screen
function showCard(card,activePlayer)
{
  if (activePlayer['score'] <= 21)
  {
    let cardImage = document.createElement('img');
    cardImage.src = `static/images/${card}.png`;
    cardImage.style.height = '150px';
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
  }
}

// Updates the score whenever a random card is generated
function updateScore(card,activePlayer)
{
  if (card === 'A')
  {
    // if adding score 11 for Ace keeps the score below 21//
    if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21)
    {
      activePlayer['score'] += blackjackGame['cardsMap'][card][1];
    }
    else // if the 
    {
      activePlayer['score'] += blackjackGame['cardsMap'][card][0];
    } 
  }
  else
  {
    activePlayer['score'] += blackjackGame['cardsMap'] [card];  
  }
}

// Shows the current score on the screen
function showScore(activePlayer)
{
  if (activePlayer['score'] <= 21)
  { 
   document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
  }
  else
  {
    document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
  }
}

//Compute winner and return who just won
function computeWinner()
{
  let winner;

  if (YOU['score'] <= 21)
  {
     if(YOU['score'] > DEALER['score'] || (DEALER['score'] > 21))
     {
       blackjackGame['wins']++;
       winner = YOU;
     }
     else if(YOU['score'] < DEALER['score'])
     {
      blackjackGame['losses']++;
       winner = DEALER;
     }
     else if (YOU['score'] === DEALER['score'])
     {
      blackjackGame['draws']++;
     }
  }
  else if(YOU['score'] > 21 && DEALER['score'] <= 21)
  {
    blackjackGame['losses']++;
    winner = DEALER;
  }
  else if(YOU['score'] > 21 && DEALER['score'] > 21)
  {
    blackjackGame['draws']++;
  }
  
  return winner;
}

// Show the winner on the screen
function showResult(winner)
{
  let message, messageColor;

  if(blackjackGame['turnsOver'] === true)
  {
    if(winner === YOU)
    {
      document.querySelector('#wins').textContent = blackjackGame['wins'];
      message = 'You Won!';
      messageColor = 'green';
      winSound.play();
    }
    else if(winner === DEALER)
    {
      document.querySelector('#losses').textContent = blackjackGame['losses'];
      message = 'You Lost!';
      messageColor = 'red';
      lossSound.play();
    }
    else
    {
      document.querySelector('#draws').textContent = blackjackGame['draws'];
      message = 'You Drew!';
      messageColor = 'black';
    }

    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
  }
}



  