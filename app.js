let gameSeq = [];
let userSeq = [];
let btns = ['green', 'red', 'grey', 'sky-blue'];
let started = false, level = 0;
let h2 = document.querySelector('h2');
let divTag = document.querySelector('#para')

button = document.querySelector("button")
button.addEventListener("click", () => {

    if (started == false) {
        started = true;
        button.innerText=""
        button.classList.add("flash")
        // h2.innerText="game is started";
        levelup();
    }

})
function flashbtn(btn) {
    btn.classList.add("flash")
    setTimeout(() => {
        btn.classList.remove("flash")
    }, 500)
}
function levelup() {

    level++;
    userSeq =[]
    h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randColor}`);

    // console.log(randomIdx)
    // console.log(randColor)
    // console.log(randomBtn)
    gameSeq.push(randColor);
    console.log(gameSeq)
    flashbtn(randomBtn)

}

function checkColor(idx){
    // console.log("cuur level: ",level);
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            // setTimeout(,5000);
            levelup()
            
        }
    }
    else{
        h2.innerHTML=`Game Over ! <b>Your Score was ${level}</b> <br>Press Start Game.`;
        body =document.querySelector("body")
        body.style.backgroundColor="red"
        setTimeout(()=>{
            body.style.backgroundColor="white"
        },1000)
        if(divTag.innerText < `${level}`){
            divTag.innerText=level;
        }
        button.innerText="Start Game"
        button.classList.remove("flash")
        reset();
    }
}
function buttonPress(){
    // console.log(this);
    let btn =this;
    flashbtn(btn);
    userColor = this.getAttribute("id")
    userSeq.push(userColor);
    checkColor(userSeq.length -1);
}

let allbtn =document.querySelectorAll('.btn');
for( let btn of allbtn){
    btn.addEventListener("click" ,buttonPress);
}


function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[]
}