//for loop
function filterFalsyValues(...args) {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    if (args[i]) {
      newArray.push(args[i]);
    }
  }
  return newArray;
}
console.log(
  filterFalsyValues(0, "hello", false, "", undefined, "world", NaN, 42)
);

//filter
function filterFalsyValues(...args) {
  return args.filter(Boolean);
}
console.log(
  filterFalsyValues(0, "hello", false, "", undefined, "world", NaN, 42)
);
