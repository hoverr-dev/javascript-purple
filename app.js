const transactionInUSD = [10, -7, 50, -10, 100];

const transactionInRUB = transactionInUSD.map(transaction => transaction * 60);

console.log(transactionInUSD);
console.log(transactionInRUB);
