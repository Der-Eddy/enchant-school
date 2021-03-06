enchant();

window.onload = function() {
    var game = new Game(320, 320);
    game.fps = 20;
    game.preload('chara1.png', 'map0.png');
    game.onload = function() {
        var map = new Map(16, 16);
        map.image = game.assets['map0.png'];
        map.loadData(
            [
                [4, 5, 4, 4, 4, 4, 4],
                [4, 5, 5, 5, 5, 5, 4],
                [4, 5, 1, 5, 1, 5, 4],
                [4, 5, 5, 5, 5, 5, 4],
                [4, 5, 1, 5, 1, 5, 4],
                [4, 5, 5, 5, 5, 5, 4],
                [4, 4, 4, 4, 4, 4, 4]
            ]
        );
        bear = new Sprite(32, 32);

        bear.image = game.assets["chara1.png"];

        bear.x = 1;
        bear.y = 1;
        bear.frame = 5;
        game.rootScene.addChild(map);
        game.rootScene.addChild(bear);
        bear.addEventListener("enterframe", function(){
        this.x += 1;
        this.frame = this.age % 2 + 6;
        });

    };
    game.start();
};
