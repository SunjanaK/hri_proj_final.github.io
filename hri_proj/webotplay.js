var round = 1;
var overallRound = 1;
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
    processMove(user);

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
    // document.getElementById("mess").style.display = 'none !important';
    //have the robot randomly make a move
    var robotMove = Math.floor((Math.random() * 3) + 1); //1 is rock, 2 is paper, 3 is scissors
    switch(robotMove){
        case 1:
            document.getElementById("bkground").style.backgroundImage = "url('webot_rock.png')";
            document.getElementById("robotMove").style.display = 'block';
            document.getElementById("robotMove").innerHTML = "WeeeeeBot played rock!";
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
            document.getElementById("bkground").style.backgroundImage = "url('webot_paper.png')";
            document.getElementById("robotMove").style.display = 'block';
            document.getElementById("robotMove").innerHTML = "WeeeeeBot played paper!";
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
            document.getElementById("bkground").style.backgroundImage = "url('webot_scissors.png')";
            document.getElementById("robotMove").style.display = 'block';
            document.getElementById("robotMove").innerHTML = "WeeeeeBot played scissors!";
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


//0 if webot won the game, 1 if you won the game, 2 if there was a tie
function updateCircle(condition){
    switch(condition){
        case 0:
            message = "WeeeeeBot: 'Looks like I won best of three. Good job.'";
            document.getElementById("message").style.display = 'block';
            document.getElementById("message").innerHTML = message;
            setTimeout("pageRedirect()", 3000);
            break;
        case 1:
            message = "WeeeeeBot: 'Looks like you won the most rounds! Good job.'";
            document.getElementById("message").style.display = 'block';
            document.getElementById("message").innerHTML = message;
            setTimeout("pageRedirect()", 3000);
            break;
        case 2:
            document.getElementById("circle"+overallRound.toString()).style.background = "black";
            message = "WeeeeeBot: 'Looks like we won an equal number of rounds. Good job!'";
            document.getElementById("message").style.display = 'block';
            document.getElementById("message").innerHTML = message;
            setTimeout("pageRedirect()", 3000);
            break;
    }   
}


//0 if webot won, 1 if you won, 2 if tie
function updateRound(condition){
    switch(condition){
        case 0:
            weebot += 1;
            message = "WeeeeeBot: 'I won!'";
            break;
        case 1:
            you += 1;
            message = "WeeeeeBot: 'You won!'";
            break;
        case 2:
            message = "WeeeeeBot: 'It's a tie!'";
            break;
    }
    console.log("you");
    console.log(you);
    console.log("nao");
    console.log(weebot);
    document.getElementById("bkground").style.backgroundImage = "url('webot_ready.png')";
    document.getElementById("webot").innerHTML = weebot.toString();
    document.getElementById("you").innerHTML = you.toString();
    document.getElementById("message").style.display = 'block';
    document.getElementById("message").innerHTML = message;
    setTimeout(() => { 
        document.getElementById("message").style.display = 'none'; 
        if(round == 20){
            document.getElementById("webot").innerHTML = weebot.toString();
            document.getElementById("you").innerHTML = you.toString();
            // document.getElementById("final").style.display = 'block';
            if(you > weebot){
                updateCircle(1);
                // document.getElementById("final").innerHTML = "You won the game!";
                // setTimeout("pageRedirect()", 3000);
            }
            else if(weebot > you){
                updateCircle(0);
                // document.getElementById("final").innerHTML = "WeeeeeBot won the game!";
                // setTimeout("pageRedirect()", 3000);
            }
            else{
                updateCircle(2);
                // document.getElementById("final").innerHTML = "There is no game winner! You both tied!";
                // setTimeout("pageRedirect()", 3000);
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
            }, 1500);
            // $('.carousel').carousel(0);
    
        }




}, 2000);
    
    
}


