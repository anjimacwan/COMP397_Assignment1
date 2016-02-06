var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// CHURCH SCENE
var scenes;
(function (scenes) {
    var Church = (function (_super) {
        __extends(Church, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Church() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Church.prototype.start = function () {
            this._image = new createjs.Bitmap("../../Assets/images/church.jpg");
            this.addChild(this._image);
            // add the PLAY label to the scene
            this._overLabel = new createjs.Text("Bravo!!! You are awesome! \n\nYou defeated the blood-suckers!! \n\nCongrats!!!!! \n\nWanna play again?? Click the button below!", "20px Consolas", "white");
            this._overLabel.regX = 0;
            this._overLabel.regY = 0;
            this._overLabel.x = 0;
            this._overLabel.y = 0;
            this.addChild(this._overLabel);
            // add the START button to the DARKFOREST scene
            this._startButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 120);
            this.addChild(this._startButton);
            // NEXT Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Church.prototype.update = function () {
        };
        Church.prototype._startButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Church;
    })(objects.Scene);
    scenes.Church = Church;
})(scenes || (scenes = {}));
//# sourceMappingURL=church.js.map