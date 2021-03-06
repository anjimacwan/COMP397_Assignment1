﻿module config {

    // Scene Constants
    export class Scene {
        public static MENU: number = 0;
        public static PLAY: number = 1;
        public static LEFTCAVE:number=2;
        //public static RIGHTCAVE:number=3;
        public static DARKFOREST:number = 4;
        public static DESERT:number = 5;
        public static DEADEND1:number=8;
        public static DEADEND2:number=9;
        public static DEADEND3:number=10;
        public static DEADEND4:number=11;
        public static DEADEND5:number=12;
        public static DEADEND6:number=13;
        public static DEADEND7:number=14;
        public static TUNNEL:number=3;
        public static LOSTCAVE:number=6;
        public static CHURCHTUNNEL:number=7;
        public static CHURCH:number=15;
        
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}