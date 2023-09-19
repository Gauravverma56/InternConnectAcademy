let turn = 'X'
const gameover = false
let reset = document.querySelector("#Restartbutton")

const changeturn = ()=>{
    return turn ==='X'? '0':'X'
}

const chekwin = ()=>{
    let btntext = document.querySelectorAll('.btntext');


    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e =>{
        if((btntext[e[0]].innerText === btntext[e[1]].innerText)  && (btntext[e[2]].innerText === btntext[e[1]].innerText) && (btntext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = btntext[e[0]].innerHTML + " Won"
            gameover=true
        } 
    })
}

// game logic 
let cells = document.getElementsByClassName("cells")

Array.from(cells).forEach(element =>{
    let btntext = element.querySelector('.btntext');
    element.addEventListener('click', (e)=>{
        if(btntext.innerText === ''){
            btntext.innerText = turn;
            turn =  changeturn()
            chekwin()
            if(!gameover){
                document.querySelector(".info")[0].innerHTML = "trun for " + turn;
            }
            
        }
    })
})

reset.addEventListener('click', (e)=>{
    let btntexts = document.querySelectorAll('.btntext');
    Array.from(btntexts).forEach(element => {
        element.innerHTML = " ";
    });
    turn = 'X'
    gameover=false
    document.querySelector(".info")[0].innerText = "trun for " + turn;


})