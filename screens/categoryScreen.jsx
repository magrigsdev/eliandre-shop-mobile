import { FlatList, View, Text, TextInput, Alert } from "react-native";
import { style } from "../styles/sacsStyle";
import { useEffect, useState } from "react";
import Sacs from "../components/sacs";
import { usePanier } from "../context/panierProvider";

const CategoryScreen = () => {
    const [recherche, setRecherche] = useState("");
    const [sacs, setSacs] = useState([]);
    const [erreur, setErreur] = useState(null);

    const { ajoutePanier, getQuantityById, totalItems } = usePanier();
    useEffect(() => {
        const chargerSacs = async () => {
            try {
                //172.20.10.2
                //192.168.1.14
                const res = await fetch('http://172.20.10.2:3000/api/sacs');
                if (!res.ok) throw new Error("Sacs introuvables");
                const data = await res.json();
                setSacs(data);
            } catch (err) {
                setErreur(err.message);
            }
        };
        chargerSacs();
    }, []);

    //filter les sacs
    const sacsFiltres = sacs.filter(p =>
        p.libelle.toLowerCase().includes(recherche.toLowerCase())
    );

    const AfficheDetails = (item) => {
        Alert.alert("Détail du sac", `${item.libelle} \n${item.prix} €`);
    };

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
                <Text style={style.cartText}>
                    🛒 Sac{totalItems > 1 ? "s" : ""} : {totalItems}
                </Text>
            </View>

            <View style={style.container}>
                {erreur && <Text style={style.title}>{erreur}</Text>}

                {sacsFiltres.length === 0 && !erreur ? (
                    <Text style={style.title}>Aucune donnée ne correspond</Text>
                ) : (
                    <FlatList
                        data={sacsFiltres}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) => (
                            <Sacs
                                item={item}
                                onAddToCart={() => ajoutePanier(item)}
                                onShowDetail={() => AfficheDetails(item)}
                                quantite={"🛒 " + getQuantityById(item)}
                            />
                        )}
                        ItemSeparatorComponent={<View style={style.separator} />}
                        contentContainerStyle={style.list}
                    />
                )}
            </View>
        </>
    );
};

export default CategoryScreen;
