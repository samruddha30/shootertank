// You could have multiple flags like: start, launch to indicate the state of the game.


// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;
var tanker;
var angle = 0
var canonBall;
var shot;
var ground;
var ball_1, ball_2, ball_3
var launcherX, launcherY;
var flag = "start"


function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

    var canvas = createCanvas(800, 500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width / 2, height - 10, width, 30);
    tanker = new Tanker(75, height - 110, 60, 30);

    ball_1 = new Ball(400, 50, 20)
    ball_2 = new Ball(500, 100, 20)
    ball_3 = new Ball(600, 150, 20)

    canonBall = new CanonBall(20, 20);
    tanker.scale=0.5;

    shot = new ShootBall(canonBall.body, { x: 70, y: height - 220 });
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(255)
Matter.Engine.update(engine);
ground.display()
ball_2.display()
ball_1.display()
ball_3.display();
canonBall.display();
tanker.display();
shot.display();
if (keyIsDown(UP_ARROW)) {
    shot.attach(canonBall.body)
}
}


function keyReleased() {
    // Call the shoot method for the cannon.
    if (keyCode === DOWN_ARROW) {
        flag = "launch"

        shot.shoot()
    }
}