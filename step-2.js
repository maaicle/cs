// 1. Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
const addToZero = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true;
            }
        }
    }
    return false;
}

const testArr = [1, 2, 3, 4, -5, -1];
// console.log(addToZero(testArr));

// Time complexity is O(n^2). 
// The first loop is simple. Since it is dependent on arr.length the worse case is it iterates n times. 
// The second loop iterates n-i-1 times. In total the inner iterates n-1 + n-2 + n-3... This sumed up will show that it iterates half as many times as the outer loop (n-1)/2.
// Since one loop is nested in the other you have to mulitply them and you get n*(n-1)/2. When we remove the constants it simplifies to n*n or O(n^2).

// Space complexity is O(1).
// Since we only care about auxilary space complexity (space required by the algorithm) we do not include inputs (function's arguments).
//  i is storing one number. Most primative datatypes are considered constants space (not strings), so i would be O(1).
// j is the same situation as i so it is O(1).
// nothing else is being stored so the equation is 1 + 1 = O(1).

// 2. Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
const hasUniqChars = string => {
    let stringSet = [...new Set(string.toLowerCase())];
    return string.length === stringSet.length ? true : false;
}

const testString = 'Moonday';
// console.log(hasUniqChars(testString));

// Time complexity is O(n)
// toLowerCase goes through each char in the string so it is O(n).
// Turning the string into a set removes duplicates which is O(n) (see https://stackoverflow.com/questions/65078780/what-is-the-time-complexity-of-creating-set-from-array)
// Spreading the Set into the stringSet array is O(n) as it loops through the length of the set.
// The turnary statement is O(1).
// Together they are n + n + n + n + 1 = O(n).

// Space complexity is O(1).
// stringSet is storing data based on the input. It's using the Set class which will only save unique characters. Although string will have an infinite amount of characters, stringSet will max out at some point (not sure when that is).  Making it O(1).

// 3. A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
// Write a function to check a sentence to see if it is a pangram or not.

const isPangram = string => {
    // let stringAlph = string.toLowerCase().replace(/[^a-z]+/g, '')
    let uniqChars = new Set();
    const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    string.toLowerCase().split('').forEach(ele => {
        if (alph.includes(ele)) {
            uniqChars.add(ele);
        }
    });
    
    return uniqChars.size === 26;
}

const testPan = '123 The quick brown fox jumps over the lazy dog!'
// console.log(isPangram(testPan));

// Time complexity is O(n^2).
// (wanted to use regex here but couldn't figure the time complexity for my use of it).
// toLowercase, .split, and .forEach are all O(n). They are done one after another so they are added together equallying O(n).
// Inside of the forEach we are checking to see if each element exists in the alph array. Worse case scenario is that it will loop through each letter in alph for a total of 26 operations. Since 26 is a constant this would be an O(1) function.
// According to https://stackoverflow.com/questions/31091772/javascript-es6-computational-time-complexity-of-collections, Set functions (like add) are O(n). Since this is nested in the forEach we will have to multiply it.
// according to https://tc39.es/ecma262/multipage/keyed-collections.html#sec-get-set.prototype.size, Set.size loops through the set and counts the elements making it O(n)
// I believe the equation for the function would be written out as 1 + 1 + n + n + n (26 + n) + n = O(n * n) = O(n^2)
// I think I could have gotten it down to O(n) if uniqChars was an array that I pushed ele into (O(1)). Then after the loop got unique values by spreading uniqChars into a Set.

// Space complexity is O(1).
// uniqChars will max out at 26 chars since it will only accept alph characters and does not accept duplicates. Making it O(1)
// alph is a const 26 chars so it is O(1)
// Worse case scenario will be 26 + 26 = O(1)

// 4. Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const findLongestWord = arr => {
    let longest = 0;
    arr.forEach(ele => {
        if (ele.length > longest) {
            longest = ele.length;
        }
    })

    return longest;
}

console.log(findLongestWord(["hi", "hello", "sup"]));

// Time complexity is O(n)
// forEach is O(n);
// From what I've gathered, String.length is O(1) because length is stored in the String class. 
// The equation would be 1 + n * (1 + 1) = O(n).

// Space complexity is O(n).
// Worse case scenario is arr is filled with infinite amount of strings which character lengths increment with each iteration. Meaning that the longest var will be holding a string with infinite characters (O(n)).