// polyfill is nothing, but creating our own functions to make it run in every browser.

// Our Task is to create our own implementation for bind function.

let userInfo = {
  firstName: "Abhishek",
  lastName: "Naidu",
};

let printName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + "," + state
  );
};

let printMyName = printName.bind(userInfo, "Bilaspur", "Chattisgarh");
printMyName();

// Since function is a class, so in order to attach a method/function to the classes in javascript, we use prototypes
// Function.prototype because then every method has access to this myBind function.
Function.prototype.myBind = function (...args) {
  // ...args is basically extracting all the info that is being passed.
  // here this => printName()
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    // if ...args is an arraylist(more than 1 argument is passed), we cannot use call,
    // we'll need to use apply for that.
    // concating the two arrays, when we've more than 2 arguments.
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printUserName = printName.myBind(userInfo, "Bilaspur");
printUserName("Chattisgarh");
