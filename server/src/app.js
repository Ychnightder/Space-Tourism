const express = require('express');
const cors = require("cors");
const { connectDB } = require("../utils/db");


const destinationsRoutes = require("../routes/destinations");
const crewRoutes = require("../routes/crew");
const technologyRoutes = require("../routes/technology");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/destinations", destinationsRoutes);
app.use("/api/crew", crewRoutes);
app.use("/api/technology", technologyRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});