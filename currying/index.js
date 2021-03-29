// A curried function is a function that takes multiple arguments ONE at a time!!!!!

let addition = function (x, y) {
  console.log(x + y);
};

let addition2 = addition.bind(this, 2);
// 2 here points to x and in order to curry we'll need to pass
// other variables seperately like:
// In order to see currying in action, we intentionally pass both the arguments
addition2(5);

// In this way we'll curry functions using bind(), we'll make a copy of a function,
// and then we'll create more methods out of it, by pre-setting some arguments inside of a function.

// Another way of doing currying is by using function closures!

let add = function (x) {
  return function (y) {
    console.log(x + y);
  };
};

let check = add(2);
check(5);
