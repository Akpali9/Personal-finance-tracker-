let income = [];
let expenses = [];

document.getElementById('add-income-btn').addEventListener('click', addIncome);
document.getElementById('add-expense-btn').addEventListener('click', addExpense);

function addIncome() {
    const incomeAmount = parseFloat(document.getElementById('income-amount').value);
    if (isNaN(incomeAmount) || incomeAmount <= 0) {
        alert('Invalid income amount');
        return;
    }
    
    income.push(incomeAmount);
    document.getElementById('income-list').innerHTML += `<li>${incomeAmount}</li>`;
    document.getElementById('income-amount').value = '';
    updateBalance();
}

function addExpense() {
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
    const expenseDescription = document.getElementById('expense-description').value;
    if (isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Invalid expense amount');
        return;
    }
    expenses.push({ amount: expenseAmount, description: expenseDescription });
    document.getElementById('expense-list').innerHTML += `<li>${expenseDescription}: ${expenseAmount}</li>`;
    document.getElementById('expense-amount').value = '';
    document.getElementById('expense-description').value = '';
    updateBalance();
}

function updateBalance() {
    const totalIncome = income.reduce((a, b) => a + b, 0);
    const totalExpenses = expenses.reduce((a, b) => a + b.amount, 0);
    const balance = totalIncome - totalExpenses;
    document.getElementById('balance-amount').innerText = `Balance: ${balance}`;
}
