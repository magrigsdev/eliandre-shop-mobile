import {Image, Text, View, Button, Pressable } from "react-native";
import { style } from "../styles/sacsStyle";

const prix = 100;
// Composant pour afficher un produit.
const Sacs = ({item, onAddToCart, quantite}) => (
    
  <View style={style.articleContainer} >
    <Image source={{ uri: item.image}} style={style.image}/>
    <View style={style.info}>
      <Text style={style.nom}>{item.libelle}</Text>
      <Text style={style.info}>{item.description}</Text>
      <Text style={[item.prix > prix ? style.prixUp : style.prixDown]}>{item.prix} €</Text>
      
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          }}>
            <Pressable onPress={onAddToCart} style={{ padding: 10 }}> 
                <Text>➕ Ajouter</Text>
            </Pressable>
                <Text style={style.nom}>{quantite}</Text>
        </View>
        

    </View>
  </View>
);

export default Sacs