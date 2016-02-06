var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.PLAY = 1;
        Scene.DARKFOREST = 3;
        Scene.DESERT = 4;
        Scene.DEADEND1 = 7;
        Scene.DEADEND2 = 8;
        Scene.DEADEND3 = 9;
        Scene.DEADEND4 = 10;
        Scene.DEADEND5 = 11;
        Scene.DEADEND6 = 12;
        Scene.DEADEND7 = 13;
        Scene.TUNNEL = 2;
        Scene.LOSTCAVE = 5;
        Scene.CHURCHTUNNEL = 6;
        Scene.CHURCH = 14;
        Scene.LEFTCAVE = 15;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map