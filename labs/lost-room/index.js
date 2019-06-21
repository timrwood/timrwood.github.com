(function () {
'use strict';

var Board$$1 = /** @class */ (function () {
    function Board$$1(tiles) {
        this.tiles = tiles.map(function (a) { return a.slice(); });
        this.height = tiles.length;
        this.width = tiles[0].length;
    }
    Board$$1.prototype.clone = function () {
        return new Board$$1(this.tiles);
    };
    Board$$1.prototype.getTile = function (point) {
        var row = this.tiles[point.y];
        return (row && row[point.x]) || new Tile(0 /* Void */, point);
    };
    Board$$1.prototype.setTile = function (point, rune) {
        this.tiles[point.y][point.x] = new Tile(rune, point);
    };
    Board$$1.prototype.replace = function (oldRune, newRune) {
        var _this = this;
        this.each(function (tile) { return tile.rune == oldRune && _this.setTile(tile.point, newRune); });
    };
    Board$$1.prototype.each = function (callback) {
        for (var _i = 0, _a = this.tiles; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, row_1 = row; _b < row_1.length; _b++) {
                var tile = row_1[_b];
                callback(tile);
            }
        }
    };
    Board$$1.prototype.find = function (rune, callback) {
        this.each(function (tile) { return tile.rune == rune && callback(tile); });
    };
    Board$$1.prototype.first = function (callback) {
        for (var _i = 0, _a = this.tiles; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, row_2 = row; _b < row_2.length; _b++) {
                var tile = row_2[_b];
                if (callback(tile))
                    return tile;
            }
        }
        return null;
    };
    Board$$1.prototype.firstWithRune = function (rune) {
        return this.first(function (tile) { return tile.rune === rune; });
    };
    Board$$1.prototype.neighbor = function (point, direction) {
        return this.getTile(pointInDirection(point, direction));
    };
    Board$$1.prototype.portalNeighbor = function (point, direction) {
        var nextTilePoint = this.neighbor(point, direction);
        var portalExitRune = oppositePortalRune(nextTilePoint.rune, direction);
        if (!portalExitRune)
            return nextTilePoint;
        var portalExitPoint = this.firstWithRune(portalExitRune);
        if (!portalExitPoint)
            return nextTilePoint;
        return this.getTile(pointInDirection(portalExitPoint.point, direction));
    };
    Board$$1.prototype.isWon = function () {
        return !this.firstWithRune(4 /* Goal */);
    };
    Board$$1.prototype.isLost = function () {
        return !this.firstWithRune(2 /* Hero */);
    };
    return Board$$1;
}());

var _a;
var oppositeDirection = (_a = {}, _a[3 /* South */] = 1, _a[1 /* North */] = 3, _a[4 /* West */] = 2, _a[2 /* East */] = 4, _a);
var directionForKeyCode = {
    38: 1 /* North */,
    87: 1 /* North */,
    75: 1 /* North */,
    40: 3 /* South */,
    83: 3 /* South */,
    74: 3 /* South */,
    39: 2 /* East */,
    68: 2 /* East */,
    76: 2 /* East */,
    37: 4 /* West */,
    65: 4 /* West */,
    72: 4 /* West */
};

function tileRow(line, y) {
    return line.split('').map(function (tileString, x) { return new Tile(runeFromChar(tileString), { x: x, y: y }); });
}
function boardFromData(levelData) {
    var lines = levelData.trim().split('\n');
    return new Board$$1(lines.map(tileRow));
}
var Level$$1 = /** @class */ (function () {
    function Level$$1(name, title, levelData) {
        this.name = name;
        this.title = title;
        this.startingBoard = boardFromData(levelData);
        this.reset();
    }
    Level$$1.prototype.reset = function () {
        this.moves = [];
        this.board = this.startingBoard;
    };
    Level$$1.prototype.move = function (direction) {
        var newMove = new Move$$1(this.board, direction);
        this.board = newMove.boardAfter;
        this.moves.push(newMove);
    };
    Level$$1.prototype.message = function () {
        if (this.isWon())
            return 'I made it.';
        if (this.isLost())
            return 'I died.';
        return this.title;
    };
    Level$$1.prototype.isWon = function () {
        return this.board.isWon();
    };
    Level$$1.prototype.isLost = function () {
        return this.board.isLost();
    };
    return Level$$1;
}());

function solve(move) {
    replace(move, 12 /* Counter3 */, 11 /* Counter2 */);
    replace(move, 11 /* Counter2 */, 10 /* Counter1 */);
    replace(move, 10 /* Counter1 */, 9 /* Counter0 */);
    replace(move, 9 /* Counter0 */, 12 /* Counter3 */);
}
// TODO: move to Move?
function replace(move, oldRune, newRune) {
    move.boardBefore.each(function (tile) {
        tile.rune == oldRune && move.boardAfter.setTile(tile.point, newRune);
    });
}

var SPREADABLE = [3 /* Floor */];
function solve$1(move) {
    spread(move, 1 /* North */);
    spread(move, 3 /* South */);
    spread(move, 2 /* East */);
    spread(move, 4 /* West */);
    age(move, 13 /* Disease1 */, 14 /* Disease2 */);
    age(move, 14 /* Disease2 */, 15 /* Disease3 */);
}
function spread(move, direction) {
    move.boardBefore.find(15 /* Disease3 */, function (tile) {
        var target = move.boardAfter.portalNeighbor(tile.point, direction);
        if (target.is(SPREADABLE))
            move.boardAfter.setTile(target.point, 13 /* Disease1 */);
    });
}
function age(move, oldTile, newTile) {
    move.boardBefore.each(function (tile) {
        tile.rune === oldTile && move.boardAfter.setTile(tile.point, newTile);
    });
}

