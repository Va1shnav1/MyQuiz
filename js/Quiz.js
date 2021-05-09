class Quiz {
  constructor(){}
  

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    Contestant.getPlayerInfo();
    background("pink");
    if(allContestants !== undefined){
      var pos = 250;
      fill("darkblue");
      textSize(20);
      text("NOTE: Contestant who answered correctly is highlighted in green", 200, pos-50);
      for(var plr in allContestants){
        var correctAns = "2"
        if(correctAns === allContestants[plr].answer){
          fill("green");
        }else{
          fill("red");
        }
        text(allContestants[plr].name+": " + allContestants[plr].answer, 250, pos)
        pos+=50;
      }
    }
    
    //write code to change the background color here
  
    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
  }

}
