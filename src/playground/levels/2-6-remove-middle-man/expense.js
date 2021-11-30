class ExpenseType {
  constructor(type, amount) {
    this._type = type;
    this._amount = amount;
  }

  get name() {
    if (this._type === 1) {
      return "Breakfast";
    } else if (this._type === 2) {
      return "Dinner";
    } else if (this._type === 3) {
      return "Car Rental";
    }
  }

  get mealAmount() {
    if (this._type === 1 || this._type === 2) {
      return this._amount;
    } else {
      return 0;
    }
  }

  get isMealAmountOver() {
    if (this._type === 1) {
      return this._amount > 1000;
    } else if (this._type === 2) {
      return this._amount > 5000;
    } else {
      return false;
    }
  }
}

export class Expense {
  constructor(data) {
    this._amount = data.amount;
    this._type = new ExpenseType(data.type, data.amount);
  }

  get name() {
    return this._type.name;
  }

  get mealAmount() {
    return this._type.mealAmount;
  }

  get mealOverExpensesMarker() {
    if (this._type.isMealAmountOver) {
      return "X";
    }

    return " ";
  }

  get amount() {
    return this._amount;
  }
}
