// LOSTCAVE SCENE
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var LostCave = (function (_super) {
        __extends(LostCave, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function LostCave() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        LostCave.prototype.start = function () {
            this._image = new createjs.Bitmap("../../Assets/images/lostcave.jpg");
            this.addChild(this._image);
            // add the DARKFOREST label to the scene
            this._label = new createjs.Text("You have reached next tunnel in the same path!! \n\nYou need to move ahead!!\n\nGo ahead and see what you get!!", "20px Consolas", "white");
            this._label.regX = 0;
            this._label.regY = 0;
            this._label.x = 0;
            this._label.y = 0;
            this.addChild(this._label);
            // add the NEXT button to the DARKFOREST scene
            this._nextButton = new objects.Button("RightCaveButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._nextButton);
            // NEXT Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            // add the BACK button to the DARKFOREST scene
            this._backButton = new objects.Button("LeftCaveButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add the START button to the DARKFOREST scene
            this._startButton = new objects.Button("BackButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 120);
            this.addChild(this._startButton);
            // NEXT Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        LostCave.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        LostCave.prototype._nextButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.DEADEND6;
            changeScene();
        };
        // BACK Button click event handler
        LostCave.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.DEADEND5;
            changeScene();
        };
        LostCave.prototype._startButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.TUNNEL;
            changeScene();
        };
        return LostCave;
    })(objects.Scene);
    scenes.LostCave = LostCave;
})(scenes || (scenes = {}));
//# sourceMappingURL=lostcave.js.map