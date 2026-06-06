let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue = totalExpensesValue + expenseEntries[i][1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  let currentBalance = calculateBalance();

  if (currentBalance < 0) {
    balanceColor = "red";
  } else if (currentBalance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;

  for (const expense of expenseEntries) {
    if (expense[0] === category) {
      categoryTotal = categoryTotal + expense[1];
    }
  }

  return categoryTotal;
}

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  let largestCategoryName = "";
  let largestCategoryTotal = 0;

  for (const category of categories) {
    let currentCategoryTotal = calculateCategoryExpenses(category);

    if (currentCategoryTotal > largestCategoryTotal) {
      largestCategoryTotal = currentCategoryTotal; // El nuevo récord de dinero
      largestCategoryName = category; // El nombre del nuevo campeón
    }
  }

  return largestCategoryName;
}

function addExpenseEntry(values) {
  expenseEntries.push(values);
  totalExpensesValue = totalExpensesValue + values[1];
}
