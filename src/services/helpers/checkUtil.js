export function isOptions(data, property) {
  if (data.hasOwnProperty('options')) {
    if (data.options.hasOwnProperty(property)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
