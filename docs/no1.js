// Create a function.
// function countCharacters(inputString):
function countCharacters(inputString) {
  const counts = { a: 0, b: 0, c: 0, d: 0, y: 0 };

  for (const char of inputString) {
    if (char in counts) {
      counts[char] += 1;
    }
  }
  return counts;
}

const inputString = "abdsgyhidsaadgbdaasbvcydsaaaaabbbbbbbbbbbdgsaayre";
const charCounts = countCharacters(inputString);
console.log("Count of 'a':", charCounts.a);
console.log("Count of 'b':", charCounts.b);
console.log("Count of 'd':", charCounts.d);
console.log("Count of 'y':", charCounts.y);

// Initialize counts dictionary with keys 'a', 'b', 'd', and 'y' set to 0.
