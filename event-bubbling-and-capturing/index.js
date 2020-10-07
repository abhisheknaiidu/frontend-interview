// Event Bubbling and Capturing are the two different ways of propagation in a DOM tree
// Event Capturing can also be called as Event Trickling.

// Event Bubbling : Bubbles out in the DOM tree in the order child -> parent -> grandparent
// that is up the Hierarchy!
// Event Trickling :  reverse of bubbling, trickles down the DOM tree
// in the order grandparent -> parent -> child
// according to w3, first event capturing happens then bubbling.
// but we change it also by adding a third parameter to event listeners called useCapture
// which is a boolean flag. Default is false, if not used.
// .addEventListener('click' , () => {} , useCapture)
// Since event propagations are heavy costs, we can make efficient by using a event
// method called stopPropagation
// i.e .addEventListener('click', (e) => { e.stopPropation() }, true );
