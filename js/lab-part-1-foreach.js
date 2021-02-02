// (1) Use the .forEach iterator to loop over the following array of foods and say you like them.

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"
 
const foods = ["pizza", "tacos", "ice cream", "sushi"];


// your code here
foods.forEach(function(foodsILike) {
  console.log(`I like ${foodsILike}`)
})

// (2) Use the .forEach iterator to loop over the following array of objects and say how delicious each one is.
// The output should be
// > Pizza is very delicious
// > Tacos is mostly delicious
// > Cottage Cheese is not very delicious

const foodLevels = [
  {name: "Pizza", level: "very"},
  {name: "Tacos", level: "mostly"},
  {name: "Cottage Cheese", level: "not very"}
];

// your code here
foodLevels.forEach(function(foodLevel) {
  let name = foodLevel.name
  let level = foodLevel.level
  console.log(`${name} is ${level} delicious`)
})