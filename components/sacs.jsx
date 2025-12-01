import {Image, Text, View, Pressable } from "react-native";
import { style } from "../styles/sacsStyle";

const prix = 100;

// Composant pour afficher un produit.
const Sacs = ({item, onAddToCart, onShowDetail, quantite}) => (
    
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
            <Pressable onPress={onAddToCart} style={style.bouton}> 
                <Text style={{color: '#fff', fontSize: 18}}>Ajouter</Text>
            </Pressable>

            <Pressable onPress={onShowDetail} style={style.bouton}> 
                <Text style={{color: '#fff', fontSize: 18}}>Details</Text>
            </Pressable>
              
        </View>
        <Text style={style.quantite }>{quantite}</Text>

    </View>
  </View>
);

export default Sacs