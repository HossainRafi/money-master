document.getElementById("calculate").addEventListener("click", function () {
  //Get income balance
  const myIncomeInput = document.getElementById("income");
  const myIncome = myIncomeInput.value;
  console.log(myIncome);

  // Get food cost
  const myFoodCostInput = document.getElementById("food-cost");
  const myFoodCost = myFoodCostInput.value;
  console.log(myFoodCost);

  // Get rent cost
  const myRentCostInput = document.getElementById("rent-cost");
  const myRentCost = myRentCostInput.value;
  console.log(myRentCost);

  // Get cloth cost
  const myClothCostInput = document.getElementById("cloth-cost");
  const myClothCost = myClothCostInput.value;
  console.log(myClothCost);
});
