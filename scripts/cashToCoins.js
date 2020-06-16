let piggyBank2 = {}
let dollarAmount2 = 23.18

dollarAmount2 = dollarAmount2 * 100 
piggyBank2.quarters = dollarAmount2 / 25 
dollarAmount2 = dollarAmount2 % 25
piggyBank2.dimes = dollarAmount2 / 10
dollarAmount2 = dollarAmount2 % 10
piggyBank2.nickels = dollarAmount2 / 5
dollarAmount2 = dollarAmount2 % 5
piggyBank2.pennies = dollarAmount2

piggyBank2.quarters = Math.floor(piggyBank2.quarters)
piggyBank2.dimes = Math.floor(piggyBank2.dimes)
piggyBank2.nickels = Math.floor(piggyBank2.nickels)


console.log(piggyBank2)