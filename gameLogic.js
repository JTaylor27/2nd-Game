var myGame = {
  config : {
      lives: 3,
      speed : .7,
      jumpButton : 32,
      leftButton : 65,
      rightButton : 68,
      gravity : -0.9,
      jumpForce : 6,
      actionButton: 'leftmouse',
      playerSettings : {
        meshName: 'Player',
        rootUrl: '/models/',
        file:'taylor.babylon',
        spawnPoint : 'InitialSpawn',
        animationsSetup : [
          {
            name : 'walk',
            start : 5,
            end : 14,
            options : {
              ratio: .7
            }
          },
          {
            name : 'hit',
            start:110,
            end : 120,
            options : {
              loop : false,
              ratio : 1
            }
          },
          {
            name : 'jump',
            start : 40,
            end : 43,
            options : {
              ratio : 2,
              loop : false
            }
          }
        ],
        rotationValues : {
          left : Math.PI/2,
          right : -Math.PI/2
        },

        scale : {
          x: 2,
          y: 2,
          z : 2
        },
        boundsOffset : {
          z : 1,
          x : 0,
          y: 3.3
        },
        boundsSize : {
          z : 1,
          x : 1.5,
          y: 3
        }
      },
      screenImages : [
        {
          src:'/images/start.png',
          id : 'mainScreen'
        },
        {
          src : '/images/lose.png',
          id : 'loseScreen'
        },
        {
          src : '/images/win.png',
          id : 'winScreen'
        }
      ],
      livesImage : {
        src : '/images/heart.png',
        dX:0,
        dY:10,
        dWidth:30,
        dHeight:30
      },
      cameraSettings : {
        offset : {
          x : 0,
          y : 0,
          z : -30
        },
        rotation : {
          x: 0,
          y: 0,
          z: 0
        }
      }
  },

  scripts : function(){
    //TODO this is where you can add your own game logic

  }
};

function start(){
    myGame.game = new A3D.Game.Platformer(myGame.config);
    myGame.game.loadScene('/scenes/','platformer.babylon',myGame.scripts);
}

document.addEventListener( "DOMContentLoaded", start, false );
