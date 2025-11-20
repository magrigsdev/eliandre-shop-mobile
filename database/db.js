
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('monapp.db');

export const initDB = () => {
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT,
            prenom TEXT,
            telephone INTEGER,
            email TEXT UNIQUE,
            password TEXT,
            );`
        );
    });
};
export default db;