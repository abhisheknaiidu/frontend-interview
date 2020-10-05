// debouncing can be efficiently used to increase the performance of the frontend applications.
// Anything that has complex computations can be simplified or deferred for a while using debouncing.

// one of the most famous use case of debouncing is to control the API rate.

// Suppose we want to design a search bar, which shows suggested filters when we're typing along,
// at first we make n number of calls to the API, that fetches data for each of the keystroke event like this:
const getData = () => {
  console.log("Fetching Data From API");
};

// To solve the problem of calling this getData function again again, we can use debouncing,
// we want to make sure, that it doesn't get called again again, It should be only be called,
// when a user keystrokes after a pause.

const debounce = function (fn, d) {
  let timer;
  return function () {
    // to fix our this variable and the context, we'll need to do somethings to make it optimal.
    // so these are the basic things which are required to keep a check, such that the environment or the lexical scope
    // where this function is running is correct
    let context = this;
    let params = arguments;

    // to stop the method, we first need store the setTimeout in a variable,
    // and then we'll need to clear it
    // If the time between two keystrokes is less than 0.3 seconds, the timer resets.
    clearTimeout(timer);
    timer = setTimeout(() => {
      // we've used apply to basically fix our this and context parts.
      fn.apply(context, params);
    }, d);
  };
};

const betterFunction = debounce(getData, 300); // (function, delay)
// here delay refers to, if the difference between two keystrokes is 300 ms, then only call getData()
