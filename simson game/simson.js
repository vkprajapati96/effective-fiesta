
// let h3 =document.querySelector("h3")
// let btns = document.querySelector("button")
// let uls = document.querySelector("ul")
// let inpt = document.querySelector("input");
// btns.addEventListener("click",function(){
//  let items= document.createElement("li");
//  items.innerHTML =inpt.value;
//  uls.append(items);
//  inpt.value="";
//  let dltbtn= document.createElement("button");
//  dltbtn.innerHTML="delete";
// items.appendChild(dltbtn)
// dltbtn.classList.add("delete");})
// uls.addEventListener("click",function(event){
//     if (event.target.nodeName=="BUTTON"){
//         let listItem = event.target.parentElement;
//         listItem.remove();}})


let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","purpal","green"];

let h2 = document.querySelector("h2");

let started = false;
let level =0;

document.addEventListener("keypress",function(){
    if(started == false){
    console.log("game started");
    started =true;
    levelUp();

}
})

function gameFlash(btn){
    btn.classList.add("Flash");
    setTimeout(() => {
        btn.classList.remove("Flash")
        
    },250
);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash")
        
    },250
);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML=`Level ${level}`;
    let randidx = Math.floor(Math.random()*3);
    let randcolor = btns[randidx];
    let randBtn =document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq)
    gameFlash(randBtn);

}

function  checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
     if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
     }
    }else{
        h2.innerHTML=`Game Over! your score was <b>${level}</b> <br> Press any key to start the Game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }


}

function btnPress(){
    console.log(this);
    let btn =this;
    userFlash(btn);

    userColor =btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameSeq=[];
    userFlash=[];
    level=0;
}