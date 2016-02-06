var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.PLAY = 1;
        Scene.LEFTCAVE = 2;
        //public static RIGHTCAVE:number=3;
        Scene.DARKFOREST = 4;
        Scene.DESERT = 5;
        Scene.DEADEND1 = 8;
        Scene.DEADEND2 = 9;
        Scene.DEADEND3 = 10;
        Scene.DEADEND4 = 11;
        Scene.DEADEND5 = 12;
        Scene.DEADEND6 = 13;
        Scene.DEADEND7 = 14;
        Scene.TUNNEL = 3;
        Scene.LOSTCAVE = 6;
        Scene.CHURCHTUNNEL = 7;
        Scene.CHURCH = 15;
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