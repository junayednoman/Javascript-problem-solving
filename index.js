// 1.Task: Array Filtering and Mapping
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
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "Moby Dick", author: "Herman Melville", year: 1851 },
];

const mapBookTitles = (books) => {
  const bookTitles = books.map((book) => book.title);
  return bookTitles;
};

const bookTitles = mapBookTitles(books);
console.log(bookTitles);
