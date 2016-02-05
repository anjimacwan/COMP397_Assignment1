var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// DEADEND 3 SCENE
var scenes;
(function (scenes) {
    var DeadEnd3 = (function (_super) {
        __extends(DeadEnd3, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function DeadEnd3() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        DeadEnd3.prototype.start = function () {
            // add the DeadEnd3 label to the scene
            this._overLabel = new createjs.Text("Arrrgghhh!!! You reached dead end 3 ! They caught you and \n\nkilled you \n\nGame Over!", "20px Consolas", "white");
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
        DeadEnd3.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        DeadEnd3.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.DESERT;
            changeScene();
        };
        return DeadEnd3;
    })(objects.Scene);
    scenes.DeadEnd3 = DeadEnd3;
})(scenes || (scenes = {}));
//# sourceMappingURL=deadend3.js.map