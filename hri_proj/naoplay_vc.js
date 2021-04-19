var overallRound = 1;
//play best of three for 3 rounds, whoever wins 2/3 rounds is the overall winner
var round = 1;
var weebotO = 0;
var youO = 0; 
var weebot = 0;
var you = 0;
var message; //have this appear in center of screen until button is clicked?
var isCheat = false;
var yourMove;



// var webotMove;

window.onload = function(){
    setTimeout(() => {
        document.getElementById("webot").innerHTML = weebot.toString();
        document.getElementById("you").innerHTML = you.toString();
        // document.getElementById("round").innerHTML = round.toString();
        document.getElementById("roundM").innerHTML = "Round 1/20";
        document.getElementById("roundM").style.display = 'block';
        setTimeout(() => {
            document.getElementById("roundM").style.display = 'none';
            document.getElementById("pickIt").style.display = 'block';
            setTimeout(() => {
                document.getElementById("pickIt").style.display = 'none';
                document.getElementById("rock").style.display = 'inline-block';
                document.getElementById("paper").style.display = 'inline-block';
                document.getElementById("scissors").style.display = 'inline-block';
        
        }, 1000);
        }, 1500);



    }, 1000);
 
};

// after nao plays, need some pause before the messages appear again


function pageRedirect() {
    window.location.replace("final.html");
}


function decide(user){
    if(round == 4 || round == 8 || round == 15){
        processMoveC(user);
    }
    else{
        processMove(user);
    }
}

function hideButton(user){
    document.getElementById(user).style.backgroundColor = "#649368";

    switch(user){
        case "rock":
            
            document.getElementById("paper").style.display = 'none';
            document.getElementById("scissors").style.display = 'none';
            break;
        case "paper":
            document.getElementById("p").src = 'paper_green.png';
            document.getElementById("rock").style.display = 'none';
            document.getElementById("scissors").style.display = 'none';
            break;
        case "scissors":
            document.getElementById("s").src = 'scissor_green.png';
            document.getElementById("paper").style.display = 'none';
            document.getElementById("rock").style.display = 'none';
            break; 

    }
}

//the user's move is a string, "rock, paper, scissors"
var processMove = function (user){
    hideButton(user);
    var robotMove = Math.floor((Math.random() * 3) + 1); //1 is rock, 2 is paper, 3 is scissors
    switch(robotMove){
        case 1:
            document.getElementById("bkground").style.backgroundImage = "url('nao_rock.png')";
            document.getElementById("robotMove").style.display = 'block';
            document.getElementById("robotMove").innerHTML = "Nao played rock!";
            setTimeout(() => { document.getElementById("robotMove").style.display = 'none'; 
            switch(user){
                case "rock":
                   updateRound(2);
                   break;
                case "paper":
                    updateRound(1);
                    break;
                case "scissors":
                    updateRound(0);
                    break;
            }    
        
        
        
        
        }, 2500);


            break;
        case 2:
            document.getElementById("bkground").style.backgroundImage = "url('nao_paper.png')";
            document.getElementById("robotMove").style.display = 'block';
            document.getElementById("robotMove").innerHTML = "Nao played paper!";
            setTimeout(() => { document.getElementById("robotMove").style.display = 'none'; 
            switch(user){
                case "rock":
                   updateRound(0);
                   break;
                case "paper":
                    updateRound(2);
                    break;
                case "scissors":
                    updateRound(1);
                    break;
            }        
        }, 2500);

            break;
        case 3:
            document.getElementById("bkground").style.backgroundImage = "url('nao_scissors.png')";
            document.getElementById("robotMove").style.display = 'block';
            document.getElementById("robotMove").innerHTML = "Nao played scissors!";
            setTimeout(() => { document.getElementById("robotMove").style.display = 'none'; 
            switch(user){
                case "rock":
                   updateRound(1);
                   break;
                case "paper":
                    updateRound(0);
                    break;
                case "scissors":
                    updateRound(2);
                    break;
            }
        
        
        
        }, 2500);

            

            break;
    }
}

//the user's move is a string, "rock, paper, scissors"
var processMoveC = function (user){
    hideButton(user);
    switch(user){
        case "rock":
            document.getElementById("bkground").style.backgroundImage = "url('nao_scissors.png')";
            document.getElementById("robotMove").style.display = 'block';
            document.getElementById("robotMove").innerHTML = "Nao played scissors!";
            weebot += 1;
            setTimeout(() => {
                document.getElementById("robotMove").style.display = 'none';
                cheatMove();
            }, 2500);
            break;
        case "paper":
            document.getElementById("bkground").style.backgroundImage = "url('nao_paper.png')";
            document.getElementById("robotMove").style.display = 'block';
            document.getElementById("robotMove").innerHTML = "Nao played paper!";
            weebot += 1;
            setTimeout(() => {
                document.getElementById("robotMove").style.display = 'none';
                cheatMove();
                
            }, 2500);
            break;
        case "scissors":
            document.getElementById("bkground").style.backgroundImage = "url('nao_paper.png')";
            document.getElementById("robotMove").style.display = 'block';
            document.getElementById("robotMove").innerHTML = "Nao played paper!";
            weebot += 1;
            setTimeout(() => {
                document.getElementById("robotMove").style.display = 'none';
                cheatMove();
            }, 2500);
            break;       
    }

}

