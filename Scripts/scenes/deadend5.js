var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// DEADEND 5 SCENE
var scenes;
(function (scenes) {
    var DeadEnd5 = (function (_super) {
        __extends(DeadEnd5, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function DeadEnd5() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        DeadEnd5.prototype.start = function () {
            this._image = new createjs.Bitmap("../../Assets/images/deadend5.jpg");
            this.addChild(this._image);
            // add the DeadEnd1 label to the scene
            this._overLabel = new createjs.Text("Arrrgghhh!!! You reached dead end 5! They caught you and \n\nkilled you \n\nGame Over!", "20px Consolas", "white");
            this._overLabel.regX = 0;
            this._overLabel.regY = 0;
            this._overLabel.x = 0;
            this._overLabel.y = 0;
            this.addChild(this._overLabel);
            // add the BACK button to the OVER scene
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        DeadEnd5.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        DeadEnd5.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.LOSTCAVE;
            changeScene();
        };
        return DeadEnd5;
    })(objects.Scene);
    scenes.DeadEnd5 = DeadEnd5;
})(scenes || (scenes = {}));
//# sourceMappingURL=deadend5.js.map