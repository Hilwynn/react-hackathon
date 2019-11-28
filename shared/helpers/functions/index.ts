const objectToArray = (object: object = {}) =>
  Object.keys(object).map(key => {
    return object[key];
  });

export { objectToArray };
