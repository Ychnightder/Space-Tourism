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

function insertData(db, tableName, columns, values) {

    const placeholders = columns.map(() => "?").join(", ");
    const query  = `INSERT INTO ${tableName} (${columns.join(", ")}) VALUES (${placeholders})`;


    const stmt = db.prepare(query);

    values.forEach(valueSet => {
        stmt.run(valueSet, err => {
            if (err) console.error("Erreur insertion:", err);
        });
    });
    stmt.finalize(() => console.log(`✅ Données insérées dans "${tableName}".`));
}

module.exports = {
    connectDB,
    createTable,
    insertData
};