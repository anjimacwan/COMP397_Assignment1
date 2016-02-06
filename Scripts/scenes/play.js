var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            this._image = new createjs.Bitmap("../../Assets/images/mainchoice.jpg");
            this.addChild(this._image);
            // add the PLAY label to the scene
            this._playLabel = new createjs.Text("You are being chased by vampires! \n\nYour goal for this game is to reach to church before they \n\ncatch you and kill you! \n\nChoose left or right side at this point!", "20px Consolas", "white");
            this._playLabel.regX = 0;
            this._playLabel.regY = 0;
            this._playLabel.x = 0;
            this._playLabel.y = 0;
            this.addChild(this._playLabel);
            // add the NEXT button to the PLAY scene
            this._nextButton = new objects.Button("RightCaveButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._nextButton);
            // NEXT Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            // add the BACK button to the PLAY scene
            this._backButton = new objects.Button("LeftCaveButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        Play.prototype._nextButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.TUNNEL;
            changeScene();
        };
        // BACK Button click event handler
        Play.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.LEFTCAVE;
            changeScene();
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map