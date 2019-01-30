function locate(array, target) {

  const flattenArrays = (array) => {
    let stack = [];

    array.forEach(item => {
      if (Array.isArray(item)) {
        stack = stack.concat(flattenArrays(item));
      } else {
        stack.push(item);
      }
    });

    return stack;
  }

  return flattenArrays(array).includes(target);
}

module.exports = locate;
