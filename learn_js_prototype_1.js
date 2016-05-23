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

////second object - Rabbit
////Animal is prototype for Rabbit
Rabbit.prototype.__proto__ = Animal.prototype;
function Rabbit(name){
    this.name = name;
    this.speed = 0;    
}

Rabbit.prototype.jump = function(){
    this.speed++;
    alert( this.name + ' jump');
};

////Rabbit is prototype for rabbit
var rabbit  = new Rabbit('Bugs bunny');

