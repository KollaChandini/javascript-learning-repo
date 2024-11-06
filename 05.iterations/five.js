const coding = ["java", "javascript", "python", "ruby", "swift"];

coding.forEach(function (item) {
  // console.log(item);
});
//arrow
coding.forEach((item) => {
  // console.log(item);
});

function printMe(item) {
  //   console.log(item);
}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

const myCoding = [
  {
    langName: "javascript",
    fileName: "js",
  },
  {
    langName: "java",
    fileName: "java",
  },
  {
    langName: "python",
    fileName: "py",
  },
];
myCoding.forEach((item) => {
  console.log(item.langName);
});
