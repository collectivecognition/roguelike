var w = 39, h = 45;
var dm = new ROT.Map.DividedMaze(w, h);

for (var i=0; i<4; i++) {
    var display = new ROT.Display({width:w, height:h, fontSize:6});
    document.body.appendChild(display.getContainer());

    dm.create(display.DEBUG);
}