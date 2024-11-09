
//   initializeGame();

function initializeGame()
{
    confirm("Shall we play rock, paper, scissors?") ? GetPlayerChoice() : alert("Ok, Maybe Next Time!");
}


// GLOBAL VARIABLES
let playerChoice;
let computerChoice;

function GetPlayerChoice()
{
    playerChoice = prompt("Choose rock, paper scissor");
    playerChoice = playerChoice.trim().toLowerCase();

    if (playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissor"
    )
    {
        GetComputerChoice();

    }
    else
    {
        alert("I guess you changed your mind, Let's play next time!");
    }

    return playerChoice;
}
function GetComputerChoice()
{
    let choices = ["rock", "paper", "scissor"];

    computerChoice = choices[Math.floor(Math.random() * 3)];

    CompareChoices();
}

function CompareChoices()
{
    // Compare playerChoice and computerChoice
    let result = playerChoice === computerChoice ? "Tie game" :
        playerChoice === "rock" && computerChoice === "paper" ? "Computer Wins" :
            playerChoice === "paper" && computerChoice === "scissor" ? "Computer Wins" :
                playerChoice === "scissor" && computerChoice === "rock" ? "Computer Wins" :
                    "Player Wins";


    // Display output
    alert("Player Chose:           " + playerChoice +
        "\nComputer Chose:    " + computerChoice +
        "\nResults:                    " + result);

    PlayAgain();
}

function PlayAgain()
{
    // Ask for confirmation if player want to play again
    let playAgain = confirm("Play Again?");

    if (playAgain)
    {
        document.location.reload();
    }
    else
    {
        alert("Ok, Let's play next time!  :D");
    }
}
initializeGame();