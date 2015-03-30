var Bee = function() {
	
	Grub.call(this);
	//in Grub.call, What is "this" referring to? is it the "this" in grub?
	this.age = 5;
	this.color = "yellow";
	this.job = "keep on growing"
	Bee.prototype.constructor = Bee;
};
//we need to tell the Bee that Grub is a Prototype of Bee. 
//A failed lookup needs go up the prototype chain.
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;