/// <reference path = "_reference.ts" />
// global variables
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var menu;
var play;
var church;
var forest;
var desert;
var tunnel;
var lostcave;
var churchtunnel;
var deadEnd1;
var deadEnd2;
var deadEnd3;
var deadEnd4;
var deadEnd5;
var deadEnd6;
var deadEnd7;
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    /*var ctx=canvas.msGetInputContext();
    
    var bg=new Image();
    bg.src="../../Assets/images/VampireOutcast.jpg";
    
    bg.onload=function(){
        
    
    }*/
    // create our main display list container
    stage = new createjs.Stage(canvas);
    //stage.toDataURL("blue","init");
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.DARKFOREST:
            // show the DARKFOREST scene
            stage.removeAllChildren();
            forest = new scenes.DarkForest();
            currentScene = forest;
            console.log("Starting DARKFOREST Scene");
            break;
        case config.Scene.DESERT:
            // show the DESERT scene
            stage.removeAllChildren();
            desert = new scenes.Desert();
            currentScene = desert;
            console.log("Starting DESERT Scene");
            break;
        case config.Scene.TUNNEL:
            // show the TUNNEL scene
            stage.removeAllChildren();
            tunnel = new scenes.Tunnel();
            currentScene = tunnel;
            console.log("Starting TUNNEL Scene");
            break;
        case config.Scene.DEADEND1:
            // show the TUNNEL scene
            stage.removeAllChildren();
            deadEnd1 = new scenes.DeadEnd1();
            currentScene = deadEnd1;
            console.log("Starting DEADEND1 Scene");
            break;
        case config.Scene.DEADEND2:
            // show the TUNNEL scene
            stage.removeAllChildren();
            deadEnd2 = new scenes.DeadEnd2();
            currentScene = deadEnd2;
            console.log("Starting DEADEND2 Scene");
            break;
        case config.Scene.DEADEND3:
            // show the TUNNEL scene
            stage.removeAllChildren();
            deadEnd3 = new scenes.DeadEnd3();
            currentScene = deadEnd3;
            console.log("Starting DEADEND3 Scene");
            break;
        case config.Scene.DEADEND4:
            // show the TUNNEL scene
            stage.removeAllChildren();
            deadEnd4 = new scenes.DeadEnd4();
            currentScene = deadEnd4;
            console.log("Starting DEADEND4 Scene");
            break;
        case config.Scene.DEADEND5:
            // show the TUNNEL scene
            stage.removeAllChildren();
            deadEnd5 = new scenes.DeadEnd5();
            currentScene = deadEnd5;
            console.log("Starting DEADEND5 Scene");
            break;
        case config.Scene.DEADEND6:
            // show the TUNNEL scene
            stage.removeAllChildren();
            deadEnd6 = new scenes.DeadEnd6();
            currentScene = deadEnd6;
            console.log("Starting DEADEND6 Scene");
            break;
        case config.Scene.DEADEND7:
            // show the TUNNEL scene
            stage.removeAllChildren();
            deadEnd7 = new scenes.DeadEnd7();
            currentScene = deadEnd7;
            console.log("Starting DEADEND7 Scene");
            break;
        case config.Scene.LOSTCAVE:
            // show the TUNNEL scene
            stage.removeAllChildren();
            lostcave = new scenes.LostCave();
            currentScene = lostcave;
            console.log("Starting LOSTCAVE Scene");
            break;
        case config.Scene.CHURCHTUNNEL:
            // show the TUNNEL scene
            stage.removeAllChildren();
            churchtunnel = new scenes.ChurchTunnel();
            currentScene = churchtunnel;
            console.log("Starting CHURCHTUNNEL Scene");
            break;
        case config.Scene.CHURCH:
            // show the CHURCH scene
            stage.removeAllChildren();
            church = new scenes.Church();
            currentScene = church;
            console.log("Starting CHURCH Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
//# sourceMappingURL=game.js.map