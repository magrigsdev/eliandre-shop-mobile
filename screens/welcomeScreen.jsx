import { Text, View,Image, Pressable } from "react-native"
import { style } from "../styles/welcomeStyle"


const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={style.main}>
            <Image 
            source={require('../assets/logo.png')}
            style={style.logo}  />
            <View style={style.contain}>
                <Text style={style.title}>Bienvenue sur Eliandre shop</Text>
                <Text style={style.subTitle}>Découvrez Eliandre Shop, votre boutique en ligne dédiée à l’élégance et à la beauté.</Text>
            </View>
            <Image 
                source={require('../assets/bienvenue.jpg')}
                resizeMode="contain"
                style={style.bienvenue}
                />
            <Pressable 
                    onPress={()=>navigation.navigate('Connexion')}
                    style={style.button}
                >
                    <Text style={style.buttonText}>Commencez</Text>
            </Pressable>
        </View>)
}
export default WelcomeScreen

