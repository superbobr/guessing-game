class GuessingGame {
  constructor(min, max, currentGuess = null) {
    this.min = min;
    this.max = max;
    this.currentGuess = currentGuess;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
    this.currentGuess = Math.floor((this.min + this.max) / 2);
  }

  guess() {
    return this.currentGuess;
  }

  lower() {}

  greater() {}
}

module.exports = GuessingGame;
