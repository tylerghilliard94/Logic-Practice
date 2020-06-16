let piggyBank = {
    "quarters": 24,
    "nickels": 58,
    "dimes": 108,
    "pennies": 345,
}

let dollarAmount = 0

dollarAmount += piggyBank.quarters * 25
dollarAmount += piggyBank.nickels * 5
dollarAmount += piggyBank.dimes * 10
dollarAmount += piggyBank.pennies
dollarAmount = dollarAmount / 100

console.log(dollarAmount)


