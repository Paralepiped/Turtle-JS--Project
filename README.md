# _&$ Turtle-JS-Project &$_

# _&$ Ninja Turtles Battle Simulation &$_

**\***npm install readline-sync colors chalk play-sound node-emoji

## & Overview &

This project simulates a battle between the Ninja Turtles using JavaScript classes and methods. Each turtle can learn attack skills and use them to battle other turtles. The simulation includes health, magic, and skill management.

## & Features &

- Create Ninja Turtles with health and magic attributes.
- Define attack skills with specific damage and magic cost.
- Turtles can learn and use attack skills.
- Turtles take turns attacking each other.
- The battle continues until a turtle wins by attacking successfully more than three times.

## & Classes &

### NinjaTurtle

Represents a Ninja Turtle with the following properties:

- `name`: A string that represents the name of the turtle.
- `health`: A number that represents the health of the turtle.
- `magic`: A number that represents the magic of the turtle.
- `skills`: An array that holds the attack skills of the turtle. It starts as an empty array.
- `counter`: A number that starts at 0 and increments every time the turtle launches a successful attack.

#### Methods

- `learnAttackSkill(newSkill)`: Adds a new attack skill to the skills array.
- `showStatus()`: Logs the current health and magic of the turtle, and whether it has won the battle.
- `getMagics()`: Increases the turtle's magic by a random number between 0 and 20.
- `hasEnoughMagic(skillName)`: Checks if the turtle has enough magic to perform an attack skill.
- `isAlive()`: Checks if the turtle is alive by checking if its health is greater than 0.
- `attack(skillName, opponent)`: Simulates an attack from the turtle to an opponent turtle.

### & AttackSkill &

Represents an attack skill with the following properties:

- `attack`: A string that represents the name of the attack.
- `damage`: A number that represents the damage caused by the attack.
- `magic`: A number that represents the magic cost of the attack.

## & Instructions &

### & Step 1: Setup &

Make sure you have a JavaScript runtime environment such as Node.js installed.

### & Step 2: Create Classes &

Create the `NinjaTurtle` and `AttackSkill` classes based on the properties and methods described above.

### & Step 3: Instantiate Ninja Turtles &

Create instances of the `NinjaTurtle` class for each of the four turtles:

```javascript
let michelangelo = new NinjaTurtle("Michelangelo", 120, 80);
let donatello = new NinjaTurtle("Donatello", 95, 105);
let raphael = new NinjaTurtle("Raphael", 110, 90);
let leonardo = new NinjaTurtle("Leonardo", 100, 100);
& Step 4: Define Attack Skills &
Create instances of the AttackSkill class for each of the attack skills:

javascript
Copy code
let nunchakuStrike = new AttackSkill("Nunchaku Strike", 40, 30);
let boStaffHit = new AttackSkill("Bo Staff Hit", 35, 25);
let saiStab = new AttackSkill("Sai Stab", 45, 35);
let katanaSlash = new AttackSkill("Katana Slash", 50, 40);
& Step 5: Teach Skills to Turtles &
Teach the attack skills to each of the Ninja Turtles:

javascript
Copy code
michelangelo.learnAttackSkill(nunchakuStrike);
donatello.learnAttackSkill(boStaffHit);
raphael.learnAttackSkill(saiStab);
leonardo.learnAttackSkill(katanaSlash);
& Step 6: Simulate the Battle &
Create a function to simulate the battle. This function will loop until only one turtle is left standing:

// Start the battle simulation
battle();
& Running the Simulation &
To start the battle, run the script using Node.js:
```
