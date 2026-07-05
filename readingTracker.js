// Weekly reading log
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log
// Takes in two strings, day and book, and a number, minutes,
// in order to create a new object and add it to the end
// of the array readingLog
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };  // create new object with given parameters
  readingLog.push(newEntry);  // push the new entry object to the end of the array readingLog
}

// Returns total minutes spent reading all week
// Takes in an array of objects and returns a number
// representing the total minutes spent reading
function totalReadingMinutes(log) {
  let total = 0;  // keeps track of the number of minutes read total
  for (let entry of log) {  // loops though each object in the given array
    total += entry.minutes; // add the current entry's minutes read reading to the total amount
  }
  return total;
}

// Returns the book read most frequently
// Takes in an array of objects and returns
// a string with the name of the book that
// appears most often
function mostReadBook(log) {
  const bookCounts = {};  // object bookCounts will store # of times each book appears
  for (let entry of log) {    // loops through each object in the given array
    if (!bookCounts[entry.book]) {  // if the book name isn't a key in bookCounts...
      bookCounts[entry.book] = 1; // ...set it as a key with its value being 1 in bookCounts
    } else {
      bookCounts[entry.book]++; // otherwise, it's in bookCounts already; increase its value by 1
    }
  }

  // My suggestion for an improvement would be to keep track of the minutes spent reading each book
  // in place of tracking the number of times a book is picked up. As is, when commenting out the
  // addReadBook() call below in the Example usage section, the most read book is determined to be
  // 1984, despite it only being read for 35 minutes when compared to Dune, which was read for 55
  // minutes total. Since the name of the function implies we'd be returning the book most read,
  // that should be determined on time spent, and it could be done with having the calls be
  // bookCounts[entry.book] += entry.minutes in the first for loop

  let maxBook = null;   // will hold the name of the book read most frequently
  let maxCount = 0;  // will hold the number of times maxBook has been read
  for (let book in bookCounts) {  // loops though each key (book) in bookCounts
    if (bookCounts[book] > maxCount) {  // If the # of times the current book has been read is greater than maxBook...
      maxBook = book;               // set maxBook to the current book
      maxCount = bookCounts[book];  // set maxCount to the # of times the current book has been read
    }
  }
  return maxBook;
}

// Prints a summary of minutes read per day
// Takes in the array of objects and outputs
// each day's entry of minutes reading a given book
function printDailySummary(log) {
  for (let entry of log) {    // loops through each object of the given array
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50);
addReadBook("Sunday", "1984", 5);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));