function contains(haystack, needle) {
    for (var _i = 0, haystack_1 = haystack; _i < haystack_1.length; _i++) {
        var other = haystack_1[_i];
        if (other.point.x == needle.point.x && other.point.y == needle.point.y)
            return true;
    }
    return false;
}
function findTiles(visitable) {
    var visited = [];
    while (true) {
        var nextTile = visitable.board.first(function (tile) { return !contains(visited, tile) && visitable.find(tile); });
        if (!nextTile)
            return;
        visited.push(nextTile);
        visitable.perform(nextTile);
    }
}

function solve$2(move) {
    var boardAfter = move.boardAfter, boardBefore = move.boardBefore;
    findTiles({
        board: boardBefore,
        find: function (tile) {
            var direction = enemyDirection[tile.rune];
            if (!direction)
                return false;
            return boardAfter.portalNeighbor(tile.point, direction).rune === 3 /* Floor */;
        },
        perform: function (tile) {
            var rune = tile.rune, point = tile.point;
            var direction = enemyDirection[rune];
            boardAfter.setTile(point, 3 /* Floor */);
            boardAfter.setTile(boardAfter.portalNeighbor(point, direction).point, rune);
        }
    });
}

function solve$3(move) {
    var boardAfter = move.boardAfter;
    findTiles({
        board: boardAfter,
        find: function (tile) {
            var direction = enemyDirection[tile.rune];
            if (!direction)
                return false;
            var facing = boardAfter.portalNeighbor(tile.point, direction);
            return facing.isBlockingEnemy();
        },
        perform: function (tile) {
            // TODO: Fix following
            var opposite = oppositeEnemyRune[tile.rune];
            if (opposite)
                boardAfter.setTile(tile.point, opposite);
        }
    });
}

var LIVEABLE_TILES = [3 /* Floor */, 4 /* Goal */];
function solveHeroAfter(move) {
    var heroAfter = move.heroAfter, boardAfter = move.boardAfter, direction = move.direction;
    var landedOnLiveable = boardAfter.getTile(heroAfter.point).is(LIVEABLE_TILES);
    var walkedThroughEnemy = enemyDirection[heroAfter.rune] === oppositeDirection[direction];
    if (landedOnLiveable && !walkedThroughEnemy)
        boardAfter.setTile(heroAfter.point, 2 /* Hero */);
}
function solveHeroBefore(move) {
    if (!move.heroBefore)
        return;
    var heroAfter = move.boardBefore.portalNeighbor(move.heroBefore.point, move.direction);
    if (!heroAfter.isWalkable())
        return;
    move.boardAfter.setTile(move.heroBefore.point, 3 /* Floor */);
    move.heroAfter = heroAfter;
    move.validMove = true;
}

function solve$4(move) {
    solveOpenDoors(move, 20 /* KeyA */, 29 /* DoorA */);
    solveOpenDoors(move, 21 /* KeyB */, 30 /* DoorB */);
    solveOpenDoors(move, 22 /* KeyC */, 31 /* DoorC */);
    solveOpenDoors(move, 23 /* KeyD */, 32 /* DoorD */);
    solveOpenDoors(move, 24 /* KeyE */, 33 /* DoorE */);
    solveCloseDoors(move, 25 /* KeyW */, 34 /* DoorW */);
    solveCloseDoors(move, 26 /* KeyX */, 35 /* DoorX */);
    solveCloseDoors(move, 27 /* KeyY */, 36 /* DoorY */);
    solveCloseDoors(move, 28 /* KeyZ */, 37 /* DoorZ */);
}
function solveOpenDoors(move, keyRune, doorRune) {
    var board = move.boardAfter;
    var _a = move.heroAfter, tile = _a.rune, point = _a.point;
    if (tile === keyRune)
        board.setTile(point, 3 /* Floor */);
    if (!board.firstWithRune(keyRune))
        board.replace(doorRune, 3 /* Floor */);
}
function solveCloseDoors(move, keyRune, doorRune) {
    var board = move.boardAfter;
    var _a = move.heroAfter, rune = _a.rune, point = _a.point;
    if (rune === keyRune)
        board.setTile(point, 3 /* Floor */);
    if (!board.firstWithRune(keyRune)) {
        board.find(doorRune, function (tile) {
            closeDoor(board, tile, 4 /* West */);
            closeDoor(board, tile, 3 /* South */);
        });
    }
}
var CRUSHED_BY_DOORS = [
    3 /* Floor */,
    7 /* EnemyEast */,
    5 /* EnemyNorth */,
    6 /* EnemySouth */,
    8 /* EnemyWest */,
    13 /* Disease1 */,
    14 /* Disease2 */,
    15 /* Disease3 */,
    19 /* LaserEW */,
    18 /* LaserNS */,
    2 /* Hero */,
];
function closeDoor(board, startTile, direction) {
    var tiles = [startTile];
    do {
        tiles.unshift(board.neighbor(tiles[0].point, direction));
    } while (tiles[0].is(CRUSHED_BY_DOORS));
    if (tiles.length < 3 || tiles[0].rune !== startTile.rune)
        return;
    tiles.forEach(function (tile) { return board.setTile(tile.point, startTile.rune); });
}

