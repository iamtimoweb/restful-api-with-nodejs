const express = require("express");
const { store, destroy, update, index } = require("../controllers/NinjaController");

// create router
const router = express.Router();

/*******************************
 * SETTING UP ROUTES
 *******************************/

// Get all the ninjas from the database
router.get("/ninjas",index);

// Add new ninja to the database
router.post("/ninjas", store);

// Update a ninja in the database
router.put("/ninjas/:id", update);

// Delete a ninja in the database
router.delete("/ninjas/:id", destroy);

module.exports = router;
