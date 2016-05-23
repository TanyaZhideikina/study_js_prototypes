////I learn prototypes in Javascript

//// first object - Animal
function Animal(name){
    this.name = name;
    this.speed = 0;
}

Animal.prototype.run = funtion(speed){
    this.speed+=speed;
    alert(this.name+' run and speed '+this.speed);
};

Animal.prototype.stop = function(){
    this.speed = 0;
    alert(this.name+' stand');
};


////second object Rabbit - new generation
///call the parent constructor
function Rabbit(name){
    Animal.apply(this,arguments);
}
////Asking inheritance with constructor method
Rabbit.prototype = Object.create(Animal.Prototype);
Rabbit.prototype.constructor = Rabbit;

////and add our method(or methods...)
Rabbit.prototype.jump = function(){
    this.speed++;
    alert( alert( this.name + ' jump, speed ' + this.speed ););
}