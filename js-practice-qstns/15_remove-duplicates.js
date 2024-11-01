//using for loop
function removeDuplicates(...args) {
  const uniqueArray = [];
  for (let index = 0; index < args.length; index++) {
    const element = args[index];
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}

//using set
console.log(removDuplicates(1, 1, 1, 2, 3, 4, 4, 4, 5, 66, 5));

function removDuplicates(...args) {
  const uniqArray = [...new Set(args)];
  return uniqArray;
}
console.log(removDuplicates(67, 5, 5, 6, 6, 7, 4));
