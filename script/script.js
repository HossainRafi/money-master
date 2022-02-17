const myIncomeInput = document.getElementById("income");
const myFoodCostInput = document.getElementById("food-cost");
const myRentCostInput = document.getElementById("rent-cost");
const myClothCostInput = document.getElementById("cloth-cost");

const balance = document.getElementById("remain-balance");

const savings = document.getElementById("savings");
const savingAmount = document.getElementById("saving-amount");
const remainAmount = document.getElementById("remain-amount");

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

  if (myIncome < myTotalCost) {
    return alert("Expense can not more than income");
  }
  // Expenses and remaining balance

  const myExpense = document.getElementById("cost");
  myExpense.innerText = myTotalCost;

  
  balance.innerText = income - myTotalCost;
});

 function savingBtn() {
  const amountPercent = (myIncomeInput.value / 100) * savings.value;
    savingAmount.innerText = amountPercent.toFixed(2);
    remainAmount.innerText = balance.innerText - savingAmount.innerText;
};
