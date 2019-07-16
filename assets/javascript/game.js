//SET VARIABLES
var charSelected = false;
var enemySelected = false;
var character = {};
var enemy = {};
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
    character.attackPower = selectedChar.attackPower;
    character.attack = selectedChar.attack;
  }
  
  function initEnemy(enemyPick) {
    enemy.name = enemyPick.name;
    enemy.health = enemyPick.health;
    enemy.attackPower = enemyPick.attackPower;
    enemy.attack = enemyPick.attack;
  }

  // This function will move the remaining characters to the enemies section
  
  function resetGame() {
    gameOver = false;
    charSelected = false;
    enemySelected = false;
    enemiesDefeated = 0;
    character = {};
    enemy = {};
    
    $("#jar-jar-char").children(".health").html(jarJarBinks.health);
    $("#luke-sky-char").children(".health").html(lukeSkywalker.health);
    $("#darth-vader-char").children(".health").html(darthVader.health);
    $("#r2d2-char").children(".health").html(R2D2.health);
    $("#boba-char").children(".health").html(bobaFett.health);
  
    $(".char-img").removeClass("chosenChar enemyChar enemyDefender").addClass("open-char");
    var available = $(".open-char").show();
    $("#availChar").html(available);
  
    $("#announcement").empty();
    $("#restart").hide();
  

  }

  function moveToEnemies() {
    $(".open-char").removeClass("open-char").addClass("enemyChar");
    $("#leftOverEnemies").append($(".enemyChar"));
  }


  $(document).ready(function() {

    $("#restart").hide();
  
    $("#jar-jar-char").on("click", function () {
      console.log("Jar Jar Binks chosen");
  
      // User is choosing the character
      if(charSelected == false) {
        $("#announcement").empty();
  
        // Set the user's character
        initHero(jarJarBinks);
        charSelected = true;
  
        // Display the chosen character
        $("#jar-jar-char").removeClass("open-char").addClass("chosenChar");
        $("#chosenChar").append(this);
  
        // Move the remaining characters to the enemies section
        moveToEnemies();
      } else if ((charSelected == true) && (enemySelected == false)) {
        // User is choosing the defender
        if($("#jar-jar-char").hasClass("enemyChar")) {
          $("#announcement").empty();
  
          // Set the user's enemy
          initEnemy(jarJarBinks);
          enemySelected = true;
  
          // Add the character to the defender section
          $("#jar-jar-char").removeClass("enemyChar").addClass("enemyDefender");
          $("#defendArea").append(this);
        }
      }

    });
     
  $("#restart").on("click", function() {
    console.log("Restart selected");

    resetGame();
  });
 
    });