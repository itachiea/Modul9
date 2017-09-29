var drawTree = function(treeHeight) {
    var star = "";
    for (var i = 0; i < treeHeight; i++) {
        star += "*";
        console.log(star);
    }
}

//main

var HeightTree = prompt('Podaj wysokosc choinki :)');
drawTree(HeightTree);