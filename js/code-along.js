// a space for your code along notes 🏄‍♀️

let myFruits = ['banana', 'mango', 'apple', 'pear', 'strawberry', 'raspberry']

myFruits.push('blackberry')


myFruits.forEach(function(fruit) {
    console.log(fruit)
})

// DIY forEach
    // Brain of a callback iterator array
function myForEach(array, callback){
    for(let i = 0; i < array.length; i++) {
    callback(array[i])
    }
}

myForEach(myFruits, function(fruit) {
    console.log(fruit)
})

// Map - make a new array from an existing one
let myFavoriteFruit = myFruits.map(function(fruit) {
    return `One of my favorite fruits is ${fruit}`
})
// console.log(myFavoriteFruit)


// Filter - choose a value to remove from array
let myFilteredFruits = myFruits.filter(function(fruit) {
    if(fruit != 'banana') {
        return true
    } else {
        return false
    }
})

// console.log(myFilteredFruits)

// Reduce - adds all array values into string

let allTheFruits = myFruits.reduce(function(total, fruit) {
    return total + ' ' + fruit
})

console.log(allTheFruits)
