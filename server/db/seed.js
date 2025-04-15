const sqlite3 = require("sqlite3")
const fs = require("fs");
const dbPath =  "db/space.sqlite"
const jsonPath = "data.json"


const rawData = fs.readFileSync(jsonPath);
const data = JSON.parse(rawData);

const destinations = data.destinations;
const crew = data.crew;
const technology = data.technology;


destinations.forEach(dest => {
    console.log(`Destination: ${dest.name}`);
})


let db = new sqlite3.Database(dbPath, err =>{
    if (err) throw err;

});

db.close();