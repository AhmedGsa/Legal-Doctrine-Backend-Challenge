const express = require("express");
const router = express.Router();
const {
  createPurchase,
  getUserPurchases,
  getPurchaseDetails,
} = require("../controllers/purchase");
const checkAuth = require("../middlewares/check-auth");

router.route("/").post(checkAuth, createPurchase).get(checkAuth, getUserPurchases);
router.route("/:id").get(checkAuth, getPurchaseDetails);

module.exports = router;
