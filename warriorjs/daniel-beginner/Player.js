class Player {

  // get _health() {

  //   return this._health;
  // };

  // set _health(health) {

  //   this._health = health;
  // };

  playTurn(warrior) {
    // Cool code goes here

    console.log(warrior);

    var forward = [];
    var backward = [];
    var left = [];
    var right = [];

    var look = function() {

      forward = warrior.look();
      backward = warrior.look("backward");
      left = warrior.look("left");
      right = warrior.look("right");
    };

    var reactFront = function() {

      var front = warrior.feel();

      if(!front.isEmpty) {

        if(front.isCaptive()) {

          warrior.rescue();
          return;
        };

        if(front.isWall()) {

          evaluateDirection();
        }

        if(front.isEnemy()) {

          warrior.attack();
          return;
        }
      }

      evaluateDirection;

    };

    var evaluateDirection = function() {

      var priorityDirection = "";
      var lowestRange = 4;

    };

    var moveForward = function() {

      if(warrior.feel("backward").isCaptive() ) {

        warrior.rescue("backward");

      } else {

        if(!warrior.feel().isEmpty()) {

          if(warrior.feel().isCaptive()) {

            warrior.rescue();

          } else if(warrior.feel().isWall()) {

            warrior.pivot();

          } else {

            warrior.attack();

          }

        } else {

          if(warrior.health() < 19) {

            if(warrior.health() < this._health) {

              if(warrior.health() < 15) {

                warrior.walk("backward");

              } else {

                warrior.walk();
              }

            } else {

              warrior.rest();
            }

          } else {

            warrior.walk();
          }
        }
      }

      this._health = warrior.health();
    }

    console.log(this._health);

    look();

    reactFront();

    moveForward();
  }
}

global.Player = Player;
