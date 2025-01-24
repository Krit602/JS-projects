const boxes = document.querySelectorAll(".box");

const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");

const resetBtn = document.querySelector("#reset-btn");
const newbtn = document.querySelector("#newGame-btn")

let turnO = true;

let count = 0;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const disableBox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        count++
        if(count == 9){
            draw();
        }

        checkWinner();
    })
});

const resetGame = ()=>{
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide")
}

const checkWinner = ()=>{
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);            }
        }
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratution the Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}

const draw = ()=>{
    msg.innerText = "Match draw";
    msgContainer.classList.remove("hide");
}

newbtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);