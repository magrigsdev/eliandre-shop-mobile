import { FlatList, View, Text, TextInput, Alert } from "react-native";
import { style } from "../styles/sacsStyle";
import { useEffect, useState } from "react";
import Sacs from "../components/sacs";

const CategoryScreen = () => {
    const [recherche, setRecherche] = useState("");
    const [sacs, setSacs] = useState([]);
    const [erreur, setErreur] = useState(null);

    // panier contient les items avec leur champ quantity
    const [panier, setPanier] = useState([]);

    useEffect(() => {
        const chargerSacs = async () => {
            try {
                const res = await fetch('http://192.168.1.14:3000/api/sacs');
                if (!res.ok) throw new Error("Sacs introuvable");
                const data = await res.json();
                setSacs(data);
            } catch (err) {
                setErreur(err.message);
            }
        };
        chargerSacs();
    }, []);

    const sacsFiltres = sacs.filter(p =>
        p.libelle.toLowerCase().includes(recherche.toLowerCase())
    );

    const AfficheDetails = (item) => {
        Alert.alert("Détail du sac", `${item.libelle} \nPrix : ${item.prix} €`);
    };

    // ajoute ou incrémente la quantité dans le panier pour un item donné
    const ajoutePanier = (item) => {
        setPanier(prev => {
            const exist = prev.find(p => p._id === item._id);
            if (exist) {
                return prev.map(p =>
                    p._id === item._id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    // obtient la quantité courante pour un item depuis le panier
    const getQuantityById = (item) => {
        return panier.find(p => p._id === item._id)?.quantity || 0;
    };

    // nombre total d'articles (somme des quantités)
    const totalItems = panier.reduce((sum, p) => sum + (p.quantity || 0), 0);

    return (
        <>
            <View style={{ margin: 50 }}>
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
                <Text style={style.cartText}>🧺 Sac
                    {totalItems > 1 && "s"} : {totalItems}
                </Text>
            </View>

            <View style={style.container}>
                {sacsFiltres.length == 0 ?
                    <View style={style.container}>
                        <Text style={style.title}>Aucun donnée ne correspond</Text>
                    </View>
                    : null}

                <FlatList
                    data={sacsFiltres}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => (
                        <Sacs
                            item={item}
                            onAddToCart={() => { ajoutePanier(item); }}
                            onShowDetail={() => { AfficheDetails(item); }}
                            quantite={"🚧 " + getQuantityById(item)}
                        />
                    )}
                    ItemSeparatorComponent={<View style={style.separator} />}
                    contentContainerStyle={style.list}
                />
            </View>
        </>
    );
}

export default CategoryScreen;
