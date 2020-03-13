
var board =[10,20,30,40,50,60,70,80,90,100,120,130,140,150,160];

const player1_Button = document.getElementById('player-1'); 
const player2_Button = document.getElementById('player-2');


class Player{
    constructor(name,position,money){
        this.name = name;
        this.position = position;
        this.money = money;
    }
    rollDice(){
        let pos=Math.floor(Math.random()*6)+1;
        console.log(pos);
        this.updatPosition(pos);
    }

    updatPosition(pos){
        this.position+=pos;
        console.log(this.position);
        this.updateMoney();
    }

    updateMoney(){
        if(this.position<BeforeUnloadEvent.length){
            this.money = board[this.position];
            this.money-=board[this.position]
        }
    }
}

let player1 = new Player("Prabhat",0,1000);
let player2 = new Player("Kumar",0,1000);

player1_Button.addEventlistener('click',function(){
    player1.rollDice();
},false);

player2_Button.addEventlistener('click',function(){
    player2.rollDice();
},false);
