var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TUNNEL SCENE
var scenes;
(function (scenes) {
    var Tunnel = (function (_super) {
        __extends(Tunnel, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Tunnel() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Tunnel.prototype.start = function () {
            // add the PLAY label to the scene
            this._playLabel = new createjs.Text("Great!!! \n\nYou have entered the tunnel that leads you to the church \n\nChoose your paths carefully ahead!", "20px Consolas", "white");
            this._playLabel.regX = 0;
            this._playLabel.regY = 0;
            this._playLabel.x = 0;
            this._playLabel.y = 0;
            this.addChild(this._playLabel);
            // add the NEXT button to the PLAY scene
            this._nextButton = new objects.Button("NextButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._nextButton);
            // NEXT Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            // add the BACK button to the PLAY scene
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Tunnel.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        Tunnel.prototype._nextButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.LOSTCAVE;
            changeScene();
        };
        // BACK Button click event handler
        Tunnel.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.CHURCHTUNNEL;
            changeScene();
        };
        return Tunnel;
    })(objects.Scene);
    scenes.Tunnel = Tunnel;
})(scenes || (scenes = {}));
//# sourceMappingURL=tunnel.js.map