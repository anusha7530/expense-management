const express = require("express");
const {
  addtransaction,
  getAlltransaction,
  edittransaction,
  deletetransaction,
} = require("../controllers/transactionCtrl");


const router = express.Router();

router.post("/add-transaction", addtransaction);
router.post("/edit-transaction", edittransaction);
router.post("/delete-transaction", deletetransaction);
router.post("/get-transaction", getAlltransaction);

module.exports = router;