var _a$1;
var KILLED_BY_LASERS = [
    3 /* Floor */,
    7 /* EnemyEast */,
    5 /* EnemyNorth */,
    6 /* EnemySouth */,
    8 /* EnemyWest */,
    13 /* Disease1 */,
    14 /* Disease2 */,
    15 /* Disease3 */,
    2 /* Hero */,
];
var LASER_FOR_DIRECTION = (_a$1 = {}, _a$1[1 /* North */] = 18, _a$1[3 /* South */] = 18, _a$1[2 /* East */] = 19, _a$1[4 /* West */] = 19, _a$1);
function solve$5(move) {
    var board = move.boardAfter;
    board.replace(19 /* LaserEW */, 3 /* Floor */);
    board.replace(18 /* LaserNS */, 3 /* Floor */);
    board.replace(17 /* LaserOn */, 16 /* LaserOff */);
    board.find(16 /* LaserOff */, function (tile) { return checkLaser(board, tile); });
}
function checkLaser(board, tile) {
    var point = tile.point;
    if (board.neighbor(point, 1 /* North */).rune === 9 /* Counter0 */ ||
        board.neighbor(point, 3 /* South */).rune === 9 /* Counter0 */ ||
        board.neighbor(point, 2 /* East */).rune === 9 /* Counter0 */ ||
        board.neighbor(point, 4 /* West */).rune === 9 /* Counter0 */) {
        fireLaser(board, tile);
    }
}
function fireLaser(board, tile) {
    board.setTile(tile.point, 17 /* LaserOn */);
    fireLaserInDirection(board, tile, 1 /* North */);
    fireLaserInDirection(board, tile, 3 /* South */);
    fireLaserInDirection(board, tile, 2 /* East */);
    fireLaserInDirection(board, tile, 4 /* West */);
}
function fireLaserInDirection(board, tile, direction) {
    var next = board.portalNeighbor(tile.point, direction);
    if (next.rune === 16 /* LaserOff */)
        fireLaser(board, next);
    if (next.is(KILLED_BY_LASERS)) {
        board.setTile(next.point, LASER_FOR_DIRECTION[direction]);
        fireLaserInDirection(board, next, direction);
    }
}

function solve$6(move) {
    solveHeroBefore(move);
    if (!move.validMove)
        return;
    solve$4(move);
    solve$2(move);
    solve$3(move);
    solve$1(move);
    solve(move);
    solve$5(move);
    solveHeroAfter(move);
}

var Move$$1 = /** @class */ (function () {
    function Move$$1(board, direction) {
        this.validMove = false;
        this.direction = direction;
        this.boardBefore = board;
        this.boardAfter = board.clone();
        this.heroBefore = board.firstWithRune(2 /* Hero */);
        this.heroAfter = new Tile(0 /* Void */, { x: 0, y: 0 });
        solve$6(this);
    }
    return Move$$1;
}());

var _a$2;
var charToRune = {};
function pair(char, rune) {
    charToRune[char] = rune;
}
pair('#', 1 /* Wall */);
pair('_', 0 /* Void */);
pair('@', 2 /* Hero */);
pair(' ', 3 /* Floor */);
pair('=', 4 /* Goal */);
pair('^', 5 /* EnemyNorth */);
pair('v', 6 /* EnemySouth */);
pair('>', 7 /* EnemyEast */);
pair('<', 8 /* EnemyWest */);
pair('0', 9 /* Counter0 */);
pair('1', 10 /* Counter1 */);
pair('2', 11 /* Counter2 */);
pair('3', 12 /* Counter3 */);
pair('.', 13 /* Disease1 */);
pair('o', 14 /* Disease2 */);
pair('O', 15 /* Disease3 */);
pair('*', 16 /* LaserOff */);
pair('+', 17 /* LaserOn */);
pair('|', 18 /* LaserNS */);
pair('-', 19 /* LaserEW */);
pair('a', 20 /* KeyA */);
pair('b', 21 /* KeyB */);
pair('c', 22 /* KeyC */);
pair('d', 23 /* KeyD */);
pair('e', 24 /* KeyE */);
pair('w', 25 /* KeyW */);
pair('x', 26 /* KeyX */);
pair('y', 27 /* KeyY */);
pair('z', 28 /* KeyZ */);
pair('A', 29 /* DoorA */);
pair('B', 30 /* DoorB */);
pair('C', 31 /* DoorC */);
pair('D', 32 /* DoorD */);
pair('E', 33 /* DoorE */);
pair('W', 34 /* DoorW */);
pair('X', 35 /* DoorX */);
pair('Y', 36 /* DoorY */);
pair('Z', 37 /* DoorZ */);
pair(']', 38 /* PortalOpenWest1 */);
pair('}', 39 /* PortalOpenWest2 */);
pair(')', 40 /* PortalOpenWest3 */);
pair('[', 41 /* PortalOpenEast1 */);
pair('{', 42 /* PortalOpenEast2 */);
pair('(', 43 /* PortalOpenEast3 */);
function runeFromChar(string) {
    return charToRune[string] || 0 /* Void */;
}

var oppositeEnemyRune = (_a$2 = {}, _a$2[5 /* EnemyNorth */] = 6, _a$2[6 /* EnemySouth */] = 5, _a$2[7 /* EnemyEast */] = 8, _a$2[8 /* EnemyWest */] = 7, _a$2);

