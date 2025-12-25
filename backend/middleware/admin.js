const express = require("express");
const router = express.Router();
const User = require("../models/User");
const verifyToken = require("../middleware/authMiddleware");

// PROTECT ALL ADMIN ROUTES
router.use(verifyToken);


router.get("/dashboard-stats", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const recentUsers = await User.countDocuments({
      createdAt: {
        $gte: new Date(new Date().setDate(new Date().getDate() - 7))
      }
    });

    res.json({ totalUsers, recentUsers });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
});

module.exports = router;