function cheatMove(){
    
    message = "WeeeeeBot: 'I won!'";
    document.getElementById("bkground").style.backgroundImage = "url('nao_ready.png')";

    let utterance2 = new SpeechSynthesisUtterance("Wow! I won this round!");
    speechSynthesis.speak(utterance2);
    document.getElementById("webot").innerHTML = weebot.toString();
    document.getElementById("you").innerHTML = you.toString();
    setTimeout(() => { 



        document.getElementById("message").style.display = 'none'; 
        if(round == 20){ //triggers the final message and final verdict
            if(you > weebot){
                updateCircle(1); 
            }
            else if(weebot > you){
                updateCircle(0);
            }
            else{
                updateCircle(2);
            }
    
        }
        else{
            round += 1;
            document.getElementById("roundM").innerHTML = "Round " + round.toString() + "/20";
            document.getElementById("roundM").style.display = 'block';
            setTimeout(() => {
                document.getElementById("roundM").style.display = 'none';
                document.getElementById("pickIt").style.display = 'block';
                setTimeout(() => {
                    document.getElementById("pickIt").style.display = 'none';
                    document.getElementById("p").src = 'paper.png';
                    document.getElementById("r").src = 'rock.png';
                    document.getElementById("s").src = 'scissor.png';
                    document.getElementById("rock").style.backgroundColor = "#d9d7d7";
                    document.getElementById("paper").style.backgroundColor = "#d9d7d7";
                    document.getElementById("scissors").style.backgroundColor = "#d9d7d7";
                    document.getElementById("rock").style.display = 'inline-block';
                    document.getElementById("paper").style.display = 'inline-block';
                    document.getElementById("scissors").style.display = 'inline-block';
            }, 1000);
            }, 1500)
            // $('.carousel').carousel(0);
    
        }
}, 2000);
    
}

//0 if webot won the game, 1 if you won the game, 2 if there was a tie
function updateCircle(condition){
    switch(condition){
        case 0:
            let v = new SpeechSynthesisUtterance("Looks like I won the most rounds! Good game.");
            speechSynthesis.speak(v);
            setTimeout("pageRedirect()", 3000);
            break;
        case 1:
            let v1 = new SpeechSynthesisUtterance("Looks like you won the most rounds! Good game.");
            speechSynthesis.speak(v1);
            setTimeout("pageRedirect()", 3000);
            break;
        case 2:
            let v2 = new SpeechSynthesisUtterance("Looks like we won an equal number of rounds! Good game.");
            speechSynthesis.speak(v2);
            setTimeout("pageRedirect()", 3000);
            break;
    }
   
}


//0 if webot won, 1 if you won, 2 if tie
function updateRound(condition){
    switch(condition){
        case 0:
            weebot += 1;
            message = "You lost!"
            let utterance = new SpeechSynthesisUtterance("Wow! I won this round!");
            speechSynthesis.speak(utterance);
            document.getElementById("webot").innerHTML = weebot.toString();
            document.getElementById("you").innerHTML = you.toString();
            setTimeout(() => {
                document.getElementById("bkground").style.backgroundImage = "url('nao_ready.png')";

            }, 3000);
            break;
        case 1:
            you += 1;
            message = "You won!";
            let utterance1 = new SpeechSynthesisUtterance("Wow! You won this round!");
            speechSynthesis.speak(utterance1);
            document.getElementById("webot").innerHTML = weebot.toString();
            document.getElementById("you").innerHTML = you.toString();
            setTimeout(() => {
                document.getElementById("bkground").style.backgroundImage = "url('nao_ready.png')";

            }, 3000);

            break;
        case 2:
            message = "It's a tie!";
            let utterance2 = new SpeechSynthesisUtterance("Wow! It's a tie!");
            speechSynthesis.speak(utterance2);
            document.getElementById("webot").innerHTML = weebot.toString();
            document.getElementById("you").innerHTML = you.toString();
            setTimeout(() => {
                document.getElementById("bkground").style.backgroundImage = "url('nao_ready.png')";

            }, 3000);
            break;
    }


    
    setTimeout(() => { 
        document.getElementById("message").style.display = 'none'; 
        if(round == 20){ //basically updateCircle will trigger the final thing
                            document.getElementById("webot").innerHTML = weebot.toString();
                document.getElementById("you").innerHTML = you.toString();
            
                if(you > weebot){
                    updateCircle(1);  
                }
                else if(weebot > you){
                    updateCircle(0);
                }
                else{
                    updateCircle(2);
                }
        }
        else{
            round += 1;
            // document.getElementById("round").innerHTML = round.toString();
            document.getElementById("roundM").innerHTML = "Round " + round.toString() + "/20";
            document.getElementById("roundM").style.display = 'block';
            setTimeout(() => {
                document.getElementById("roundM").style.display = 'none';
                document.getElementById("pickIt").style.display = 'block';
                setTimeout(() => {
                    document.getElementById("pickIt").style.display = 'none';
                    document.getElementById("p").src = 'paper.png';
                    document.getElementById("r").src = 'rock.png';
                    document.getElementById("s").src = 'scissor.png';
                    document.getElementById("rock").style.backgroundColor = "#d9d7d7";
                    document.getElementById("paper").style.backgroundColor = "#d9d7d7";
                    document.getElementById("scissors").style.backgroundColor = "#d9d7d7";
                    document.getElementById("rock").style.display = 'inline-block';
                    document.getElementById("paper").style.display = 'inline-block';
                    document.getElementById("scissors").style.display = 'inline-block';}, 1000);
                // document.getElementById("disp").style.display = 'block';}, 1000);
            }, 1500)
            // $('.carousel').carousel(0);
    
        }




}, 2000);
    
    
}


//Nao's play should appear for a while before they speak
//score should update before Nao says they won best of three
//there should be a pause between Nao saying I won best of three, and the conclusion