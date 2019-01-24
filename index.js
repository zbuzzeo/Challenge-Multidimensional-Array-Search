function locate(array, target) {
  if (!isArray) { return array === target; }
  else if (isArray && array.length <= 0) { return false; }

  return array.some(current => {
    return locate(current, target);
  });
}

module.exports = locate;
