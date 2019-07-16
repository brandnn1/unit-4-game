//SET VARIABLES
var characterSelected = false;

var defenderSelected = false;

var character = {};

var defender = {};

var enemiesDefeated = 0;

gameOver = false;


var jarJarBinks = {
    name: "Jar Jar Binks",
    health: 120,
    attack: 8,
    attackPower: 8
  };
  
  var lukeSkywalker = {
    name: "Luke Skywalker",
    health: 100,
    attack: 5,
    attackPower: 5
};
  
  var darthVader = {
    name: "Darth Vader",
    health: 150,
    attack: 20,
    attackPower: 20
  };
  
  var R2D2 = {
    name: "R2D2",
    health: 70,
    attack: 40,
    attackPower: 40
  };
  
  var bobaFett = {
    name: "Boba Fett",
    health: 180,
    attack: 25,
    attackPower: 25
  };
  
  function initHero(selectedChar) {
    character.name = selectedChar.name;
    character.health = selectedChar.health;
    character.baseAttack = selectedChar.baseAttack;
    character.attack = selectedChar.attack;
  }
  
  function initEnemy(enemyPick) {
    enemy.name = enemyPick.name;
    enemy.health = enemyPick.health;
    enemy.baseAttack = enemyPick.baseAttack;
    enemy.attack = enemyPick.attack;
  }

  // This function will move the remaining characters to the enemies section
function moveToEnemies() {
    $(".open-char").removeClass("open-char").addClass("enemyChar");
    $("#leftOverEnemies").append($(".enemyChar"));
  }
  