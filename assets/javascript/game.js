//SET VARIABLES
var charSelected = false;
var enemySelected = false;
var character = [];
var enemy = [];
var enemiesDefeated = 0;

gameOver = false;


var jarJarBinks = {
    name: "Jar Jar Binks",
    health: 421,
    attack: 1,
    attackPower: 1
  };
  
  var lukeSkywalker = {
    name: "Luke Skywalker",
    health: 100,
    attack: 10,
    attackPower: 10
};
  
  var darthVader = {
    name: "Darth Vader",
    health: 250,
    attack: 20,
    attackPower: 20
  };
  
  var R2D2 = {
    name: "R2D2",
    health: 60,
    attack: 40,
    attackPower: 40
  };
  
  var bobaFett = {
    name: "Boba Fett",
    health: 130,
    attack: 15,
    attackPower: 15
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
    character = [];
    enemy = [];
    
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
  
      if(charSelected == false) {
        $("#announcement").empty();

        initHero(jarJarBinks);
        charSelected = true;
  
        $("#jar-jar-char").removeClass("open-char").addClass("chosenChar");
        $("#chosenChar").append(this);
        
        moveToEnemies();
      } else if ((charSelected == true) && (enemySelected == false)) {
   
        if($("#jar-jar-char").hasClass("enemyChar")) {
          $("#announcement").empty();
  
          initEnemy(jarJarBinks);
          enemySelected = true;
  
          $("#jar-jar-char").removeClass("enemyChar").addClass("enemyDefender");
          $("#defendArea").append(this);
        }
      }
    });

      $("#luke-sky-char").on("click", function () {
        console.log("Luke Skywalker is selected");
    
        if(charSelected== false) {
          $("#announcement").empty();
    
          initHero(lukeSkywalker);
          charSelected= true;
    
          $("#luke-sky-char").removeClass("open-char").addClass("chosenChar");
          $("#chosenChar").append(this);
    
          moveToEnemies();
        } else if ((charSelected== true) && (enemySelected == false)) {

          if($("#luke-sky-char").hasClass("enemyChar")) {
            $("#announcement").empty();
    
            initEnemy(lukeSkywalker);
            enemySelected = true;
    
            $("#luke-sky-char").removeClass("enemyChar").addClass("enemyDefender");
            $("#defendArea").append(this);
          }
        }
      });
    
      $("#darth-vader-char").on("click", function () {
        console.log("Darth Vader is selected");
    
        if(charSelected== false) {
          $("#announcement").empty();
    
          initHero(darthVader);
          charSelected= true;
    
          $("#darth-vader-char").removeClass("open-char").addClass("chosenChar");
          $("#chosenChar").append(this);
    
          moveToEnemies();
        } else if ((charSelected== true) && (enemySelected == false)) {

          if($("#darth-vader-char").hasClass("enemyChar")) {
            $("#announcement").empty();

            initEnemy(darthVader);
            enemySelected = true;
    
            $("#darth-vader-char").removeClass("enemyChar").addClass("enemyDefender");
            $("#defendArea").append(this);
          }
        }
      });
    
      $("#r2d2-char").on("click", function () {
        console.log("Artoo Detoo chosen");
    
        if(charSelected== false) {
          $("#announcement").empty();
    
          initHero(R2D2);
          charSelected= true;
    
          $("#r2d2-char").removeClass("open-char").addClass("chosenChar");
          $("#chosenChar").append(this);
    
          moveToEnemies();
        } else if ((charSelected== true) && (enemySelected == false)) {

          if($("#r2d2-char").hasClass("enemyChar")) {
            $("#announcement").empty();
    
            initEnemy(R2D2);
            enemySelected = true;
    
            $("#r2d2-char").removeClass("enemyChar").addClass("enemyDefender");
            $("#defendArea").append(this);
          }
        }
      });
    
      $("#boba-char").on("click", function () {
        console.log("Boba Fett chosen");
    
        if(charSelected== false) {
          $("#announcement").empty();
    
          initHero(bobaFett);
          charSelected= true;
    
          $("#boba-char").removeClass("open-char").addClass("chosenChar");
          $("#chosenChar").append(this);

          moveToEnemies();
        } else if ((charSelected== true) && (enemySelected == false)) {

          if($("#boba-char").hasClass("enemyChar")) {
            $("#announcement").empty();
    
            initEnemy(bobaFett);
            enemySelected = true;
    
            $("#boba-char").removeClass("enemyChar").addClass("enemyDefender");
            $("#defendArea").append(this);
          }
        }
    });
     
    
  $("#attack").on("click", function() {

    if (charSelected&& enemySelected && !gameOver) {

      enemy.health = enemy.health - character.attack;
      $(".enemyDefender").children(".health").html(enemy.health);
      $("#announcement").html("<br><p>You attacked " + enemy.name + " for " + character.attack + " damage.<p>");

      character.attack = character.attack + character.attackPower;

      if (enemy.health > 0) {
        character.health = character.health - enemy.attackPower;
        $(".chosenChar").children(".health").html(character.health);

        if (character.health > 0) {
          $("#announcement").append("<br><p>" + enemy.name + " attacked you back for " + enemy.attackPower + " damage.</p>");
        } else {
          gameOver = true;
          $("#restart").show();
          $("#announcement").html("<br><p>Do you even lift? Game over.</p><p>Play again?</p>");
          
        }
      } else {

        enemiesDefeated++;
        enemySelected = false;
        $(".enemyDefender").hide();
        $("#announcement").html("<br><p>You attacked " + enemy.name + " for " + character.attack + " damage.<p>");
        $("#announcement").append("<br><p>You demolished " + enemy.name + "! Pick another victim.</p>");
        

        if (enemiesDefeated === 4) {
          gameOver = true;
          $("#announcement").html("<br><p>You win Star Wars!</p><p>Play again?</p>");
          $("#restart").show();
        }
      }
    } else if (!charSelected&& !gameOver) {
      $("#announcement").html("<br><p>Select your game character!</p>");
    } else if (!enemySelected && !gameOver) {
      $("#announcement").html("<br><p>Choose an enemy to fight!</p>");
    }


  });
  
    $("#restart").on("click", function() {
        console.log("Restart selected");

        resetGame();
    });
 
});