var PORTALS = [
    41 /* PortalOpenEast1 */,
    42 /* PortalOpenEast2 */,
    43 /* PortalOpenEast3 */,
    38 /* PortalOpenWest1 */,
    39 /* PortalOpenWest2 */,
    40 /* PortalOpenWest3 */,
];
var DOORS = [
    29 /* DoorA */,
    30 /* DoorB */,
    31 /* DoorC */,
    32 /* DoorD */,
    33 /* DoorE */,
    34 /* DoorW */,
    35 /* DoorX */,
    36 /* DoorY */,
    37 /* DoorZ */,
];
var ENEMY_UNBLOCKABLE = [3 /* Floor */, 2 /* Hero */].concat(PORTALS);
var UNWALKABLE = [0 /* Void */, 1 /* Wall */].concat(DOORS).concat(PORTALS);
var Tile = /** @class */ (function () {
    function Tile(rune, point) {
        this.rune = rune;
        this.point = point;
    }
    Tile.prototype.is = function (runes) {
        for (var _i = 0, runes_1 = runes; _i < runes_1.length; _i++) {
            var rune = runes_1[_i];
            if (this.rune === rune)
                return true;
        }
        return false;
    };
    Tile.prototype.isNot = function (runes) {
        return !this.is(runes);
    };
    Tile.prototype.isWalkable = function () {
        return this.isNot(UNWALKABLE);
    };
    Tile.prototype.isBlockingEnemy = function () {
        return this.isNot(ENEMY_UNBLOCKABLE);
    };
    return Tile;
}());

var _a$3;
function pointInDirection(point, direction) {
    if (direction == 1 /* North */)
        return { x: point.x, y: point.y - 1 };
    if (direction == 3 /* South */)
        return { x: point.x, y: point.y + 1 };
    if (direction == 2 /* East */)
        return { x: point.x + 1, y: point.y };
    return { x: point.x - 1, y: point.y };
}
var enemyDirection = (_a$3 = {}, _a$3[5 /* EnemyNorth */] = 1, _a$3[6 /* EnemySouth */] = 3, _a$3[7 /* EnemyEast */] = 2, _a$3[8 /* EnemyWest */] = 4, _a$3);
function oppositePortalRune(rune, direction) {
    if (direction == 4 /* West */ && rune == 41 /* PortalOpenEast1 */)
        return 38 /* PortalOpenWest1 */;
    if (direction == 4 /* West */ && rune == 42 /* PortalOpenEast2 */)
        return 39 /* PortalOpenWest2 */;
    if (direction == 4 /* West */ && rune == 43 /* PortalOpenEast3 */)
        return 40 /* PortalOpenWest3 */;
    if (direction == 2 /* East */ && rune == 38 /* PortalOpenWest1 */)
        return 41 /* PortalOpenEast1 */;
    if (direction == 2 /* East */ && rune == 39 /* PortalOpenWest2 */)
        return 42 /* PortalOpenEast2 */;
    if (direction == 2 /* East */ && rune == 40 /* PortalOpenWest3 */)
        return 43 /* PortalOpenEast3 */;
    return null;
}

var Stamp = /** @class */ (function () {
    function Stamp(canvas, sprite) {
        this.sprite = sprite;
        this.ctx = canvas.getContext('2d');
    }
    Stamp.prototype.draw = function (x, y, index) {
        var sx = index % 16;
        var sy = ~~(index / 16);
        this.ctx.drawImage(this.sprite, sx * 16, sy * 16, 16, 16, 8 + x * 16, 5 + y * 16, 16, 16);
    };
    return Stamp;
}());

var string = "1138033b2139053a046812480a2245515365235813426247295a676b09521020504b4666010232001730313327695557406018491a2825412a5b61591544646a434a566319541626243537360708340614";
var data = string.match(/../g) || [];
var tiles = data.map(function (_) { return parseInt(_, 16); });

var lcms = [];
var mashs = [];
function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}
function lcm(length) {
    var out = length;
    while (--length)
        out = (out * length) / gcd(out, length);
    return out;
}
function lcmCached(length) {
    return lcms[length] || (lcms[length] = lcm(length));
}
function rand(length, seed) {
    mashs[length] || (mashs[length] = []);
    seed = seed % lcmCached(length);
    return mashs[length][seed] || (mashs[length][seed] = mash(length, seed));
}
function randXY(length, x, y) {
    return rand(length, x)[y % length];
}
function mash(length, seed) {
    var src = [];
    var dest = [];
    for (var i = 0; i < length; i++) {
        src[i] = i;
    }
    var lastI = 0;
    for (var i = 0; i < length; i++) {
        lastI = (lastI + seed) % src.length;
        dest[i] = src[lastI];
        src.splice(lastI, 1);
    }
    return dest;
}

var variations = {
    20: [20, 11, 27, 11, 27, 20],
    7: [7, 12, 12, 7, 7, 12],
    22: [22, 13, 13, 22, 22, 13],
    24: [24, 29, 29, 24, 29],
    39: [39, 28, 28, 39, 39]
};
var WALLS = [
    1 /* Wall */,
    9 /* Counter0 */,
    10 /* Counter1 */,
    11 /* Counter2 */,
    12 /* Counter3 */,
    16 /* LaserOff */,
    17 /* LaserOn */,
];
var VOIDS = [0 /* Void */];
function groundType(board, x, y) {
    var tile = board.getTile({ x: x, y: y });
    return tile.is(VOIDS) ? 0 : tile.is(WALLS) ? 1 : 2;
}
function spriteIndex(board, x, y) {
    var index = 0;
    index += groundType(board, x + 0, y + 0) * 27;
    index += groundType(board, x + 1, y + 0) * 9;
    index += groundType(board, x + 0, y + 1) * 3;
    index += groundType(board, x + 1, y + 1) * 1;
    return tiles[index];
}
function variedSpriteIndex(board, x, y) {
    var index = spriteIndex(board, x, y);
    var variants = variations[index];
    return variants ? variants[randXY(variants.length, x, y + 3) % variants.length] : index;
}
function render(board, stamp) {
    for (var x = -1; x < board.width; x++) {
        for (var y = -1; y < board.height; y++) {
            stamp.draw(x + 0.5, y + 0.5, variedSpriteIndex(board, x, y));
        }
    }
}

