function Cat(nameIndex) {
    this.name = "Cat-" + nameIndex;
    this.color = "Black and white";

    this.jump = function() {
        console.log(this.name + " is jumping around");
        this.purr();
    }
    this.purr = function() {
        console.log(this.name + " is purring happily");
        this.changeColor("Red");
    }
    this.changeColor = function(color) {
        this.color = color;
        console.log(this.name + "'s color is " + this.color);
    }
}

for (var i = 0; i < 20; i++) {
    var kitten = new Cat(i);
    kitten.jump();
    kitten.changeColor("blue");
}



function Car(brend, color, speed){
this.brend = brend,
this.color = color,
this.speed = speed,

this.DriveCar = function(){
    console.log(this.brend)
}
}

var Audi = new Car ("Audi", "white", 500);

Audi.DriveCar()