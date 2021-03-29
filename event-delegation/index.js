// Event Delegation is nothing but techiniques to make event listerners to work more efficiently.
// let's suppose if we've any e-commerce web-site, then we may have many categories and sub-categories in that
// and each of the subcategories is attached to some kind of events. So we've many such events for just a single
// category. As we know events cost huge, so we need to decrease the amount of events, we currently have, and we
// do this by using Event Delegation

// Just attaching a single event listener to the parent div that can listen to each of the events of it's child.

document.querySelector("#category").addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.tagName === "LI") {
    window.location.href = "/" + e.target.id;
  }
});

// Benefits of Event Delegation,
// 1 -> Memory, As we're attaching just a single event, It saves a lot of memory!
// 2 -> Writing less code!

// Cons
// All the events are not bubbled up, some of them like blur, focus and resizing of the window, scrolling
// are not able to bubble up to the Hierarchy!

// One more example can be of TODO List