const user = {
    // the name here stores the actual value
      name: 'Abhishek', // string(primitives)
    // since location is an object, it stores the reference to an object
    // instead of storing the actual values
      location: { // Objects, arrays are both reference types
        city: 'Bilaspur',
        state: 'CG'
      }
    };
    
// One thing to note here, is that, these both Object.assign() and {...user} do a shallow copy,
// they don't do a deep nested copy, so for deep nested copy -
// we can either use the normal vanilla way to loop over the object and copy each and every values;
// or we can use this lodash method called cloneDeep
const deepNestedCopy = _.cloneDeep(user); // we can't change the properties
const copy =  Object.assign({}, user); // Also {...user}

copy.name = 'Nads';
copy.location.city = 'Jabalpur';

console.log('original :', user);
console.log('copy :', copy);