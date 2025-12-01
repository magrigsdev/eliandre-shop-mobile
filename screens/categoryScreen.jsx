import { FlatList, View, Text, TextInput, Alert } from "react-native";
// import { style } from "../styles/categoryStyle";
import { style } from "../styles/sacsStyle";
import { useEffect, useState } from "react";
import Sacs from "../components/sacs";

const CategoryScreen = () => {

    //HOOKS
        const [recherche, setRecherche] = useState("") 
        const [sacs, setSacs] = useState([]);
        const [erreur, setErreur] = useState(null);
        //hooks already use

        const [panier, setPanier] = useState([])
        const [quantite, setQuantite] = useState(0)

    //
   
    //appel du api sec
     useEffect(() => { 
        const chargerSacs = async () => {
            try {
                //const res = await fetch('http://192.168.1.10:3000/api/sacs');
                const res = await fetch('http://192.168.1.14:3000/api/sacs'); //adress ip
                // const res = await fetch('http://localhost:3000/api/sacs'); //adress ip
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
        //call function
        chargerSacs();

    }, []);
   
    //function rechreche.
    const sacsFiltres = sacs.filter(p =>
        p.libelle.toLowerCase().includes(recherche.toLowerCase())
        );
   //*****************************************  */
    //FUNCTION AFFICHE DETAILS
    const AfficheDetails = (item) => { 
        Alert.alert("Détail du sac",`${item.libelle} \nPrix : ${item.prix} € `)
        console.log(item.libelle + " " + item.prix + " €")
    }

    
    // FUNCTION RECUPERE TOUS LES IDS DU PRODUIT
    const getIds = () => {
        return sacsFiltres.map(item => item._id)
    }
    // FUNCTION ADD QUANTITY FIELD INSIDE SAC ARRAY 
    const addQuantityField = () => {
        return sacsFiltres.map(item => ({...item, quantity: 0})) 
    }
    // FUNCTION ADD QUANTITY
    //*****************************************  */
    //initialize addquantityField function
    useEffect(() => {
        //add quantity field inside sac array
        addQuantityField()
        console.warn("adding quantity field",addQuantityField())
    }, [])

    //temp__
    const update_array_sac = addQuantityField()
    

    //FUNCTION AJOUTE PANIER 
    const [cart, setCart] = useState([])

    const ajoutePanier = (item) => 
        {
        //checking id of bag
        const foundItem = update_array_sac.find(article => article._id === item._id);
        //
        console.log("--------------------------- debut")
        // console.log("the id of bag",foundItem);
        // copy of array
        setPanier((prevPanier) => 
            {
                console.log("enter in setpanier.")
                const exist = prevPanier.find(p => p._id === foundItem._id);
                console.log("existe egale : ", exist)

                    if (exist) {
                        // Update quantity if already exists
                        return prevPanier.map(p =>
                            p._id === item._id
                            ? { ...p, quantity: p.quantity + 1 }
                            : p
                        );
                    }
                // Add new item with quantity = 1
                return [...prevPanier, { ...item, quantity: 1 }]; 
            });
            //panier ? console.warn(panier) : console.warn("no exist")
            console.warn("********** ************")
            console.warn(panier)
            setQuantite(getQuantityById(item._id))
         
    }
    const getQuantityById = (item) => {
        if(panier.length > 0)
        {
            const product = panier.find(article => article.id === item._id);
            return product ? product.quantity : 0
        }
    }
    
    

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
                
                {/* button panier */}
                <View>
                    <Text style={style.cartText}>🧺 Sac 
                        {panier.length > 1 && "s"} : {panier.length}
                    </Text>
                </View>
                
                {/* liste des sacs */}
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
                                //show details
                                onShowDetail={()=>{AfficheDetails(item)}}
                                //quantity
                                quantite = {"🚧 " + quantite}  
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