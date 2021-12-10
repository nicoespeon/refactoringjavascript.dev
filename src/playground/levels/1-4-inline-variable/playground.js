function createReport(log) {
  const type = {
    BREAKFAST: 1,
    DINNER: 2,
    CAR_RENTAL: 3,
  };

  return function printReport(expenses) {
    let total = 0;
    let mealExpenses = 0;
    let carRentalCount = 0;
    const dinner = "Dinner";
    let breakfast = "Breakfast";
    let carRental = "Car Rental";

    log.write("Expenses 2021-10-06\n");

    for (const expense of expenses) {
      if (expense.type === type.DINNER || expense.type === type.BREAKFAST) {
        mealExpenses += expense.amount;
      }

      const mrkr =
        (expense.type === type.DINNER && expense.amount > 5000) ||
        (expense.type === type.BREAKFAST && expense.amount > 1000)
          ? "X"
          : " ";

      let expenseName;
      switch (expense.type) {
        case type.DINNER:
          expenseName = dinner;
          break;
        case type.BREAKFAST:
          expenseName = breakfast;
          break;
        case type.CAR_RENTAL:
          expenseName = carRental;
          carRentalCount += 1;
          break;
        default:
          break;
      }

      log.write(expenseName + "\t" + expense.amount + "\t" + mrkr);
      total += expense.amount;
    }

    log.write(carRental + " count: " + carRentalCount);
    log.write("Meal expenses: " + mealExpenses);
    log.write("Total expenses: " + total);
  };
}

export { createReport };
