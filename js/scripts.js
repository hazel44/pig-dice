// Business logic

function PigDicePlayer (name, winningscore) {
    this.player= name;
    this.totalscore = winningscore;
    this.currentroll = currentroll
    this.currentscore= currentscore
} 

PigDicePlayer.prototype.rollsdice = function(){
    return this.player + " " + this.currentroll +" " + this.currentscore + " " + this.totalscore;

}
 // Dice rolles  Numbers between 1 and 6

  var diceRolled = Math.floor(Math.random()*6)+1;

  if (diceRolled >1 ){
      this.currentroll += diceRolled;
      this.currentscore += 1;
      //return dicerolled;
      }
      else if(diceRolled === 1){
          this.currentroll = 0;
          //return 0;
      }


// User interface logic
//player1

$(document).ready(function(){
    $("#play").click(function(event){
        event.preventDefault();

// Display value after dice is rolled for player 1
$("#play #player1rolls").click(function(){
    $("#col").text(diceRolled)
})

    });

});
// player 2
$(document).ready(function(){
    $("#play2").click(function(event){
event.preventDefault();

//Display value after dice is rolled for player 2
$("#play2 #player2rolls").click(function(){
    $("#col").text(diceRolled)
})
    });
});


