const state = require('./state.json');

const _ = require('lodash');

const part = { part: 'POR9623183C'};

// console.log(result)

// _.foreach(state, _.matches(part));

_.forEach(state, (obj) => {
  // const match = _.isMatch(obj, part);
  // console.log(obj);
  // const found = _.isMatch(obj, part);
});


// _.filter(state, _.matches(part));

// const match = _.isMatch(state, part);

// console.log(match)

// _.forEach(state, _.matches(part), item => {
//   console.log("Matched by " + item);
// });

// const matchedItems = _.filter(state, part);

// _(matchedItems).each(item => {
//   console.log("Matched by " + item);
// });

// const filtered = _.filter(state, part);
// const found = _.find(state, part);
// console.log(found);

const result =  _.find(state, item => (item.part === 'POR9623183C'));

console.log(result);