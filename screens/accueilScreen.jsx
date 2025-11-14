import { Text, View,Image, Pressable } from "react-native"
import { style } from "../styles/welcomeStyle"


const AccueilScreen = ({ navigate }) => {
    return (
        <View style={style.main}>
            <Image 
            source={require('../assets/logo.png')}
            style={style.logo}  />
            <View style={style.contain}>
                
                <Text style={style.text_1}>Salut !<Text style={style.text_2}>  Matheo</Text></Text>
            </View>
            <Image 
                source={require('../assets/accueil.jpg')}
                resizeMode="contain"
                style={style.bienvenue}
                />
            <View style={style.contain}>
                <Text style={style.text}> les incontournable d'Eliandre Shop</Text>
                <View style={{ flexDirection: "row", alignItems: "center",justifyContent: "space-between"}}>
                    <View style={{alignContent:'center'}}>
                        <Image 
                            source={require('../assets/sac_orange.png')}
                            resizeMode="contain"
                            style={style.produits}
                        />
                        <Text style={{ marginTop: 5, fontSize: 14, color: "#333",textAlign:'center' }}>
                            Sac orange
                        </Text>
                    </View>
                    <View style={{alignContent:'center'}}>
                        <Image 
                            source={require('../assets/sac_noire.png')}
                            resizeMode="contain"
                            style={style.produits}
                        />
                        <Text style={{ marginTop: 5, fontSize: 14, color: "#333", textAlign:'center' }}>
                            sac noire
                        </Text>
                    </View>
                    
                    
                    
                </View>
            </View>
            
        </View>)
}
export default AccueilScreen

