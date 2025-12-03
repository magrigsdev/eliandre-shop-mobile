import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { usePanier } from "../context/panierProvider";
import { Ionicons } from "@expo/vector-icons"
import { styles } from "../styles/panierStyle";


const PanierScreen = () => {
  const { panier, totalPrice, totalItems } = usePanier();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Ionicons name="basket" size={42} color="#00796B" />
        <Text style={styles.title}>Panier</Text>
        <Text style={styles.itemsCount}>({totalItems} produits)</Text>
      </View>

      <Text style={styles.subtitle}>
        Un pas de plus vers l’élégance ✨{"\n"}
        Découvrez la beauté signée Eliandre Shop — il ne vous reste plus qu’à
        valider votre commande
      </Text>

      {/* Product List */}
      <FlatList
        data={panier}
        keyExtractor={(item) => item._id}
        style={{ flexGrow: 0 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.libelle}</Text>
              <Text style={styles.price}>{item.prix} €</Text>
              <Text style={styles.desc}>
                Ce sac allie élégance et praticité grâce à son design raffiné
                et ses finitions soignées.
              </Text>

              {/* Quantity */}
              <Text style={styles.quantity}>
                ( {item.quantity} produits )
              </Text>
            </View>

            {/* Remove button */}
            <TouchableOpacity style={styles.deleteBtn}>
              <Ionicons name="trash-can" size={24} color="#00897B" />
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      {/* Total */}
      <Text style={styles.totalText}>Total : {totalPrice} €</Text>

      {/* Pay */}
      <TouchableOpacity 
        onPress={()=>console.log("button de payement")}
        style={styles.payButton}>
        <Text style={styles.payText}>Payez</Text>
      </TouchableOpacity>

      {/* vide panier */}
      <TouchableOpacity 
            onPress={()=>console.log("button de vider le panier")}
            style={styles.videButton}>
        <Text style={styles.payText}>Vider le panier</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PanierScreen;
