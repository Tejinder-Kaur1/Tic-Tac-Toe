let boxes = document.querySelectorAll(".box");
let turn0 = true; //playerX,player0[print 0 if trun0 is true otherise it print X]
let count = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      //turn0 is equals to turn===true
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true; // hun again click kre te change nhi hoyu ga
    count++;
    checkWinner();
  });
});

//2d array
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    // j tine value yaa koi v ek value emmpty nhi ta he winning pattern cehck kragr
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        // console.log("winner is: ",pos1Val);
        showWinner(pos1Val);
        return;
      }
    }
  }
  if (count === 9) {
    showDraw();
  }
};

const showDraw = () => {
  msgP.innerText = "Game is a Draw!";
  msg.classList.remove("hide");
};

const showWinner = (winner) => {
  //winner displsy krn  lyi function
  msgP.innerText = `Congratulations , winner is ${winner}`;
  msg.classList.remove("hide");
  disableBoxes(); // ede naal duabara winner ni bn skde
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

let newBtn = document.querySelector("#new");
let msg = document.querySelector(".msg-container");
let msgP = document.querySelector("#msg");

let reset = document.querySelector("#reset");

const resetGame = () => {
  turn0 = true; // turn de value o to start krage
  count = 0;
  enableBoxes(); // boxes d efucntioning anale krage
  msg.classList.add("hide"); // msg container remove krage
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = ""; // empty krta
  }
};

newBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
