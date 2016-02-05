// DARKFOREST SCENE

module scenes {
    export class DarkForest extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _label:createjs.Text;
        private _startButton:objects.Button;
        private _nextButton:objects.Button;
        private _backButton:objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
       // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            // add the DARKFOREST label to the scene
            this._label = new createjs.Text("You have entered the DarkForest! \n\nVampires are looking for you! \n\nDon't let them find you!", "20px Consolas", "white");
            this._label.regX = 0;
            this._label.regY = 0;
            this._label.x = 0;
            this._label.y = 0;
            this.addChild(this._label);

            // add the NEXT button to the DARKFOREST scene
            this._nextButton = new objects.Button(
                "NextButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._nextButton);
           
            // NEXT Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);

            // add the BACK button to the DARKFOREST scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
           
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);

            // add the START button to the DARKFOREST scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X - 50,
                config.Screen.CENTER_Y + 100);
            this.addChild(this._startButton);
           
            // NEXT Button event listener
            this._startButton.on("click", this._startButtonClick, this);

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
            scene = config.Scene.OVER;
            changeScene();
        }
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();
        }
        // START Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.PLAY;
            changeScene();
        }
    }
}