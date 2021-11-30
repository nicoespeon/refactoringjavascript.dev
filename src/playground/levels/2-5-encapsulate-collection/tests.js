import assert from "assert";

export function runTests() {
  const console = new FakeConsole();
  const { createGame } = require("./playground");
  const game = new (createGame(console))();

  game.add("Chet");
  game.add("Pat");
  console.log("added: " + game.add("Sue"));

  game.roll(20);
  game.wasCorrectlyAnswered();
  game.roll(0);
  game.wasCorrectlyAnswered();
  game.roll(0);
  game.wasCorrectlyAnswered();
  game.roll(10);
  game.wrongAnswer();
  game.roll(6);
  game.wrongAnswer();
  game.roll(5);
  game.wrongAnswer();
  game.roll(2);
  game.wrongAnswer();
  game.roll(1);
  game.wrongAnswer();
  game.roll(3);
  game.wasCorrectlyAnswered();
  game.roll(3);
  game.wasCorrectlyAnswered();
  game.roll(5);
  game.wasCorrectlyAnswered();
  game.roll(2);
  game.wrongAnswer();
  game.roll(1);
  game.wrongAnswer();
  game.roll(1);
  game.wrongAnswer();
  game.roll(1);
  game.wrongAnswer();
  game.roll(1);
  game.wasCorrectlyAnswered();
  game.roll(4);
  game.wrongAnswer();
  game.roll(6);
  game.wasCorrectlyAnswered();
  game.roll(2);
  game.wasCorrectlyAnswered();
  game.roll(3);
  game.wasCorrectlyAnswered();
  game.roll(5);
  game.wrongAnswer();
  game.roll(5);
  game.wasCorrectlyAnswered();
  game.roll(2);
  game.wasCorrectlyAnswered();
  game.roll(3);
  game.wrongAnswer();
  game.roll(3);
  game.wasCorrectlyAnswered();
  game.roll(11);
  game.wrongAnswer();
  game.roll(11);
  game.wrongAnswer();
  game.roll(11);
  game.wrongAnswer();
  game.roll(11);
  game.wasCorrectlyAnswered();
  game.roll(13);
  game.wrongAnswer();
  game.roll(12);
  game.wasCorrectlyAnswered();
  game.roll(6);
  game.wasCorrectlyAnswered();
  game.roll(1);
  game.wasCorrectlyAnswered();
  game.roll(13);
  game.wasCorrectlyAnswered();
  game.roll(12);
  console.log("winner: " + game.wasCorrectlyAnswered());
  game.roll(13);
  game.wrongAnswer();
  game.roll(15);
  console.log("wrong answer: " + game.wrongAnswer());
  console.log("players count: " + game.howManyPlayers());
  game.reset();

  try {
    const {
      popQuestions,
      scienceQuestions,
      sportsQuestions,
      rockQuestions,
    } = require("./questions");

    // Reset all questions between tests
    // Should have no effect if it's encapsulated
    while (popQuestions.length > 0) {
      popQuestions.pop();
    }
    while (scienceQuestions.length > 0) {
      scienceQuestions.pop();
    }
    while (sportsQuestions.length > 0) {
      sportsQuestions.pop();
    }
    while (rockQuestions.length > 0) {
      rockQuestions.pop();
    }
  } catch {
    // May fail if we stop exposing them after encapsulation
  }

  assert(
    console.toString() ===
      `Chet was added
They are player number 1
Pat was added
They are player number 2
Sue was added
They are player number 3
added: true
Chet is the current player
They have rolled a 20
Chet's new location is 8
The category is Pop
Pop Question 0
Answer was correct!!!!
Chet now has 1 Gold Coins.
Pat is the current player
They have rolled a 0
Pat's new location is 0
The category is Pop
Pop Question 1
Answer was correct!!!!
Pat now has 1 Gold Coins.
Sue is the current player
They have rolled a 0
Sue's new location is 0
The category is Pop
Pop Question 2
Answer was correct!!!!
Sue now has 1 Gold Coins.
Chet is the current player
They have rolled a 10
Chet's new location is 6
The category is Sports
Sports Question 0
Question was incorrectly answered
Chet was sent to the penalty box
Pat is the current player
They have rolled a 6
Pat's new location is 6
The category is Sports
Sports Question 1
Question was incorrectly answered
Pat was sent to the penalty box
Sue is the current player
They have rolled a 5
Sue's new location is 5
The category is Science
Science Question 0
Question was incorrectly answered
Sue was sent to the penalty box
Chet is the current player
They have rolled a 2
Chet is not getting out of the penalty box (gtesOutOfPnlt)
Question was incorrectly answered
Chet was sent to the penalty box
Pat is the current player
They have rolled a 1
Pat is getting out of the penalty box
Pat's new location is 7
The category is Rock
Rock Question 0
Question was incorrectly answered
Pat was sent to the penalty box
Sue is the current player
They have rolled a 3
Sue is getting out of the penalty box
Sue's new location is 8
The category is Pop
Pop Question 3
Answer was correct!!!!
Sue now has 2 Gold Coins.
Chet is the current player
They have rolled a 3
Chet is getting out of the penalty box
Chet's new location is 9
The category is Science
Science Question 1
Answer was correct!!!!
Chet now has 2 Gold Coins.
Pat is the current player
They have rolled a 5
Pat is getting out of the penalty box
Pat's new location is 0
The category is Pop
Pop Question 4
Answer was correct!!!!
Pat now has 2 Gold Coins.
Sue is the current player
They have rolled a 2
Sue is not getting out of the penalty box (gtesOutOfPnlt)
Question was incorrectly answered
Sue was sent to the penalty box
Chet is the current player
They have rolled a 1
Chet is getting out of the penalty box
Chet's new location is 10
The category is Sports
Sports Question 2
Question was incorrectly answered
Chet was sent to the penalty box
Pat is the current player
They have rolled a 1
Pat is getting out of the penalty box
Pat's new location is 1
The category is Science
Science Question 2
Question was incorrectly answered
Pat was sent to the penalty box
Sue is the current player
They have rolled a 1
Sue is getting out of the penalty box
Sue's new location is 9
The category is Science
Science Question 3
Question was incorrectly answered
Sue was sent to the penalty box
Chet is the current player
They have rolled a 1
Chet is getting out of the penalty box
Chet's new location is 11
The category is Rock
Rock Question 1
Answer was correct!!!!
Chet now has 3 Gold Coins.
Pat is the current player
They have rolled a 4
Pat is not getting out of the penalty box (gtesOutOfPnlt)
Question was incorrectly answered
Pat was sent to the penalty box
Sue is the current player
They have rolled a 6
Sue is not getting out of the penalty box (gtesOutOfPnlt)
Chet is the current player
They have rolled a 2
Chet is not getting out of the penalty box (gtesOutOfPnlt)
Pat is the current player
They have rolled a 3
Pat is getting out of the penalty box
Pat's new location is 4
The category is Pop
Pop Question 5
Answer was correct!!!!
Pat now has 3 Gold Coins.
Sue is the current player
They have rolled a 5
Sue is getting out of the penalty box
Sue's new location is 2
The category is Sports
Sports Question 3
Question was incorrectly answered
Sue was sent to the penalty box
Chet is the current player
They have rolled a 5
Chet is getting out of the penalty box
Chet's new location is 4
The category is Pop
Pop Question 6
Answer was correct!!!!
Chet now has 4 Gold Coins.
Pat is the current player
They have rolled a 2
Pat is not getting out of the penalty box (gtesOutOfPnlt)
Sue is the current player
They have rolled a 3
Sue is getting out of the penalty box
Sue's new location is 5
The category is Science
Science Question 4
Question was incorrectly answered
Sue was sent to the penalty box
Chet is the current player
They have rolled a 3
Chet is getting out of the penalty box
Chet's new location is 7
The category is Rock
Rock Question 2
Answer was correct!!!!
Chet now has 5 Gold Coins.
Pat is the current player
They have rolled a 11
Pat is getting out of the penalty box
Pat's new location is 3
The category is Rock
Rock Question 3
Question was incorrectly answered
Pat was sent to the penalty box
Sue is the current player
They have rolled a 11
Sue is getting out of the penalty box
Sue's new location is 4
The category is Pop
Pop Question 7
Question was incorrectly answered
Sue was sent to the penalty box
Chet is the current player
They have rolled a 11
Chet is getting out of the penalty box
Chet's new location is 6
The category is Sports
Sports Question 4
Question was incorrectly answered
Chet was sent to the penalty box
Pat is the current player
They have rolled a 11
Pat is getting out of the penalty box
Pat's new location is 2
The category is Sports
Sports Question 5
Answer was correct!!!!
Pat now has 4 Gold Coins.
Sue is the current player
They have rolled a 13
Sue is getting out of the penalty box
Sue's new location is 5
The category is Science
Science Question 5
Question was incorrectly answered
Sue was sent to the penalty box
Chet is the current player
They have rolled a 12
Chet is not getting out of the penalty box (gtesOutOfPnlt)
Pat is the current player
They have rolled a 6
Pat is not getting out of the penalty box (gtesOutOfPnlt)
Sue is the current player
They have rolled a 1
Sue is getting out of the penalty box
Sue's new location is 6
The category is Sports
Sports Question 6
Answer was correct!!!!
Sue now has 3 Gold Coins.
Chet is the current player
They have rolled a 13
Chet is getting out of the penalty box
Chet's new location is 7
The category is Rock
Rock Question 4
Answer was correct!!!!
Chet now has 6 Gold Coins.
Pat is the current player
They have rolled a 12
Pat is not getting out of the penalty box (gtesOutOfPnlt)
winner: true
Sue is the current player
They have rolled a 13
Sue is getting out of the penalty box
Sue's new location is 7
The category is Rock
Rock Question 5
Question was incorrectly answered
Sue was sent to the penalty box
Chet is the current player
They have rolled a 15
Chet is getting out of the penalty box
Chet's new location is 10
The category is Sports
Sports Question 7
Question was incorrectly answered
Chet was sent to the penalty box
wrong answer: true
players count: 3`,
    console.toString()
  );
}

class FakeConsole {
  _messages = [];

  toString() {
    return this._messages.join("\n");
  }

  log(message) {
    this._messages.push(message);
  }
}
