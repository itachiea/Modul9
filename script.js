var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period."
var dinosaur = 'triceratops';
var dinosaurUppercase = dinosaur.toUpperCase();
var textAfterReplace = text.replace('Velociraptor', dinosaurUppercase);
console.log(textAfterReplace.slice(0, textAfterReplace.length / 2));