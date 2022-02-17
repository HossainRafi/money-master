const myIncomeInput = document.getElementById("income");
const myFoodCostInput = document.getElementById("food-cost");
const myRentCostInput = document.getElementById("rent-cost");
const myClothCostInput = document.getElementById("cloth-cost");

// Click event
document.getElementById("calculate").addEventListener("click", function () {
  //Get income balance
  const myIncome = myIncomeInput.value;
  const income = Number(myIncome);
  if (isNaN(income) || income < 0) {
    return alert("Please Insert A Positive Number");
  }
  // Get food cost
  const myFoodCost = myFoodCostInput.value;
  const foodCost = Number(myFoodCost);
  if (isNaN(foodCost) || foodCost < 0) {
    return alert("Please Insert A Positive Number");
  }
  // Get rent cost
  const myRentCost = myRentCostInput.value;
  const rentCost = Number(myRentCost);
  if (isNaN(rentCost) || rentCost < 0) {
    return alert("Please Insert A Positive Number");
  }
  // Get cloth cost
  const myClothCost = myClothCostInput.value;
  const clothCost = Number(myClothCost);
  if (isNaN(clothCost) || clothCost < 0) {
    return alert("Please Insert A Positive Number");
  }
  // Total cost
  const myTotalCost = foodCost + rentCost + clothCost;

  // Expenses and remaining balance
  const myExpense = document.getElementById("cost");
  myExpense.innerText = myTotalCost;

  const Balance = document.getElementById("remain-balance");
  Balance.innerText = income - myTotalCost;
});
