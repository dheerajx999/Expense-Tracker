const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require("../controllers/Expense");

const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/Income");

const router = require("express").Router();

//income api calls

router.post("/add-income", addIncome);
router.get("/get-incomes", getIncomes);
router.delete("/delete-income/:id", deleteIncome);

//expense Api calls

router.post("/add-expense", addExpense);
router.get("/get-expenses", getExpenses);
router.delete("/delete-expense/:id", deleteExpense);

module.exports = router;
