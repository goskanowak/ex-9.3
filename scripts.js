var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dino = 'triceratops';

var dinoUpperCased = dino.toUpperCase();

console.log(dinoUpperCased);

var changeVelociraptor = text.replace('Velociraptor', dinoUpperCased);

console.log(changeVelociraptor);

console.log(text.length/2);

var partText = changeVelociraptor.slice(0,72);

console.log(partText);