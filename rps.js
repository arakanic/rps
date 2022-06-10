// Rock, paper, scissors! This function takes in players 1 and 2 selections and declares the winner.

const rps = (p1, p2) => {
    let beats = { "rock": "scissors",
                  "paper": "rock",
                  "scissors": "paper"
    }
    if (p1 === p2) { return "Draw!" }
    if (p2 === beats[p1]) {
      return "Player 1 won!"
    }
    else { return "Player 2 won!" }
}

// Player 1
rps('rock', 'scissors')
rps('scissors', 'paper')
rps('paper', 'rock')
// Player 2
rps('scissors', 'rock')
rps('paper', 'scissors')
rps('rock', 'paper')
// Draw
rps('rock', 'rock')
rps('scissors', 'scissors')
rps('paper', 'paper')