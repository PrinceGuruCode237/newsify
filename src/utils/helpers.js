export const capitalize = (str) => {
  return str.at(0).toUpperCase() + str.slice(1, str.length);
};

// TODO: a function to convert object items into numbers
export const convertToNumber = (object) => {
  for (let obj in object) {
    object[obj] = Number(object[obj]);
  }
  return object;
};

//  TODO: a function that takes an object and turn all the values into a single string
export function getStringValue(obj) {
  let str = "";
  for (let o in obj) {
    str = str + obj[o];
  }
  return str;
}
