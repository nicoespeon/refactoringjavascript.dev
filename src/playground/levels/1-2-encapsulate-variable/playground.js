function createGame(console) {
  return function Game() {
    const plyrs = new Array();
    const places = new Array(6);
    const purses = new Array(6);
    var inPenaltyBox = new Array(6);

    const popQuestions = new Array();
    const scienceQuestions = new Array();
    const sportsQuestions = new Array();
    const rockQuestions = new Array();

    let curPlayer = 0;
    let gtesOutOfPnlt = false;

    var didPlayerWin = function () {
      return !(purses[curPlayer] == 6);
    };

    var currentCategory = function () {
      if (places[curPlayer] == 0) return "Pop";
      if (places[curPlayer] == 4) return "Pop";
      if (places[curPlayer] == 8) return "Pop";
      if (places[curPlayer] == 1) return "Science";
      if (places[curPlayer] == 5) return "Science";
      if (places[curPlayer] == 9) return "Science";
      if (places[curPlayer] == 2) return "Sports";
      if (places[curPlayer] == 6) return "Sports";
      if (places[curPlayer] == 10) return "Sports";
      return "Rock";
    };

    this.createRockQuestion = function (idx) {
      return "Rock Question " + idx;
    };

    for (var i = 0; i < 50; i++) {
      popQuestions.push("Pop Question " + i);
      scienceQuestions.push("Science Question " + i);
      sportsQuestions.push("Sports Question " + i);
      rockQuestions.push(this.createRockQuestion(i));
    }

    this.isPlayable = function (howManyPlayers) {
      return howManyPlayers >= 2;
    };

    this.add = function (playerName) {
      plyrs.push(playerName);
      places[this.howManyPlayers() - 1] = 0;
      purses[this.howManyPlayers() - 1] = 0;
      inPenaltyBox[this.howManyPlayers() - 1] = false;

      console.log(playerName + " was added");
      console.log("They are player number " + plyrs.length);

      return true;
    };

    this.howManyPlayers = function () {
      return plyrs.length;
    };

    var askQuestion = function () {
      if (currentCategory() == "Pop") console.log(popQuestions.shift());
      if (currentCategory() == "Science") console.log(scienceQuestions.shift());
      if (currentCategory() == "Sports") console.log(sportsQuestions.shift());
      if (currentCategory() == "Rock") console.log(rockQuestions.shift());
    };

    this.roll = function (roll) {
      console.log(plyrs[curPlayer] + " is the current player");
      console.log("They have rolled a " + roll);

      if (inPenaltyBox[curPlayer]) {
        if (roll % 2 != 0) {
          gtesOutOfPnlt = true;

          console.log(plyrs[curPlayer] + " is getting out of the penalty box");
          places[curPlayer] = places[curPlayer] + roll;
          if (places[curPlayer] > 11) {
            places[curPlayer] = places[curPlayer] - 12;
          }

          console.log(
            plyrs[curPlayer] + "'s new location is " + places[curPlayer]
          );
          console.log("The category is " + currentCategory());
          askQuestion();
        } else {
          console.log(
            plyrs[curPlayer] +
              " is not getting out of the penalty box (gtesOutOfPnlt)"
          );
          gtesOutOfPnlt = false;
        }
      } else {
        places[curPlayer] = places[curPlayer] + roll;
        if (places[curPlayer] > 11) {
          places[curPlayer] = places[curPlayer] - 12;
        }

        console.log(
          plyrs[curPlayer] + "'s new location is " + places[curPlayer]
        );
        console.log("The category is " + currentCategory());
        askQuestion();
      }
    };

    this.wasCorrectlyAnswered = function () {
      if (inPenaltyBox[curPlayer]) {
        if (gtesOutOfPnlt) {
          console.log("Answer was correct!!!!");
          purses[curPlayer] += 1;
          console.log(
            plyrs[curPlayer] + " now has " + purses[curPlayer] + " Gold Coins."
          );

          var winner = didPlayerWin();
          curPlayer += 1;
          if (curPlayer == plyrs.length) curPlayer = 0;

          return winner;
        } else {
          curPlayer += 1;
          if (curPlayer == plyrs.length) curPlayer = 0;
          return true;
        }
      } else {
        console.log("Answer was correct!!!!");

        purses[curPlayer] += 1;
        console.log(
          plyrs[curPlayer] + " now has " + purses[curPlayer] + " Gold Coins."
        );

        var winner = didPlayerWin();

        curPlayer += 1;
        if (curPlayer == plyrs.length) curPlayer = 0;

        return winner;
      }
    };

    this.wrongAnswer = function () {
      console.log("Question was incorrectly answered");
      console.log(plyrs[curPlayer] + " was sent to the penalty box");
      inPenaltyBox[curPlayer] = true;

      curPlayer += 1;
      if (curPlayer == plyrs.length) curPlayer = 0;
      return true;
    };

    this.reset = function () {
      if (curPlayer) curPlayer = 0;
    };
  };
}

export { createGame };
