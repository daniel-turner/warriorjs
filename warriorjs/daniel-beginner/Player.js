class Player {

  playTurn(warrior) {
    // Cool code goes here

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

        if(warrior.health() < 20) {

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
}

global.Player = Player;
