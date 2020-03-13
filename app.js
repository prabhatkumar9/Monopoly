var board =[10,20,30,40,50,60,70,80,90,100,120,130,140,150,160];

const player1_Button = document.getElementById('player-1'); 
const player2_Button = document.getElementById('player-2');

console.log(player1_Button);
console.log(player2_Button);

player1_Button.addEventListener('click',rolldice_1);
player2_Button.addEventListener('click',rolldice_2);

var player1 = ["prograd",0,1000];
var player2 = ["face",0,1000];

function rolldice_1(){
    let diceNum = Math.floor(Math.random()*6)+1;
    updatePosition_1(player1[1],diceNum);
}

function updatePosition_1(oldpos,diceNum){
    let newPosition = oldpos+diceNum;
    player1[1] = newPosition;
    console.log("new position in updatepos func : "+player1[1]);
    updateMoney_1(player1[1]);
}

function updateMoney_1(p1){
    let money = 0;
    if( p1<board.length){
         let money = player1[2]-board[p1-1];
         player1[2] = money;
         console.log("in updatemoney func if blk pos1: "+p1);
         console.log("money: "+money);
    }else{
        p1 = p1%15;
         money = player1[2]-board[p1-1];
         player1[2] = money;
         console.log("in updatemoney func else blk pos1: "+p1);
         console.log("money: "+money);
    }
    
    // return money;
}

function rolldice_2(){

    let diceNum = Math.floor(Math.random()*6+1);
    console.log("dice 2 roll : "+diceNum);
    updatePosition_2(player2[1],diceNum);
}

function updatePosition_2(oldpos,diceNum){
    let newPosition = oldpos+diceNum;
    player2[1] = newPosition;
    console.log("player2 new position in updateposition : "+newPosition);
    updateMoney_2(player2[1]);
}

function updateMoney_2(newPosition){
    let money2 = 0;
    if(newPosition<board.length){
        money2 = player2[2]-board[newPosition-1];
        console.log(money2);
    }else{
        newPosition = newPosition%15;
         money2 = player2[2]-board[newPosition-1];
         console.log(money2);
    }
}