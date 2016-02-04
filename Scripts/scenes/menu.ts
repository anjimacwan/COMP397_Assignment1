// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _gameLabel:createjs.Text;
        private _startButton:objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            // add the MENU label to the scene
            /*var bg=PIXI.Sprite.fromImage("../../Assets/images/VampireOutcast.jpg");
            bg.anchor.x=0;
            bg.anchor.y=0;
            bg.position.x=50;
            bg.position.y=50; */
            this._gameLabel = new createjs.Text("Welcome to Vampire Hunt !!", "20px Consolas", "#000000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = 120;
            this._gameLabel.x = config.Screen.CENTER_X;
            this._gameLabel.y = config.Screen.HEIGHT= 120;
            this.addChild(this._gameLabel);
            //this.addChild(bg);

            // add the START button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X, 
                config.Screen.CENTER_Y + 60);
            this.addChild(this._startButton);
            
            // START Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // MENU Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START Button click event handler
        private _startButtonClick(event:createjs.MouseEvent) {
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            changeScene();
        }
    }
}