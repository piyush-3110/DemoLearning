/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const obj = {};
  const finalarr = [];
  for (let i = 0; i < transactions.length; i++) {
    var a = transactions[i].category;
    var b = transactions[i].price;
    if (obj.hasOwnProperty(a)) {
      obj[a] += b;
    } else {
      obj[a] = b;
    }
  }
  Object.keys(obj).forEach((key) => {
    finalarr.push({ category: key, totalSpent: obj[key] });
  });
  return finalarr;
}

module.exports = calculateTotalSpentByCategory;
