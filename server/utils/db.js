const sqlite3 = require("sqlite3")
const path = require("path");

const DB_PATH = path.join(__dirname, "../db/space.sqlite");

function connectDB(){
    return new sqlite3.Database(DB_PATH , err => {
        if (err) throw err;
        console.log("📦 Base de données connectée.");
    });
}

function createTable(db, tableName, schema) {
    const dropQuery = `DROP TABLE IF EXISTS ${tableName}`;
    const createQuery = `CREATE TABLE ${tableName} (${schema})`;

    db.serialize( () => {
        db.run(dropQuery);
        db.run(createQuery , err =>{
            if (err) console.error(`Erreur création table ${tableName}`, err)
            else console.log(`✅ Table "${tableName}" créée.`);
        });
    })
}

function insertData(db, tableName, columns, values) {}

module.exports = {
    connectDB,
    createTable,
    insertData
};