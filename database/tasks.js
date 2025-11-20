
import { openDB } from "./db";


export const InsertUser = async (Nom,Prenom,Email,Password,Telephone) => {
    // open db
  const db = await openDB();
  //insertion d'un nouveau user
  console.log("----------------- -----------")
  console.log("... entre insertion d'un nouveau user")
  await db.runAsync('INSERT INTO Users (Nom,Prenom,Email,Password,Telephone) VALUES (?,?,?,?,?);',
  [Nom,Prenom,Email,Password,Telephone]);
  console.log(` Utilisateur  "${Prenom}"  "${Nom}"  ajoutée`);
};


// verifier si l'utilisateur existe dans la BD
export const VerifUser = async (email, motDePasse) => {
  const db = await openDB();
  const result = await db.getAllAsync(
    'SELECT * FROM Users WHERE Email = ? AND Password= ?;',
    [email, motDePasse]
  );
  return result.length > 0 ? result[0] : null;
};

