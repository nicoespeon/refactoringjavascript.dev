import { Expense } from "./expense";

function createReport(log) {
  function getMealOverExpenseMarker(expense) {
    return expense.mealOverExpensesMarker;
  }

  return function printReport(expenses) {
    let total = 0;
    let mealExpenses = 0;

    log.write("Expenses 2021-10-06\n");

    for (const data of expenses) {
      const expense = new Expense(data);
      mealExpenses += expense.mealAmount;

      log.write(
        expense.name +
          "\t" +
          expense.amount +
          "\t" +
          getMealOverExpenseMarker(expense)
      );
      total += expense.amount;
    }

    log.write("Meal expenses: " + mealExpenses);
    log.write("Total expenses: " + total);
  };
}

export { createReport };
