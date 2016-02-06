var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var LeftCave = (function (_super) {
        __extends(LeftCave, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function LeftCave() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        LeftCave.prototype.start = function () {
            this._image = new createjs.Bitmap("../../Assets/images/cave1.jpg");
            this.addChild(this._image);
            // add the PLAY label to the scene
            this._playLabel = new createjs.Text("Yo have entered LeftCave! \n\nMove forward and make clever choices!", "20px Consolas", "white");
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
        LeftCave.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        LeftCave.prototype._nextButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.DESERT;
            changeScene();
        };
        // BACK Button click event handler
        LeftCave.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.DARKFOREST;
            changeScene();
        };
        return LeftCave;
    })(objects.Scene);
    scenes.LeftCave = LeftCave;
})(scenes || (scenes = {}));
//# sourceMappingURL=leftcave.js.map