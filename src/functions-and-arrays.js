// Iteration #1: Find the maximum

//Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.
function maxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2;

  //other option
  //return Math.max(num1, num2);
}

// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  if (!words.length) {
    return null;
  }

  let longestEntry = "";
  words.forEach((element) => {
    if (element.length > longestEntry.length) {
      longestEntry = element;
    }
  });
  return longestEntry;
}

// Iteration #3: Calculate the sum
function sumNumbers(numbers) {
  if (!numbers.length) {
    return 0;
  }
  let sum = 0;
  numbers.forEach((element) => {
    sum += element;
  });
  return sum;

  //other option
  //return numbers.reduce((a, b) => a + b, 0);
}

// Iteration #3.1 Bonus:

function sum(mixedArr) {
  if (!mixedArr.length) {
    return 0;
  }
  let sum = 0;
  mixedArr.forEach((element) => {
    if (typeof element === "number") {
      sum += element;
    } else if (typeof element === "string") {
      sum += element.length;
    } else if (typeof element === "boolean" && element) {
      sum += 1;
    } else if (typeof element === "object" || typeof element === "array") {
      throw new Error("Unsupported data type sir or ma'am");
    }
  });
  return sum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  if (!numbersAvg.length) {
    return null;
  }

  return sumNumbers(numbersAvg) / numbersAvg.length;

  //other option
  //return !numbersAvg.length ? null : numbersAvg.reduce((a, b) => a + b) / numbersAvg.length;
}

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(wordsArr) {
  if (!wordsArr.length) {
    return null;
  }
  let sum = 0;
  wordsArr.forEach((element) => {
    sum += element.length;
  });
  return sum / wordsArr.length;
}

// Bonus - Iteration #4.1
function avg(numbers) {
  let sum = 0;
  if (numbers.length === 0) return null;
  for (const i of numbers) {
    if (typeof i === "boolean") {
      if (i) {
        sum += 1;
      }
    } else if (typeof i === "string") sum += i.length;
    else {
      sum += i;
    }
  }
  return sum / numbers.length;
}

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(wordsUnique) {
  let uniqueWords = [];

  if (!wordsUnique.length) {
    return null;
  }

  wordsUnique.forEach((element) => {
    if (!uniqueWords.includes(element)) {
      uniqueWords.push(element);
    }
  });

  return uniqueWords;

  //other option
  //return wordsUnique.length === 0 ? null : [...new Set(wordsUnique)];
}

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordsFind, word) {
  if (!wordsFind.length) {
    return null;
  }
  let found = false;
  wordsFind.forEach((element) => {
    if (element === word) {
      found = true;
    }
  });
  return found;

  //other option
  //return wordsFind.length === 0 ? null : wordsFind.includes(word);
}

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(wordsCount, word) {
  if (!wordsCount.length) {
    return 0;
  }
  let count = 0;
  wordsCount.forEach((element) => {
    if (element === word) {
      count++;
    }
  });
  return count;

  //other option
  //return wordsCount.length === 0 ? 0 : wordsCount.filter((element) => element === word).length;
}

// Iteration #8: Bonus
const matrixa = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
  [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
  [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
  [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]
];

//Bonus Quest - greatestProduct
function greatestProduct(matrix) {
  let product = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i < matrix.length - 3) {
        product =
          matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
        if (product > greatestProduct) {
          greatestProduct = product;
        }
      }
      if (j < matrix[i].length - 3) {
        product =
          matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
        if (product > greatestProduct) {
          greatestProduct = product;
        }
      }
    }
  }
  return product;
}

//Bonus - Iteration #8.2: Product of diagonals
//Following the logic you've used in iteration #8.1, declare a function called greatestProductOfDiagonals(matrix).
//It takes a matrix as a parameter and returns the greatest product of any four values layed out diagonally, in either direction.

function greatestProductOfDiagonals(matrix) {
  let product = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i < matrix.length - 3 && j < matrix[i].length - 3) {
        product =
          matrix[i][j] *
          matrix[i + 1][j + 1] *
          matrix[i + 2][j + 2] *
          matrix[i + 3][j + 3];
        if (product > greatestProductOfDiagonals) {
          greatestProductOfDiagonals = product;
        }
      }
      if (i < matrix.length - 3 && j > 2) {
        product =
          matrix[i][j] *
          matrix[i + 1][j - 1] *
          matrix[i + 2][j - 2] *
          matrix[i + 3][j - 3];
        if (product > greatestProductOfDiagonals) {
          greatestProductOfDiagonals = product;
        }
      }
    }
  }
  return product;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct,
    greatestProductOfDiagonals,
  };
}
