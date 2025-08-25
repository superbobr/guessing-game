class GuessingGame {
  constructor(min, max) {
    this.setRange(min, max);
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
    this.currentGuess = Math.ceil((min + max) / 2);
  }

  guess() {
    return this.currentGuess;
  }

  lower() {
    this.max = this.currentGuess;
    this.currentGuess = Math.ceil((this.min + this.max) / 2);
  }

  greater() {
    this.min = this.currentGuess;
    this.currentGuess = Math.ceil((this.min + this.max) / 2);
  }
}

module.exports = GuessingGame;
