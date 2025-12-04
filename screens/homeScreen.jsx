import { Text, View,Image, } from "react-native"
import { style } from './../styles/welcomeStyle';

const HomeScreen = ({userInfo}) => {

    
    return (
        <View style={style.main}>
        
            <Image 
            source={{ uri:'https://cdn-icons-png.flaticon.com/512/3081/3081559.png'}}
            style={style.logo}  />

            <View style={style.contain}>
                <Text style={style.text_2}>Salut {userInfo.Prenom} {userInfo.Nom} !</Text>
                <Text style={style.text_1}>Découvrez Eliandre Shop, votre boutique en ligne dédiée à l’élégance et à la beauté.</Text>
            </View>
            <Image 
                source={require('../assets/accueil.jpg')}
                resizeMode="contain"
                style={style.bienvenue}
                />
            
        </View>)
}
export default HomeScreen