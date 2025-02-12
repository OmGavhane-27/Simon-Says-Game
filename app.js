let gameseq=[];
let userseq=[];
let Highest_Score=0;

let color=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector(".instruction");


document.addEventListener("keypress",()=>{
    if(started==false){
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("white");
    setTimeout(() => {
        btn.classList.remove("white");
    }, 300);
}
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ranInd=Math.floor(Math.random()*3);
    let rndmColor=color[ranInd];
    let rndmbtn=document.querySelector(`.${rndmColor}`);
    gameseq.push(rndmColor);
    console.log(gameseq);
    btnFlash(rndmbtn);
}

function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp , 1000);
        }
    }
    else{
        let body=document.querySelector("body");
        body.classList.add("rred");
        setTimeout(() => {
            body.classList.remove("rred");
        }, 250);
        h2.innerText=`Game Over! Your Score was ${level}. Press any key to start.`;
        reset();
    }
}
function btnPress(){
    let btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
    
}

let allBtns=document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    if(level>Highest_Score){
        Highest_Score=level;
        let hs=document.querySelector(".HS");
        hs.innerText=`Highest Score :${Highest_Score}`;
    }
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}

