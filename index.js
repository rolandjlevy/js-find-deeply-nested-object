const state = require('./data/state.json');
const fs = require('fs');

// TODO: does Basketlines in basket > basketReducer have favourites set?

const updateProductFavourite = ({data, partNumber, isFavourite}) => {
  const clone = (elem) => {
    if (!elem || typeof elem !== 'object') return elem;
    const initialValue = Array.isArray(elem) ? [] : {};
    return Object.entries(elem).reduce((acc, [key, value]) => {
       if (key === 'part' && value === partNumber && elem.hasOwnProperty('favouriteProduct')) {
         elem.favouriteProduct = isFavourite;
      }
      acc[key] = clone(elem[key]);
      return acc;
    }, initialValue);
  }
  return clone(data);
}

try {
  const original = JSON.stringify(state, null, 2);
  fs.writeFileSync('./data/original.json', original);
  console.log('1. writeFileSync > success');
} catch (err) {
  console.error(err);
}

try {
  const params = { data: state, partNumber: 'POR9623183C', isFavourite: true };
  const updated = updateProductFavourite(params);
  const updatedJson = JSON.stringify(updated, null, 2);
  fs.writeFileSync('./data/updated.json', updatedJson);
  console.log('2. writeFileSync > success');
} catch (err) {
  console.error(err);
}

