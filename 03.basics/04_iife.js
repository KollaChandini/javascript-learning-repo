//Immediately Invoked Function Expressions (IIFE)

(function one() {
  console.log("DB CONNECTED");
  //named iife
})();

((name) => {
  console.log(`DB CONNECTED-2 ${name}`);
  //iife
})("chandu"); //SEMI-COLON IS IMP TO KNOW THE END
