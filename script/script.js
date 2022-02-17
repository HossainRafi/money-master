document.getElementById("calculate").addEventListener("click", function () {
  //Get income balance
  const myIncomeInput = document.getElementById("income");
  const myIncome = myIncomeInput.value;

  // Get food cost
  const myFoodCostInput = document.getElementById("food-cost");
  const myFoodCost = myFoodCostInput.value;

  // Get rent cost
  const myRentCostInput = document.getElementById("rent-cost");
  const myRentCost = myRentCostInput.value;

  // Get cloth cost
  const myClothCostInput = document.getElementById("cloth-cost");
  const myClothCost = myClothCostInput.value;

  // ============================
  const myTotalCost =
    Number(myFoodCost) + Number(myRentCost) + Number(myClothCost);

  // ====================
  const myExpense = document.getElementById("cost");
  myExpense.innerText = myTotalCost;

  const Balance = document.getElementById("remain-balance");
  Balance.innerText = Number(myIncome) - myTotalCost;
});
