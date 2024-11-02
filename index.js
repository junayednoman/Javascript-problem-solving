// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
const people = [
  { name: "John", age: 22, gender: "male" },
  { name: "Sarah", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Emily", age: 28, gender: "female" },
];

const filterRemainingPeople = (arrayOfPeople) => {
  const remainingPeople = arrayOfPeople
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
  console.log(remainingPeople);
};

filterRemainingPeople(people);

// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "Moby Dick", author: "Herman Melville", year: 1851 },
];

const mapBookTitles = (arr) => {
  const titles = arr.map((item) => item.title);
  return titles;
};

const bookTitles = mapBookTitles(books);
console.log(bookTitles);

//  3.Task: Function Composition
//  Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const squareNumber = (num) => {
  return num * num;
};

const doubleNumber = (num) => {
  return num * 2;
};
const addFive = (num) => {
  return num + 5;
};

const squareDoubleNumberAndAddFive = (num) => {
  const squaredNumber = squareNumber(num);
  const doubledNumber = doubleNumber(squaredNumber);
  const fiveAddedNumber = addFive(doubledNumber);
  return fiveAddedNumber;
};

const finalCalculatedNumber = squareDoubleNumberAndAddFive(5);
console.log(finalCalculatedNumber);

// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Camry", year: 2021 },
  { make: "Honda", model: "Civic", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2022 },
  { make: "Chevrolet", model: "Malibu", year: 2019 },
  { make: "Tesla", model: "Model 3", year: 2023 },
];

const sortAscending = (arr) => {
  const sortedArr = arr.sort((a, b) => a.year - b.year);
  console.log(sortedArr);
};

sortAscending(cars);

// 5.Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const searchPeopleAndModifyAge = (arr, name, age) => {
  const foundItem = arr.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  if (foundItem) {
    foundItem.age = age;
  }
  console.log(foundItem);
};

searchPeopleAndModifyAge(people, "bOb", 55);
