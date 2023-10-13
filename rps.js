let playgame = confirm("lets play game?");
if(playgame)
    {
const playerchoice =prompt("please enter stone,paper,or scissor.");
if (playerchoice){
    let playerone=playerchoice.trim().toLowerCase();
    if(
        playerone === "stone"||
        playerone === "paper"||
        playerone === "scissor"
    ){
        const computerchoice = Math.floor(Math.random() * 3+1 );
        const rpsarray=["stone","paper","scissor"];
        const computer= rpsarray[computerchoice];

        const result=
        playerone=== computer
        ? "tie game!"
        : computer==="rock" && playerone==="scissor"
        ?  `\ncomputer wins!`
        : computer==="scissor" && playerone==="paper"
        ? `\ncomputer wins!`
        : computer==="paper" && playerone==="stone"
        ?  `\ncomputer wins!`
        : `\n playerone wins`;
        alert(result);
    let playAgain = confirm("lets play again?");
    playAgain? location.reload() : alert("thanks for playing");

    }else{
        alert("you didnt enter stone,paper,or scissor");
    }
}
else
 {
 alert("ok,lets play another time!");
}
}

