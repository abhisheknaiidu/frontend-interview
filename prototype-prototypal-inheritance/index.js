// Almost all objects in Javascript pass down properties through a prototype chain. 
// We call this chain, prototypal inheritance. The child of the object "inherits" properties from its parent.
// The objects inherit methods and properties from Object.prototype
// The prototype property also has an accessor property called __proto__ that creates 
// a link between the current object and points to the object it was created from, the "prototype". 

// Inheritance helps one object to access properties of another object
// Whenever we create a JS object or a function, then JS engine without even telling
// attaches few built-in properties and functions and these all come via Prototypal => __proto__

let arr = ['Abhishek', 'Naidu'];
let object = {
  fName: 'Abhishek',
  lName: 'Naidu',
  getFullInfo: function () {
    console.log(this.fname + this.lname);
  },
};

function fun() {
  //
}

// So it creates a object named __proto__ and attaches to our object
// ex - arr.__proto__ === Array.prototype
// also arr.__proto__.__proto__ === Object.prototype
// and arr.__proto__.__proto__.__proto__ === null which is the end of the chain!

// for 2nd one -
// object.__proto__ === Object.prototype
// but object.__proto__.__proto__ === null

// for functions -
// fun.__proto__ === Function.prototype
// fun.__proto__.__proto__ === Object.prototype
// fun.__proto__.__proto__.__proto__ === null

// This all summarizes that everything in JS is nothing but objects!!!
// Whether you make arr,func,object, it is actually down the prototype chain ends up being an object.
// this is what we call the protype chain, and it ends up being null.

let object2 = {
  fname: 'Raj',
};
// if we do this, but it's not advisable to do this.
object2.__proto__ = object;
// we can access the properties the object in object2!
object.getFullInfo(); // Abhishek Naidu
object2.getFullInfo(); // Raj Naidu

// Talking about Prototypes :
Function.prototype.mybind = function () {
  console.log('nads');
};

// Each and every fxn we now create, will have now access to mybind method
// just because we set the mybind to prototype.

function nads() {}

function nads2() {}
