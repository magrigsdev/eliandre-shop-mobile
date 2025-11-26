import { FlatList, View, Text, TextInput } from "react-native";
// import { style } from "../styles/categoryStyle";
import { style } from "../styles/sacsStyle";
import { useEffect, useState } from "react";
import Sacs from "../components/sacs";

const CategoryScreen = () => {

    //HOOKS
    const [recherche, setRecherche] = useState("") 
    const [sacs, setSacs] = useState([]);
    const [erreur, setErreur] = useState(null);

    const [panier, setPanier] = useState([])
    const [quantite, setQuantite] = useState(0)
   
    //fonction qui ajoute le produit
    const ajoutePanier = (item)=>{
        //ajoute le produit dans le panier
       setPanier(prev => {
            //verifier si le produit existe dans le panier
            const exist = prev.find(x => x.id === item.id)
            if(exist){
                // si il existe on augmente la quantité
                return prev.map(x => x.id === item.id ? {...exist, quantite: exist.quantite + 1} : x)
            }
            return [...prev, {...item, quantite: 1}]    
       })
    }

    console.log(quantite)
    //appel du api sec
     useEffect(() => { 
        const chargerSacs = async () => {
            try {
                //const res = await fetch('http://192.168.1.10:3000/api/sacs');
                const res = await fetch('http://172.20.10.2:3000/api/sacs'); //adress ip
                console.info("connecté ...")
            
                if (!res.ok) {
                    //throw = lancer une erreur (interruption immédiate).
                    // new Error() = créer un objet erreur avec message, nom et stack.
                    throw new Error("Sacs introuvable");
                }
            
                const data = await res.json();
                setSacs(data); // mise à jour de l’état avec les données reçues
                } 
            catch (err) {
                setErreur(err.message); // capture et affichage de l’erreur
                } 
            finally {
            // setLoading(false); // fin du chargement dans tous les cas
            console.warn("api a été appelle")
            }
        };
    
    chargerSacs();
    }, []);
   
    //function rechreche.
    const sacsFiltres = sacs.filter(p =>
        p.libelle.toLowerCase().includes(recherche.toLowerCase())
        );

   return (<>
                
            {/* button recherche */}

                <View style={{margin:50,}}>
                    <TextInput 
                    placeholder="Rechercher un sac..."
                    value={recherche}
                    onChangeText={setRecherche}
                    style={{
                    borderWidth: 1,
                    borderColor: '#110404ff',
                    borderRadius: 20,
                    padding: 8,
                    marginBottom: 10,
                    }}
                />
                
                </View>
                

                <View>
                    <Text style={style.cartText}>🧺 Sacs : 
                        {panier.length > 1 && "s"} {panier.length}
                    </Text>
                </View>
                

                <View style={style.container}>
                    {sacsFiltres.length == 0 ? 
                        <View style={style.container}>
                            <Text style={style.title}>Aucun donnée ne correspond</Text>
                        </View>
                    : null }

                    <FlatList 
                        // data={produits}
                        data={sacsFiltres}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) => (

                            <Sacs 
                                item={item} 
                                //recupère le produit et les details.
                                onAddToCart={()=>{ajoutePanier(item)}}
                                quantite = {quantite}  
                                />
                            ) }
                            ItemSeparatorComponent={<View style={style.separator}
                            
                             />}
                            contentContainerStyle={style.list}  
                        />
                </View>
        </>);

}
export default CategoryScreen