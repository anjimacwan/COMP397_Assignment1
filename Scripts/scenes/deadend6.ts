// DEADEND 6 SCENE
module scenes {
    export class DeadEnd6 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _overLabel: createjs.Text;
        private _backButton: objects.Button;
        private _image:createjs.Bitmap;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            this._image=new createjs.Bitmap("../../Assets/images/deadend6.jpg");
            this.addChild(this._image);

            // add the DeadEnd6 label to the scene
            this._overLabel = new createjs.Text("Arrrgghhh!!! You reached dead end 6! They caught you and \n\nkilled you \n\nGame Over!", "20px Consolas", "white");
            this._overLabel.regX = 0;
            this._overLabel.regY = 0;
            this._overLabel.x = 0;
            this._overLabel.y = 0;
            this.addChild(this._overLabel);

            // add the BACK button to the OVER scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
           
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.LOSTCAVE;
            changeScene();
        }
    }
}