var animations = {};
var offsets = {};
function animate(rune, spriteIndices, offset) {
    if (offset === void 0) { offset = 0; }
    animations[rune] = spriteIndices;
    offsets[rune] = offset;
}
function sprite(rune, spriteIndex, offset) {
    if (offset === void 0) { offset = 0; }
    animate(rune, [spriteIndex], offset);
}
function animateKey(rune, s) {
    var s1 = s + 1;
    var s2 = s + 2;
    animate(rune, [s, s1, s1, s2, s2, s2, s1, s1], 5);
}
function animateDisease(rune, s) {
    animate(rune, [s, s + 1, s + 2, s + 3, s + 3, s + 2, s + 1, s]);
}
function animateCounter(rune, a) {
    var b = a + 16;
    var c = a + 32;
    var d = a + 48;
    animate(rune, [a, a, b, b, c, c, d, d], 2);
}
animate(5 /* EnemyNorth */, [112, 113, 114, 115, 116, 117, 118, 112]);
animate(6 /* EnemySouth */, [128, 129, 130, 131, 132, 133, 134, 128]);
animate(8 /* EnemyWest */, [79, 144, 145, 146, 147, 148, 149, 150], 3);
animate(2 /* Hero */, [44, 45, 46, 47, 60, 61, 62, 63], 4);
animateCounter(9 /* Counter0 */, 124);
animateCounter(10 /* Counter1 */, 125);
animateCounter(11 /* Counter2 */, 126);
animateCounter(12 /* Counter3 */, 127);
animateDisease(13 /* Disease1 */, 200);
animateDisease(14 /* Disease2 */, 216);
animateDisease(15 /* Disease3 */, 232);
animateKey(20 /* KeyA */, 176);
animateKey(21 /* KeyB */, 192);
animateKey(22 /* KeyC */, 208);
animateKey(23 /* KeyD */, 224);
animateKey(24 /* KeyE */, 240);
animateKey(25 /* KeyW */, 196);
animateKey(26 /* KeyX */, 212);
animateKey(27 /* KeyY */, 228);
animateKey(28 /* KeyZ */, 244);
sprite(29 /* DoorA */, 179, 1);
sprite(30 /* DoorB */, 195, 1);
sprite(31 /* DoorC */, 211, 1);
sprite(32 /* DoorD */, 227, 1);
sprite(33 /* DoorE */, 243, 1);
sprite(34 /* DoorW */, 199, 1);
sprite(35 /* DoorX */, 215, 1);
sprite(36 /* DoorY */, 231, 1);
sprite(37 /* DoorZ */, 247, 1);
sprite(7 /* EnemyEast */, 77);
sprite(4 /* Goal */, 43, 4);
sprite(19 /* LaserEW */, 152, 2);
sprite(18 /* LaserNS */, 153, 2);
sprite(16 /* LaserOff */, 155, 2);
sprite(17 /* LaserOn */, 154, 2);
sprite(41 /* PortalOpenEast1 */, 220);
sprite(42 /* PortalOpenEast2 */, 188);
sprite(43 /* PortalOpenEast3 */, 204);
sprite(38 /* PortalOpenWest1 */, 221);
sprite(39 /* PortalOpenWest2 */, 189);
sprite(40 /* PortalOpenWest3 */, 205);

function getFrame() {
    return Math.floor((new Date().getMilliseconds() * 24) / 1000);
}
function render$1(board, stamp) {
    var frame = getFrame();
    board.each(function (tile) {
        var animation = animations[tile.rune];
        if (!animation)
            return;
        var _a = tile.point, x = _a.x, y = _a.y;
        var length = animation.length;
        var randIndex = randXY(length, x, y);
        var offset = (offsets[tile.rune] || 0) / 16;
        stamp.draw(x, y - offset, animation[(frame + randIndex) % length]);
    });
}

var canvas = document.getElementById('canvas');
var sprite$1 = document.getElementById('sprite');
var stamp = new Stamp(canvas, sprite$1);
var words = document.getElementById('words');
function scaleBoard(board) {
    canvas.width = (board.width + 1) * 16;
    canvas.height = (board.height + 1) * 16;
    var ratio = ~~Math.min(window.innerHeight / canvas.height, window.innerWidth / canvas.width);
    canvas.style.height = canvas.height * ratio + "px";
    words.style.marginTop = (board.height + 1) * 8 * ratio + "px";
}
function renderAfterMove(level) {
    words.innerHTML = level.name;
}
function renderEachTick(board) {
    scaleBoard(board);
    render(board, stamp);
    render$1(board, stamp);
}

var Game = /** @class */ (function () {
    function Game(levels) {
        this.index = 1;
        this.levels = levels;
        this.changeLevelTo(parseInt(localStorage.getItem('level') || '0', 10));
    }
    Game.prototype.start = function () {
        this.resetLevel();
        this.captureInput();
        this.render();
    };
    Game.prototype.captureInput = function () {
        var _this = this;
        document.addEventListener('keydown', function (e) {
            if (directionForKeyCode[e.keyCode])
                _this.move(directionForKeyCode[e.keyCode]);
            if (e.keyCode == 82)
                _this.resetLevel();
            // Debugging levels
            if (e.keyCode == 69)
                _this.changeLevel(+1);
            if (e.keyCode == 81)
                _this.changeLevel(-1);
        });
    };
    Game.prototype.resetLevel = function () {
        this.level = this.levels[this.index]; // TODO: copy
        this.level.reset();
        renderAfterMove(this.level);
    };
    Game.prototype.changeLevelTo = function (index) {
        this.index = Math.min(this.levels.length - 1, Math.max(0, index));
        localStorage.setItem('level', this.index.toString());
        this.resetLevel();
    };
    Game.prototype.changeLevel = function (count) {
        this.changeLevelTo(this.index + count);
    };
    Game.prototype.move = function (direction) {
        if (this.level.isWon()) {
            this.changeLevel(1);
        }
        else if (this.level.isLost()) {
            this.resetLevel();
        }
        else {
            this.level.move(direction);
        }
        renderAfterMove(this.level);
    };
    Game.prototype.render = function () {
        renderEachTick(this.level.board);
        setTimeout(this.render.bind(this), 20);
    };
    return Game;
}());

