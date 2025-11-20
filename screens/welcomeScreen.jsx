import { Text, View,Image, Pressable } from "react-native"
import { style } from './../styles/welcomeStyle';
const WelcomeScreen = ({navigation}) => {
    return (
        <View style={style.main}>
        
            <Image 
            source={{ uri:'https://cdn-icons-png.flaticon.com/512/3081/3081559.png'}}
            style={style.logo}  />
            <View style={style.contain}>
                <Text style={style.text_2}>Bienvenue sur Eliandre shop</Text>
                <Text style={style.text_1}>Découvrez Eliandre Shop, votre boutique en ligne dédiée à l’élégance et à la beauté.</Text>
            </View>
            <Image 
                source={require('../assets/bienvenue.jpg')}
                resizeMode="contain"
                style={style.bienvenue}
                />
            <Pressable 
                    onPress={()=> navigation.replace('signup')}
                    style={style.button}
                >
                    <Text style={style.buttonText}>Commencez</Text>
            </Pressable>
        </View>)
}
export default WelcomeScreen