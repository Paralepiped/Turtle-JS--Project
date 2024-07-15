// Required to use readlineSync for interactive command-line input
const readlineSync = require("readline-sync");

// AttackSkill class to represent an attack move
class AttackSkill {
  constructor(attack, damage, magic) {
    this.attack = attack; // Name of the attack
    this.damage = damage; // Damage points of the attack
    this.magic = magic; // Magic points required to perform the attack
  }
}

// Pokemon class to represent a Ninja Turtle (Pokemon equivalent)
class Pokemon {
  constructor(name, health, magic) {
    this.name = name; // Name of the Ninja Turtle
    this.health = health; // Health points of the Ninja Turtle
    this.magic = magic; // Magic points of the Ninja Turtle
    this.skills = []; // Array to hold attack skills
    this.counter = 0; // Counter to track successful attacks
  }

  // Method to learn a new attack skill
  learnAttackSkill(newSkill) {
    this.skills.push(newSkill); // Adds the new skill to the skills array
  }

  // Method to show the current status of the Ninja Turtle
  showStatus() {
    console.log(`${this.name} - Health: ${this.health}, Magic: ${this.magic}`);
    if (this.counter > 3) {
      console.log(`${this.name} has won the battle!`);
    }
  }

  // Method to randomly increase the magic points
  getMagics() {
    const magicIncrease = Math.floor(Math.random() * 21); // Generates a random number between 0 and 20
    this.magic += magicIncrease;
    console.log(`${this.name} gained ${magicIncrease} magic points!`);
  }

  // Method to check if the Ninja Turtle has enough magic to perform an attack
  hasEnoughMagic(skillName) {
    const skill = this.skills.find((skill) => skill.attack === skillName);
    if (!skill) {
      console.log(`${this.name} doesn't know the attack ${skillName}`);
      return false;
    }
    return this.magic >= skill.magic;
  }

  // Method to check if the Ninja Turtle is alive
  isAlive() {
    return this.health > 0;
  }

  // Method to perform an attack on another Ninja Turtle
  attack(skillName, opponent) {
    if (!this.isAlive()) {
      console.log(`${this.name} is already defeated and cannot attack.`);
      return;
    }

    if (!opponent.isAlive()) {
      console.log(`${opponent.name} is already defeated.`);
      return;
    }

    const skill = this.skills.find((skill) => skill.attack === skillName);
    if (!skill) {
      console.log(`${this.name} doesn't know the attack ${skillName}`);
      return;
    }

    if (!this.hasEnoughMagic(skillName)) {
      console.log(`${this.name} doesn't have enough magic to use ${skillName}`);
      return;
    }

    // Perform the attack
    this.magic -= skill.magic;
    opponent.health -= skill.damage;
    this.counter += 1;

    console.log(
      `${this.name} uses ${skillName} on ${opponent.name} causing ${skill.damage} damage!`
    );

    // Show status of both Ninja Turtles
    this.showStatus();
    opponent.showStatus();
  }
}

// Create Ninja Turtle instances
let michelangelo = new Pokemon("Michelangelo", 120, 80);
let donatello = new Pokemon("Donatello", 95, 105);
let raphael = new Pokemon("Raphael", 110, 100);
let leonardo = new Pokemon("Leonardo", 130, 90);

// Create attack skills
let nunchakuStrike = new AttackSkill("Nunchaku Strike", 40, 30);
let boStaffHit = new AttackSkill("Bo Staff Hit", 35, 25);
let saiStab = new AttackSkill("Sai Stab", 45, 35);
let katanaSlash = new AttackSkill("Katana Slash", 50, 40);

// Ninja Turtles learn their skills
michelangelo.learnAttackSkill(nunchakuStrike);
donatello.learnAttackSkill(boStaffHit);
raphael.learnAttackSkill(saiStab);
leonardo.learnAttackSkill(katanaSlash);

// Interactive battle using readlineSync
function battle() {
  while (
    michelangelo.isAlive() &&
    donatello.isAlive() &&
    raphael.isAlive() &&
    leonardo.isAlive()
  ) {
    const attackerName = readlineSync.question(
      "Who is attacking? (Michelangelo, Donatello, Raphael, Leonardo): "
    );
    const skillName = readlineSync.question("Which skill to use? ");

    let attacker, opponent;

    switch (attackerName.toLowerCase()) {
      case "michelangelo":
        attacker = michelangelo;
        break;
      case "donatello":
        attacker = donatello;
        break;
      case "raphael":
        attacker = raphael;
        break;
      case "leonardo":
        attacker = leonardo;
        break;
      default:
        console.log("Invalid attacker name.");
        continue;
    }

    const opponentName = readlineSync.question(
      "Who is the opponent? (Michelangelo, Donatello, Raphael, Leonardo): "
    );

    switch (opponentName.toLowerCase()) {
      case "michelangelo":
        opponent = michelangelo;
        break;
      case "donatello":
        opponent = donatello;
        break;
      case "raphael":
        opponent = raphael;
        break;
      case "leonardo":
        opponent = leonardo;
        break;
      default:
        console.log("Invalid opponent name.");
        continue;
    }

    if (attacker && opponent) {
      attacker.attack(skillName, opponent);
    }

    // Check if the game is over
    if (
      !michelangelo.isAlive() ||
      !donatello.isAlive() ||
      !raphael.isAlive() ||
      !leonardo.isAlive()
    ) {
      console.log("Game over!");
      break;
    }

    // Optionally, get more magic for each Ninja Turtle
    michelangelo.getMagics();
    donatello.getMagics();
    raphael.getMagics();
    leonardo.getMagics();
  }
}

// Start the battle simulation
battle();
