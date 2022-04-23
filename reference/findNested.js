const state = require('./state.json');

const isObject = (value) => {
  return !!(value && typeof value === "object" && !Array.isArray(value));
};

const findNestedObject = (object = {}, keyToMatch = "", valueToMatch = "") => {
  if (isObject(object)) {
    const entries = Object.entries(object);

    for (let i = 0; i < entries.length; i += 1) {
      const [objectKey, objectValue] = entries[i];

      if (objectKey === keyToMatch && objectValue === valueToMatch) {
        return object;
      }

      if (isObject(objectValue)) {
        const child = findNestedObject(objectValue, keyToMatch, valueToMatch);

        if (child !== null) {
          return child;
        }
      }
    }
  }
  return null;
};

const match = findNestedObject(state, 'part', 'POR9623183C');
console.log(match);

function clone(element) {
  if (!element || typeof element !== 'object') return element;
  const result = Array.isArray(element) ? [] : {};
  Object.entries(element).forEach(([key, value]) => {
     if (key === 'part' && value === currentPart && element.hasOwnProperty('favouriteProduct')) {
      // element.favouriteProduct = isFavourite;
      console.log(`part ${currentPart}, favourite is set to ${element.favouriteProduct}`);
    }
    result[key] = clone(value);
  });
  return result;
}