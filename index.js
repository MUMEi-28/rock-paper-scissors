


// GLOBAL VARIABLES
let playerChoice;
let computerChoice;


function GetPlayerChoice()
{
    const choicesArray = document.querySelectorAll('.choice');

    // Add event listener to each choice
    choicesArray.forEach(choice =>
    {
        choice.addEventListener('click', function ()
        {
            // Get the player's choice
            playerChoice = choice.classList[1]; // clasList[1] returns the second class name

            console.log("You chose: " + playerChoice);


            // Generate Computer Choice when the player has chosen
            GenerateComputerChoice();
        })

    })
}
GetPlayerChoice();

function GenerateComputerChoice()
{
    let choices = ["rock", "paper", "scissor"];

    const randomNumber = Math.floor(Math.random() * choices.length);

    computerChoice = choices[randomNumber];


    // Compare after the computer has chosen
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

    console.log(("Player Chose:           " + playerChoice +
        "\nComputer Chose:    " + computerChoice +
        "\nResults:                    " + result));
}

/* 
function initializeGame()
{
    confirm("Shall we play rock, paper, scissors?") ? GetPlayerChoice() : alert("Ok, Maybe Next Time!");
}



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
} */
/* initializeGame(); */