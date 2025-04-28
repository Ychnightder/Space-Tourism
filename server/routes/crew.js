const express = require("express");
const router = express.Router();
const { connectDB } = require("../utils/db");

router.get("/", (req, res) => {
    const db = connectDB();
    const query = "SELECT * FROM crew";

    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
        db.end();
    });
});

module.exports = router;
