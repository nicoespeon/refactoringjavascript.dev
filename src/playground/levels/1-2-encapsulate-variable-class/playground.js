import { settings } from "./settings";

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

    let gtesOutOfPnlt = false;

    var didPlayerWin = function () {
      return !(purses[settings.curPlayer] == 6);
    };

    var currentCategory = function () {
      if (places[settings.curPlayer] == 0) return "Pop";
      if (places[settings.curPlayer] == 4) return "Pop";
      if (places[settings.curPlayer] == 8) return "Pop";
      if (places[settings.curPlayer] == 1) return "Science";
      if (places[settings.curPlayer] == 5) return "Science";
      if (places[settings.curPlayer] == 9) return "Science";
      if (places[settings.curPlayer] == 2) return "Sports";
      if (places[settings.curPlayer] == 6) return "Sports";
      if (places[settings.curPlayer] == 10) return "Sports";
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
      console.log(plyrs[settings.curPlayer] + " is the current player");
      console.log("They have rolled a " + roll);

      if (inPenaltyBox[settings.curPlayer]) {
        if (roll % 2 != 0) {
          gtesOutOfPnlt = true;

          console.log(
            plyrs[settings.curPlayer] + " is getting out of the penalty box"
          );
          places[settings.curPlayer] = places[settings.curPlayer] + roll;
          if (places[settings.curPlayer] > 11) {
            places[settings.curPlayer] = places[settings.curPlayer] - 12;
          }

          console.log(
            plyrs[settings.curPlayer] +
              "'s new location is " +
              places[settings.curPlayer]
          );
          console.log("The category is " + currentCategory());
          askQuestion();
        } else {
          console.log(
            plyrs[settings.curPlayer] +
              " is not getting out of the penalty box (gtesOutOfPnlt)"
          );
          gtesOutOfPnlt = false;
        }
      } else {
        places[settings.curPlayer] = places[settings.curPlayer] + roll;
        if (places[settings.curPlayer] > 11) {
          places[settings.curPlayer] = places[settings.curPlayer] - 12;
        }

        console.log(
          plyrs[settings.curPlayer] +
            "'s new location is " +
            places[settings.curPlayer]
        );
        console.log("The category is " + currentCategory());
        askQuestion();
      }
    };

    this.wasCorrectlyAnswered = function () {
      if (inPenaltyBox[settings.curPlayer]) {
        if (gtesOutOfPnlt) {
          console.log("Answer was correct!!!!");
          purses[settings.curPlayer] += 1;
          console.log(
            plyrs[settings.curPlayer] +
              " now has " +
              purses[settings.curPlayer] +
              " Gold Coins."
          );

          var winner = didPlayerWin();
          settings.curPlayer += 1;
          if (settings.curPlayer == plyrs.length) settings.curPlayer = 0;

          return winner;
        } else {
          settings.curPlayer += 1;
          if (settings.curPlayer == plyrs.length) settings.curPlayer = 0;
          return true;
        }
      } else {
        console.log("Answer was correct!!!!");

        purses[settings.curPlayer] += 1;
        console.log(
          plyrs[settings.curPlayer] +
            " now has " +
            purses[settings.curPlayer] +
            " Gold Coins."
        );

        var winner = didPlayerWin();

        settings.curPlayer += 1;
        if (settings.curPlayer == plyrs.length) settings.curPlayer = 0;

        return winner;
      }
    };

    this.wrongAnswer = function () {
      console.log("Question was incorrectly answered");
      console.log(plyrs[settings.curPlayer] + " was sent to the penalty box");
      inPenaltyBox[settings.curPlayer] = true;

      settings.curPlayer += 1;
      if (settings.curPlayer == plyrs.length) settings.curPlayer = 0;
      return true;
    };

    this.reset = function () {
      if (settings.curPlayer) settings.curPlayer = 0;
    };
  };
}

export { createGame };
