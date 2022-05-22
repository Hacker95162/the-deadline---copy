// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000a07070707070707070707070707070b09000000000d0808080808080808080c09000000000d0808080808080808080c09000000000d0801080808080808080c09000000000d080d080808080e08080c09000000000d08080808080d0d08080c09000000000d08080f0808080808080c09000000000d080d0d0808080808080c09000000000d0808080808080808080c09000000000d0808080808080f08080c09000000000d08080808080d0d08080c0900000000080808080f08080808080c09040010050808080d0d08080808050c020202020202020202020202020602020303030303030303030303030303030303030303030303030303030303030303`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 . 2 . . . . . . . 2 
2 . . . . 2 . . . . . 2 2 . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 . 2 2 . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 . . . . . 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . 2 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.swamp.swampTile13,sprites.builtin.forestTiles22,sprites.builtin.forestTiles25,sprites.swamp.swampTile1,sprites.swamp.swampTile0,sprites.builtin.forestTiles2,sprites.builtin.forestTiles6,sprites.builtin.forestTiles10,sprites.builtin.forestTiles9,sprites.builtin.forestTiles5,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.builtin.forestTiles26,sprites.swamp.swampTile16,sprites.castle.tileDarkGrass2,sprites.swamp.swampTile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
