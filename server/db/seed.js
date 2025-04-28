// const fs = require("fs");
// const path = require("path");
// const jsonPath = path.join(__dirname, "../data/data.json");
// const { connectDB, createTable, insertData } = require("../utils/db");
//
// const rawData = fs.readFileSync(jsonPath);
// const {destinations , crew , technology}  = JSON.parse(rawData);
//
// const parsedDestinations = destinations.map(d => ({
//     name: d.name,
//     image_png: d.images.png,
//     image_webp: d.images.webp,
//     description: d.description,
//     distance: d.distance,
//     travel: d.travel
// }));
// const parsedCrew = crew.map(m => ({
//     name: m.name,
//     role: m.role,
//     image_png: m.images.png,
//     image_webp: m.images.webp,
//     bio: m.bio
// }));
// const parsedTechnology = technology.map(t => ({
//     name: t.name,
//     description: t.description,
//     image_portrait: t.images.portrait,
//     image_landscape: t.images.landscape
// }));
//
// const db = connectDB();
//
// createTable(db, "destinations", `
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT,
//     description TEXT,
//     distance TEXT,
//     travel TEXT,
//     image_png TEXT,
//     image_webp TEXT
// `);
//
// createTable(db, "crew", `
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT,
//     role TEXT,
//     bio TEXT,
//     image_png TEXT,
//     image_webp TEXT
// `);
//
// createTable(db, "technology", `
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT,
//     description TEXT,
//     image_portrait TEXT,
//     image_landscape TEXT
// `);
//
//
// const destValues = destinations.map(d => [
//     d.name,
//     d.description,
//     d.distance,
//     d.travel,
//     d.images.png,
//     d.images.webp
// ]);
// const crewValues = crew.map(c => [
//     c.name,
//     c.role,
//     c.bio,
//     c.images.png,
//     c.images.webp
// ]);
// const techValues = technology.map(t => [
//     t.name,
//     t.description,
//     t.images.portrait,
//     t.images.landscape
// ]);
//
//
//
// insertData(db, "destinations", ["name", "description", "distance", "travel", "image_png", "image_webp"], destValues);
// insertData(db, "crew", ["name", "role", "bio", "image_png", "image_webp"], crewValues);
// insertData(db, "technology", ["name", "description", "image_portrait", "image_landscape"], techValues);
//
//
// setTimeout(() => db.close(() => console.log("🔒 Base fermée.")), 1000);