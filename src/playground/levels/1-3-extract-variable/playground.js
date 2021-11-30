function createReport(log) {
  const type = {
    BREAKFAST: 1,
    DINNER: 2,
    CAR_RENTAL: 3,
  };

  return function printReport(expenses) {
    let total = 0;
    let mealExpenses = 0;

    log.write("Expenses 2021-10-06\n");

    for (const expense of expenses) {
      if (expense.type === type.DINNER || expense.type === type.BREAKFAST) {
        mealExpenses += expense.amount;
      }

      let expenseName;
      switch (expense.type) {
        case type.DINNER:
          expenseName = "Dinner";
          break;
        case type.BREAKFAST:
          expenseName = "Breakfast";
          break;
        case type.CAR_RENTAL:
          expenseName = "Car Rental";
          break;
        default:
          break;
      }

      const mealOverExpensesMarker =
        (expense.type === type.DINNER && expense.amount > 5000) ||
        (expense.type === type.BREAKFAST && expense.amount > 1000)
          ? "X"
          : " ";

      log.write(
        expenseName + "\t" + expense.amount + "\t" + mealOverExpensesMarker
      );
      total += expense.amount;
    }

    log.write("Meal expenses: " + mealExpenses);
    log.write("Total expenses: " + total);
  };
}

export { createReport };
