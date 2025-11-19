import { FlatList, View, Text, TextInput, Image } from "react-native";
import { styles } from "../styles/categoryStyle";
import { useEffect, useState } from "react";

const Category = () => {
    //HOOKS
    const [recherche, setRecherche] = useState("") 
    const [sacs, setSacs] = useState([]);
    const [erreur, setErreur] = useState(null);

     useEffect(() => { 
        const chargerSacs = async () => {
            try {
            const res = await fetch('http://172.16.19.55:3000/api/sacs');
            console.info("connecté ...")
        
            if (!res.ok) {
                //throw = lancer une erreur (interruption immédiate).
                // new Error() = créer un objet erreur avec message, nom et stack.
                throw new Error("Sacs introuvable");
            }
        
            const data = await res.json();
            setSacs(data); // mise à jour de l’état avec les données reçues
            } catch (err) {
            setErreur(err.message); // capture et affichage de l’erreur
            } finally {
            // setLoading(false); // fin du chargement dans tous les cas
            }
        };
    
    chargerSacs();
    }, []);

        //function rechreche.
        const sacsFiltres = sacs.filter(p =>
            p.libelle.toLowerCase().includes(recherche.toLowerCase())
        );
   return (<>
                <View style={{margin:50,}}>
                    <TextInput 
                    placeholder="Rechercher un sac..."
                    value={recherche}
                    onChangeText={setRecherche}
                    style={{
                    borderWidth: 1,
                    borderColor: '#110404ff',
                    borderRadius: 5,
                    padding: 8,
                    marginBottom: 10,
                    }}
                />
                </View>
   
                <FlatList 
                    // data={produits}
                    data={sacsFiltres}
                    
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => (

                <View style={styles.container}> 
                    <Text style={styles.nomProduit}>{item.libelle}</Text>
                    <Text style={styles.detailsProduit}>
                                {item.prix} €
                    </Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Image style={{ width:158, height:139,}}
                     source={{ uri:item.image}} 

                     />
                    
                </View>
                    )}
                    />
                </>);

}
export default Category