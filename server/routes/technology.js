const express = require("express");
const router = express.Router();
const { connectDB } = require("../utils/db");

router.get("/", (req, res) => {
    const db = connectDB();
    const query = "SELECT * FROM technology"; // requête SQL

    db.all(query, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }else {
            res.json(rows);
        }
        db.close();
    })
})


module.exports = router;