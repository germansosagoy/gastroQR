const express = require("express");
const {
  getAdminView,
  updateMenuItem,
} = require("../controllers/admin.controller.js");
const protect = require("../middleware/auth.middleware.js");
const router = express.Router();

router.get("/", protect, getAdminView);
router.put("/menu/:id", protect, updateMenuItem);

module.exports = router;
