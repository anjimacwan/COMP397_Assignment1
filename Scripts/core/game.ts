﻿/// <reference path = "_reference.ts" />

// global variables
var canvas:HTMLElement;
var stage:createjs.Stage;
var stats:Stats;

var currentScene:objects.Scene;
var scene:number;

// Game Scenes
var menu:scenes.Menu;
var play:scenes.Play;
var over:scenes.Over;
var forest:scenes.DarkForest;
var desert:scenes.Desert;

function init():void {
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
function gameLoop(event:createjs.Event):void {
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
function setupStats():void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
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
        case config.Scene.OVER:
            // show the game OVER scene
            stage.removeAllChildren();
            over = new scenes.Over();
            currentScene = over;
            console.log("Starting OVER Scene");
            break;
    }

    console.log(currentScene.numChildren);
}