const express = require('express');
const cors = require("cors");


const destinationsRoutes = require("../routes/destinations");
const crewRoutes = require("../routes/crew");
const technologyRoutes = require("../routes/technology");

const app = express();
const ip = process.env.IP|| '127.0.0.1';
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.redirect("/SpaceTourismAPI");
});

app.get('/SpaceTourismAPI', (req, res) => {
    res.send("Bienvenue sur l'API Space Tourism 🚀");
});

app.use("/SpaceTourismAPI/api/destinations", destinationsRoutes);
app.use("/SpaceTourismAPI/api/crew", crewRoutes);
app.use("/SpaceTourismAPI/api/technology", technologyRoutes);



app.listen(port, ip, function () {
    console.log(`Bienvenue sur l'API Space Tourism 🚀`);
    console.log(`Listening on ${ip}:${port}`);
});