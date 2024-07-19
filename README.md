# Ninja Turtles Battle Simulator

## Overview

This Node.js application simulates a battle between four Ninja Turtles: Michelangelo, Donatello, Raphael, and Leonardo. Each turtle has unique attack skills and attributes, engaging in turn-based combat until only one remains standing.

## Characters and Skills

### Michelangelo ����

- Health: 120
- Magic: 80
- Skills:
- Nunchaku Strike:

* Deals 40 damage
* requires 30 magic

### Donatello ����

- Health: 95
- Magic: 105
- Skills:
- Bo Staff Hit:

* Deals 35 damage
* requires 25 magic

### Raphael ����

- Health: 110
- Magic: 100
- Skills:
- Sai Stab:

* Deals 45 damage
* requires 35 magic

### Leonardo ����

- Health: 130
- Magic: 90
- Skills:
- Katana Slash:

* Deals 50 damage
* requires 40 magic

## More explanations:

- constructor(name, health, magic): Initializes a turtle with name, health, magic, and initializes an empty skills array.
- learnAttackSkill(newSkill): Adds a new attack skill to the turtle's skills array.
- showStatus(): Displays the current health and magic of the turtle.
- getMagics(): Increases the turtle's magic points randomly.
- hasEnoughMagic(skillName): Checks if the turtle has enough magic to perform a specific attack.
- isAlive(): Checks if the turtle is still alive.
- playSound(filePath): Dummy method to simulate playing a sound on attack.
- attack(skillName, opponent): Performs an attack on the opponent using a specified skill.
- AttackSkill Class

* constructor(attack, damage, magic): Initializes an attack skill with name, damage, and magic points required.
* Usage
* Setup

- Ensure Node.js is installed.
- Install necessary modules using npm install readline-sync colors.
- Execution

1. Run the program using node code.js.
2. Follow the prompts to select attackers, skills, and opponents until the game concludes.

### Notes

- The battle continues until only one Ninja Turtle remains alive.
- Magic points replenish randomly throughout the battle.
- Each Ninja Turtle can use their unique skills to strategically defeat opponents.

##Credits
Developer: [Martrin Hristov]
Version: 1.0.0
Ausblenden



