let pScoreShow= document.getElementById('pScore');
let cScoreShow= document.getElementById('cScore');
let pScore=0;
let cScore=0;
let header= document.querySelector('h1');
let gameBoard= document.getElementById('game-dashBoard');
let playBtn= document.getElementById('play');
let gameplay= document.getElementById('game-play');
let option= document.getElementById('options');
let pImage= document.getElementById('pImage');
let cImage= document.getElementById('cImage');

playBtn.addEventListener("click",function(){
    playBtn.style.display="none";
    gameplay.style.display="block";
    header.innerText="choose an option";
});


option.addEventListener("click",dothings);

function dothings(e){
    if(e.target.innerText===`rock paper scissors`){
        return;
    }
      let computerHand= getAnyHand();
      let playerHand= e.target.innerText;
      pImage.classList=null;
      cImage.classList=null;
      pImage.setAttribute("class",`fa fa-hand-${playerHand}-o`);
      cImage.setAttribute("class",`fa fa-hand-${computerHand}-o`);

      updateScore(playerHand,computerHand);
}

function getAnyHand(){
    let val= Math.floor(Math.random()*4);
    if(val===0){val++};
    console.log(val);
    if(val===1){
       return `rock`;
    } else if(val===2){
        return `paper`;
    } else if(val===3){
        return `scissors`;
    }

}

function updateScore(playerHand,computerHand){
    if(playerHand===`rock` && computerHand===`rock`){
       return;
    }
    else if(playerHand===`rock` && computerHand===`paper`){
        cScore++;
        cScoreShow.innerText=`${cScore}`; 
    }
    else if(playerHand===`rock` && computerHand===`scissors`){
        pScore++;
        pScoreShow.innerText=`${pScore}`; 
    }
    else if(playerHand===`paper` && computerHand===`rock`){
        pScore++;
        pScoreShow.innerText=`${pScore}`; 
    }
    else if(playerHand===`paper` && computerHand===`paper`){
        return;
    }
    else if(playerHand===`paper` && computerHand===`scissors`){
        cScore++;
        cScoreShow.innerText=`${cScore}`; 
    }
    else if(playerHand===`scissors` && computerHand===`rock`){
       cScore++;
       cScoreShow.innerText=`${cScore}`; 
    }
    else if(playerHand===`scissors` && computerHand===`paper`){
        pScore++;
        pScoreShow.innerText=`${pScore}`; 
    }
    else if(playerHand===`scissors` && computerHand===`scissors`){
        return;
    }
}



