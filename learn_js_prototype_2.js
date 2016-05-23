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
function Rabbit(name){
    this.name = name;
    this.speed = 0;
}
////Asking inheritance with Object create method
Rabbit.prototype = Object.create(Animal.Prototype);

////and add our method(or methods...)
Rabbit.prototype.jump = function(){
    this.speed++;
    alert( this.name + ' jump');
}