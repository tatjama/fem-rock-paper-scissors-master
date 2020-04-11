function showRules(){
    document.querySelector(".rules").style.display = "inherit";

  }
  function hideRules(){
    document.querySelector(".rules").style.display = "none";
  }
  function pickCard(e){
      var x = e.className;
      console.log(x);
      y = x.slice(5);
      console.log(y);
      document.getElementById('player-card-image').src = './images/icon-'+ y +'.svg';
      document.querySelector('.second').style.display = "none";
      document.querySelector('.start-game').style.display = "initial";
      document.getElementById('player-card').className = x;
      
  }
  function pickHouse(){
      document.querySelector('#blank').style.display = "none";
      document.querySelector('#house-card').style.display = "initial";
      document.querySelector('#house-card').style.display = "flex";
      showHouseCard();
      
  }
  function showHouseCard(){
      let x = Math.floor((Math.random() * 3) + 1);    
      let y = "";
      switch(x){
        case 1: 
        y = 'paper';
        break;
        case 2: 
        y = 'scissors';        
        break;
        case 3: 
        y = 'rock';
        break;
      }
      document.getElementById('house-card-image').src = './images/icon-' + y + '.svg';
      document.getElementById('house-card').className = 'icon ' + y;

  }