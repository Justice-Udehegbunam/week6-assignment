// Create a function to separate edible items
function separateEdibleNonEdible(itemString) {
  // create a constant to store the edible items
  const edible = [];
  // create a constant to store the nonedible items
  const nonedible = [];

  // Split the input string into an array of items using comma as the delimiter
  const items = itemString.split(",");

  // Define an array of keywords for edible items
  const edibleKeywords = [
    "rice",
    "yam",
    "beans",
    "cocoyam",
    "banana",
    "semo",
    "milk",
  ];

  // Define an array of keywords for nonedible items
  const nonedibleKeywords = ["table", "tyre", "watch", "chair"];

  // Loop through each item in the items array
  for (const item of items) {
    // Check if the item is an edible item
    if (edibleKeywords.some((keyword) => item.includes(keyword))) {
      // If it is edible, add it to the edible array
      edible.push(item);
    }
    // Check if the item is a nonedible item
    if (nonedibleKeywords.some((keyword) => item.includes(keyword))) {
      // If it is nonedible, add it to the nonedible array
      nonedible.push(item);
    }
  }

  // Return an object containing the edible and nonedible arrays as strings
  return {
    edible: edible.join(", "),
    nonedible: nonedible.join(", "),
  };
}

// Input string containing a list of items
const itemString =
  "rice, yam, beans, cocoyam, banana, semo, table, tyre, milk, watch, chair";

// Call the function to separate edible and nonedible items
const { edible, nonedible } = separateEdibleNonEdible(itemString);

// Display the items in the console
console.log("Edible items:", edible);
console.log("Nonedible items:", nonedible);