var levels = [];
function addLevel(name, title, levelData) {
    levels.push(new Level$$1(name, title, levelData));
}
addLevel('01', "I awoke and ran to the door.", "\n_###_____###_\n#   #___#   #\n# @       = #\n#   #___#   #\n_###_____###_\n");
addLevel('02', "I'm in a hallway.", "\n____#####__\n#####   #__\n#   # # ###\n#@# # # #=#\n### # #   #\n__#   #####\n__#####____\n");
addLevel('03', "TODO: Story 1", "\n#####################\n#   #   ## ##   #   #\n# @     #       # = #\n#   #   ## ##   #   #\n## ####### ### ### ##\n#   #_ _#   ## ##   #\n#   _       #   #   #\n#   __ _#   ## ##   #\n## ___ __# ### ### ##\n#   _   ## ##   #   #\n#       #           #\n#   #   ## ##   #   #\n#####################\n");
addLevel('04', "Ugh, patrol guards.", "\n#############\n#     >     #\n# @       = #\n#     <     #\n#############\n");
addLevel('05', "Gotta get past them.", "\n___#######___\n__##v    ##__\n__#   v   #__\n_@      v  =_\n__#       #__\n__##     ##__\n___#######___\n");
addLevel('06', "I'll sneak behind.", "\n__# v@  #__\n_##   ^ #__\n_## ### ##_\n_   v=    _\n_ ^   ^ ^ _\n_ ####### _\n_   v v # _\n_ #^   ^  _\n_#########_\n");
addLevel('07', "Oh, they have buddies now.", "\n###########\n# # # # # #\n#       #=#\n# # ^ ^ # #\n# #   v # #\n# #       #\n# # v # # #\n# #   #   #\n#@# # # # #\n###########\n");
addLevel('08', "TODO: Story 2 (Movement * guards)", "\n#####################\n#   ## ###v## > # < #\n# @ #        ^ v v ^#\n#   # < ## ## < # > #\n## ### ########### ##\n#   #   #v  ## ##   #\n# < # =             #\n#   #   #   ## ##   #\n## ### ####### ### ##\n## ##>  ##v##   ## ##\n#                   #\n## ##   ## ##   ## ##\n#####################\n");
addLevel('09', "Hmm...", "\n#############\n#a  #   A   #\n#   #  @# = #\n#       #   #\n#############\n");
addLevel('10', "TODO:", "\n##########\n#bA ##vC=#\n### ## ###\n#>     @ #\n### ## ###\n### ## ###\n#       <#\n### ## ###\n#a ^## Bc#\n##########\n");
addLevel('11', "TODO:", "\n###############\n#   @  # > #  #\n# ### ### #####\n##### ####### #\n#   a  A   <  #\n#B### ### ### #\n# ####### #####\n#  # > #  b#  #\n# ### ### #####\n#B### ####### #\n#   c  C < #  #\n######### #####\n# ### ### ### #\n#    = D  d < #\n###############\n");
addLevel('12', "TODO:", "\n###################\n#v@      <       <#\n# ############### #\n# #v           <# #\n# # ######## ## # #\n# # #v       <# # #\n# # # ## #### # # #\n# # # #v   <#   # #\n# # # # ### # # # #\n#v# # #  =# # # #^#\n# # # # ### # # # #\n#   # #>   ^# # # #\n# # # ####### # # #\n# # #>       ^# # #\n# # ######## ## # #\n# #>           ^# #\n# ## ############ #\n#>       >       ^#\n###################\n");
addLevel('13', "TODO: Story 3 (Movement, guards, doors)", "\n#####################\n## ##   #>  #   #>  #\n# b E v B d D   C   #\n## ##   #   #>  # < #\n## #######D###B###C##\n## ##   #   #v  #   #\n#     @ B e E = Av ^#\n## ##   #   #   #   #\n######A###D###D######\n#   #   #   #  <## ##\n# cvB   # a A     v #\n#   #   #   #   ## ##\n#####################\n");
addLevel('14', "Ooh, some of these.", "\n#############\n####  #  ####\n##    #    ##\n##    #    ##\n# @ ] # [ { #\n#    ###    #\n###### ######\n#    ###    #\n# )   #     #\n##    # ( =##\n##  } #    ##\n####  #  ####\n#############\n");
addLevel('15', "Am I a frog?", "\n#################\n#{ > >         )#\n### ########## ##\n#(       > >}# =#\n########### #####\n#[        <<<  ]#\n###### ##########\n#          @    #\n#################\n");
addLevel('16', "Butler. Library. Candlestick.", "\n#################\n#   # #   # A   #\n#( =# #c{ # # b #\n# ^ # #   # #   #\n##### ##### #####\n#@   v     ^   ]#\n##### ##### #####\n#   # #   # #   #\n#a[ # # } # # ) #\n#   # B   # C   #\n#################\n");
addLevel('17', "HARD, MOVE LATER?: To add difficulty, move a down 1.", "\n#############\n## #v# #v# ##\n#   v   v   #\n# ##v# #v## #\n# # v# #v # #\n#B##A###C##A#\n# #[ c#  )# #\n# #(  #a }# #\n# #{^@# ^]# #\n#A##A###B##C#\n# #  bB< =B #\n#############\n");
addLevel('18', "REDO: Hmm, tight quarters.", "\n#############\n#{         ]#\n#{    @    ]#\n#############\n#[ ###=### }#\n##^bA# #Bav##\n## #BA BA# ##\n#############\n");
addLevel('19', "TODO: Story 4 (Movement, guards, doors, portals)", "\n#####################\n#   ## ### ##   #   #\n# { # (bC<<<# = C   #\n#   ## ### ##   #   #\n## ###B### ###C###B##\n#   #   ## ##   #   #\n# @   [ B>>>Ba} #   #\n#   #   ## ##   #   #\n## #######A### ###A##\n#   ##^###v### ##   #\n# ) # ^   v #>>>A ]c#\n#   ##^###v### ##   #\n#####################\n");
addLevel('20', "A plague broke out here.", "\n#################\n#o     o        #\n#O   .          #\n#OO@         =  #\n#o              #\n#     o .    ..O#\n#################\n");
addLevel('21', "These bio-labs creep me out.", "\n#############\n#@          #\n########### #\n#         # #\n#[ .     }# #\n#         # #\n########### #\n#         # #\n#{       ]# #\n#         # #\n########### #\n#=          #\n#############\n");
addLevel('22', "TODO:", "\n##########################\n# v  v  v  v            O#\n# v  v  v  v             #\n# v     v                #\n# v  ^  v  ^#         o  #\n# v  ^  v  ^# ############\n#.v  ^  v  ^#           =#\n# v  ^  v  ^# ############\n#    ^  v  ^#          o #\n# ^  ^  v  ^#            #\n# ^  ^     ^#            #\n#@^  ^  ^  ^#     O     .#\n##########################\n");
addLevel('23', "Two sides to every story.", "\n#####################\n###############.oOo.#\n#                @  #\n# ################# #\n# #C C# D #   # B## #\n# # ###C# #DAD#C#D# #\n# # AD# #C#BAD# #B# #\n# #C#D# # #DAD# #D# #\n# # C #DCB#   #C ## #\n# ################# #\n#         bdBD AAaa #\n##############c######\n##############=######\n#####################\n");
addLevel('24', "Avoid to survive.", "\n######\n#a@A=#\n## ###\n#a A<#\n## ###\n#a A<#\n## ###\n#a A<#\n######\n");
addLevel('25', "TODO:", "\n#####################\n#.@ Ba#bCc# #      =#\n### # A # D ### #####\n#a# Cb#cCc# #     < #\n# # # C # C ##### ###\n# # Aa#cAd# # >     #\n# # # C # A ### #####\n#   Ba#cCc# #     < #\n# # # D # B ##### ###\n#b#  b#dBb# ABCD    #\n#####################\n");
addLevel('26', "TODO: Story 5 (Movement, guards, doors, portals, plague)", "\n#####################\n#   #   ## ##   #   #\n# @     #       # = #\n#   #   ## ##   #   #\n## ####### ### ### ##\n#   ## ##   ## ##   #\n#   #       #   #   #\n#   ## ##   ## ##   #\n## ### ### ### ### ##\n#   #   ## ##   #   #\n#       #           #\n#   #   ## ##   #   #\n#####################\n");
addLevel('27', "TODO:", "\n#####3#####\n#    *    #\n#       < #\n#      @<=#\n#       < #\n###########\n");
addLevel('28', "TODO:", "\n###############\n## *       * ##\n##   #####   ##\n#1   #   #   3#\n#* * * * * * *#\n#= #   #   #  #\n#  #   #   #@ #\n#    *   *   *#\n###############\n");
addLevel('29', "The enemy of my enemy.", "\n##1######################\n# * O*. *O * .*  *  *  *#\n2*   o    O   o     .   #\n#  @ o o.               #\n# o   O  o  O o     o   #\n#*   .         .  ..O   #\n# .  o           .O.O . #\n#          .      .     #\n#*   O       . .      o #\n#  O    .O   .o  o      #\n#  o..   o   o         O#\n#* .        . O.  OOO   #\n#o .    .  o  ..   Oo   #\n#          . .   o  o  o#\n#*. o   o    .      .   #\n#o  oO      o.o  o  .  .#\n#  O   .    o o  .      #\n#*         .Ooo     .   #\n#o      .   O     O    .#\n# .  o  .        .o.    #\n#*            O  .o    .#\n#O    oO         . oo   #\n# o    .  o o      .   .#\n#*   o  o        o  .   #\n#          o  o    o    #\n# o  o        .   .    .#\n#*   .  o     o  .  .  =#\n#########################\n");
addLevel('30', "These lasers never quit.", "\n#################\n#######=#########\n# *          *#@#\n#          ## # #\n#1*        *# # #\n#        ##   # #\n#2*      *#   # #\n#      ##     # #\n#3*    *#     # #\n#             # #\n#   ##        # #\n# * *#        # #\n#               #\n#################\n");
addLevel('31', "They go through portals too?", "\n##########\n# *  *   #\n#=    * }#\n#   *   ]#\n# *  *  )#\n####### ##\n#(  *3   #\n###### # #\n#[  *2 # #\n###### # #\n#{  *1 @ #\n##########\n");
addLevel('32', "TODO:", "\n#################\n# 1 #   #   #   #\n# * A  @#=  E * #\n#   #   #   #   #\n##A### #######D##\n#   #   #   #   #\n#   #   #   C * #\n#b  #   #   #   #\n##B### ### ###E##\n#   #   #   #c  #\n# * C       B * #\n#   #   #   #   #\n##C####### ###D##\n#  d#   #   #e  #\n# * D   E   D * #\n#   #   #  a#   #\n#################\n");
addLevel('33', "TODO: Story 6 (Movement, guards, doors, portals, plague, lasers)", "\n#####################\n#   #   ## ##   #   #\n# @     #       # = #\n#   #   ## ##   #   #\n## ####### ### ### ##\n#   ## ##   ## ##   #\n#   #       #   #   #\n#   ## ##   ## ##   #\n## ### ### ### ### ##\n#   #   ## ##   #   #\n#       #           #\n#   #   ## ##   #   #\n#####################\n");
addLevel('34', "New keys?", "\n###############\n# #bAzB A # C #\n#@# Z B Z # c #\n# # # B By# C #\n# # # Y B Y #=#\n# # # # B # X #\n# # # # # # x #\n#aA # A # A X #\n###############\n");
addLevel('35', "TODO:", "\n##########\n#       =#\n###Z X#Y##\n# > > > <#\n###Z X#Y##\n#@       #\n#  z x y #\n##########\n");
addLevel('36', "TODO:", "\n#########\n#@      #\n###X ####\n#       #\n#x#A#B###\n#       #\n##aXw#z##\n#       #\n# #y# Z #\n#       #\n##y#B#yY#\n#b  =   #\n#########\n");
addLevel('37', "TODO:", "\n_###_###_\n##b###a##\n#   #   #\n# @ <   #\n##  A  ##\n_##ABA##_\n__##=##__\n___###___\n");
addLevel('38', "TODO:", "\n_____________\n_   _cdb__=__\n_   _bcd__E__\n_   _cbd__ __\n__C___A___ __\n__  @      __\n__ ___ ___ __\n_bac_ de__ __\n_b b_dcc__E__\n_caa_dde__O__\n_____________\n");
addLevel('39', "TODO: Story 7 (Movement, guards, doors, portals, plague, lasers, closable doors)", "\n#####################\n#   #   ## ##   #   #\n# @     #       # = #\n#   #   ## ##   #   #\n## ####### ### ### ##\n#   ## ##   ## ##   #\n#   #       #   #   #\n#   ## ##   ## ##   #\n## ### ### ### ### ##\n#   #   ## ##   #   #\n#       #           #\n#   #   ## ##   #   #\n#####################\n");
addLevel('40', "It's not that scary.", "\n_____________\n___   @   ___\n__ >       __\n_       <   _\n_   >       _\n_ <##>  ## <_\n_> #a# #=#> _\n_ > B   A   _\n__    #    __\n___  #b#  ___\n___       ___\n___       ___\n___^_^_^_^___\n_____________\n");
addLevel('41', "TODO:", "\n###############################\n#@    v           v     v     #\n#  ^     ^  ^  ^     ^     ^  #\n# <# <# <#> # <# <# <# <#> #> #\n#        v  v        v        #\n#  ^  ^        ^  ^     ^  ^  #\n#> #> # <# <#> #> #> #> # <# <#\n#     v  v           v  v     #\n#  ^        ^  ^  ^        ^  #\n#> # <# <#> #> #> # <#> #> #> #\n#  v              v        v  #\n#     ^  ^  ^  ^     ^  ^     #\n# <#> #> # <#> # <#> # <# <#> #\n#     v  v  v  v     v  v     #\n#  ^              ^        ^  #\n# <# <#> # <#> #> # <# <#> #> #\n#  v     v     v  v  v        #\n#     ^     ^           ^  ^ =#\n###############################\n");
addLevel('42', "TODO:", "\n_0123.oO+ ___\n_ABCDEWXYZ_\n_abcdewxyz_\n__________\nyyyyyyyyyyyy\nyyyyyyyyyyyy\nyyyyyyyyyyyy\nyyyyyyyyyyyy\nyyyuuuyyyyyye\n_# tyui78_\n_     @= _\n\n");
addLevel('43', "TODO:", "\n_ Z _a_z_ z _\n_ Z _____   _\n_ Z _@ =_ z _\n#   #____   _\n#ZZZ#A_Z_z z_\n");
addLevel('44', "TODO:", "\n_cd ### wb_\n_x_ #X#C_c_\n_ DyDc x  _\n_##@#X#C##_\n_#YdY#WbW#_\n_##E#Z# ##_\n_  e zBwB _\n_ _E#Z# _e_\n_=  ### bz_\n");
addLevel('45', "TODO:", "\nkolphuyyyyyuuuuuuhygtfrdeswaq\nooooo\bllllojnbg\n   @    =\n");
addLevel('46', "TODO:", "\n@=\n");
addLevel('Slime Anim Test', "TODO:", "\n..._ooo\n..._ooo\n..._ooo\n___=___\n.oO_OOO\no@o_OOO\nOo._OOO\n");
addLevel('47', "TODO:", "\n@=\n");
addLevel('48', "TODO:", "\n_______________________\nvvvvvvvvvvvvvvvvvvvvvvv\n.oO-o\n@=\n");
addLevel('49', "TODO:", "\n_#__###_\n#  @=  #\n# #   ##\n_###__#_\n");
addLevel('50', "TODO:", "\n_   _ _ _  @_\n__ __ _ _ ___\n__ __   _  __\n__ __ _ _ ___\n__ __ _ _  =_\n_###_###_##__\n_#___#_#_#_#_\n_##__#_#_#_#_\n_#___#_#_#_#_\n_###_#_#_##__\n");

var game = new Game(levels);
game.start();

}());
