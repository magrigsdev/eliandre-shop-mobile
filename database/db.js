import * as SQLite from 'expo-sqlite';

export const openDB = async () => {
  const db = await SQLite.openDatabaseAsync('Eliandre');
  return db;
};
