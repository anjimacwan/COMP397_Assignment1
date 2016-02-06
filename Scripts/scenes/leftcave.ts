// LEFTCAVE SCENE
module scenes {
    export class LeftCave extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: createjs.Text;
        private _nextButton: objects.Button;
        private _backButton: objects.Button;
        private _backButton2:objects.Button;
        private _image:createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            this._image = new createjs.Bitmap("../../Assets/images/cave1.jpg");
            this.addChild(this._image);
            // add the PLAY label to the scene
            this._playLabel = new createjs.Text("You have entered LeftCave! \n\nMove forward and make clever choices!", "20px Consolas", "white");
            this._playLabel.regX = 0;
            this._playLabel.regY = 0;
            this._playLabel.x = 0;
            this._playLabel.y = 0;
            this.addChild(this._playLabel);

            // add the NEXT button to the PLAY scene
            this._nextButton = new objects.Button(
                "RightCaveButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._nextButton);
           
            // NEXT Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);

            // add the BACK button to the PLAY scene
            this._backButton = new objects.Button(
                "LeftCaveButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
           
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            
            // add the BACK button to the PLAY scene
            this._backButton2 = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 120);
            this.addChild(this._backButton2);
           
            // BACK Button event listener
            this._backButton2.on("click", this._backButton2Click, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // NEXT Button click event handler
        private _nextButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.DESERT;
            changeScene();
        }
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.DARKFOREST;
            changeScene();
        }
        
        // BACK Button click event handler
        private _backButton2Click(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.PLAY;
            changeScene();
        }
    }
}