var createMap = function() {
    var playerX, playerY;
    for (var y in map) {
        for(var x in map[y]) {
            var tile = map[y][x];
            switch(tile) {
                case 'P':
                    playerX = x;
                    playerY = y;
                    break;
                case 'W':
                    var sprite = game.add.sprite(x * TILE_SIZE + TILE_SIZE/2, y * TILE_SIZE + TILE_SIZE/2, 'nope');
                    sprite.meta = {type:'wall'};
                    break;

                default:
                    if(!isNaN(parseFloat(tile)) && isFinite(tile)) {
                        var sprite = game.physics.box2d.createCircle(x * TILE_SIZE + TILE_SIZE/2, y * TILE_SIZE + TILE_SIZE/2, tile * 3);
                        sprite.meta = {type:'ball', size:tile};
                    }
                    break;
            }
            sprites.push(sprite);
        }
    }
    game.physics.box2d.enable(sprites);

    sprites.forEach(function(s) {

        switch(s.meta.type) {
            case 'wall':
                s.body.static = true;
                break;
            case 'ball':
                s.m_restitution = 1;
                break;
            default:
                break;
        }
    });

    return {x:playerX,y:playerY};
};