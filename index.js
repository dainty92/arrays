// Question 1

Mutation methods are those that modify the original array directly and any changes made to the array will be reflected in all references to that array, whereas non-mutation methods return a new array with the desired modifications without modifying the original array. Here are 5 examples of array methods that fall under each category:

Mutation Methods:

push() - adds one or more elements to the end of the array.
pop() - removes the last element from the array.
splice() - removes or replaces elements from the array at a specified index.
shift() - removes the first element from the array.
unshift() - adds one or more elements to the beginning of the array.

Non-Mutation Methods:

concat() - returns a new array that concatenates two or more arrays together.
slice() - returns a new array that contains a section of the original array, without modifying the original array.
join() - returns a string that concatenates all the elements of an array, without modifying the original array.
map() - returns a new array with the results of calling a function for every element in an array.
filter() - returns a new array containing all elements of an array that pass a certain condition specified by a function.


// Question 2

let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add 'Kotlin' to the end of the array
languages.push('Kotlin');

// Add 'Java' after 'Ruby'
languages.splice(languages.indexOf('Ruby') + 1, 0, 'Java');

// Remove the first item in the array
languages.shift();

// Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');

// Replace 'PHP' with 'Go' and 'Rust'
let index = languages.indexOf('PHP');
languages.splice(index, 1, 'Go', 'Rust');

// After running this code, the languages array will contain the following elements: 
// ['Scala', 'Swift', 'JavaScript', 'Ruby', 'Java', 'Go', 'Rust', 'Python', 'Kotlin']


// Question 3

After calling the changeFruit function, the value of fruit will be:
['apple', 'mango', 'orange']


// Question 4

function max(numbers) {
    return Math.max(...numbers);
}

let numbers = [4, 20, 50, -20];
let maxValue = max(numbers);
console.log(maxValue); // Output: 50


// Question 5

function valTimesIndex(arr) {
    return arr.map((num, index) => num * index);
}

console.log(valTimesIndex([1, 2, 3])); // Output: [0, 2, 6]
console.log(valTimesIndex([5, 10, 15])); // Output: [0, 10, 30]