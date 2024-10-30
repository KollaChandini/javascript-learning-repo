// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body");

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener("click", function (e) {
//     // console.log(e);
//     // console.log(e.target);
//     if(e.target.id==="grey"){
//       body.style.backgroundColor=e.target.id
//     }
//     if(e.target.id==="white"){
//       body.style.backgroundColor=e.target.id
//     }
//     if(e.target.id==="blue"){
//       body.style.backgroundColor=e.target.id
//     }
//     if(e.target.id==="yellow"){
//       body.style.backgroundColor=e.target.id
//     }
//   });
// });

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const color = e.target.id
    switch (color) {
      case "yellow":
        body.style.backgroundColor = color;
        break;
      case "white":
        body.style.backgroundColor = color;
        break;
      case "blue":
        body.style.backgroundColor = color;
        break;
      case "grey":
        body.style.backgroundColor = color;
        break;

      default:
        break;
    }
  });
});

// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body");
// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     const color = e.target.id;
//     body.style.backgroundColor = color;
//   });
// });


