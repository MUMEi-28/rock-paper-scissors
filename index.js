let playGame = confirm("Shall we play rock, paper, scissors?");

// If player chose ok then play game, else give alert
if (playGame)
{

    // get player input
    let playerChoice = prompt("Choose rock, paper or scissor");


    //Make sure that the input has no extra spaces and all at lowercase

    playerChoice.trim().toLowerCase();


    // if player input did not chose rock, paper or scissor then end game else continue
    if (playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissor"
    )
    {
        // Chose random number from 1 to 3
        let computerChoice = Math.floor(Math.random() * 3 + 1);

        // change computer choice from number to string
        switch (computerChoice)
        {
            case 1:
                computerChoice = "rock";
                break;

            case 2:
                computerChoice = "paper";
                break

            default:
                computerChoice = "scissor";
        }




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
    else
    {
        alert("I guess you changed your mind. Let's play next time!");
    }

}
else
{
    alert("Ok, Maybe next time!");
}