import { Text, View,Image, Pressable } from "react-native"


const WelcomeScreen = () => {
    return (
        <View>

            <Image source={require('../assets/logo.png')}  />
            <View >
                <Text>Bienvenue sur Eliandre shop</Text>
                <Text>Découvrez Eliandre Shop, votre boutique en ligne dédiée à l’élégance et à la beauté.</Text>
            </View>
            <Image 
                source={require('../assets/bienvenue.jpg')}
                resizeMode="contain"
                />
            <Pressable 
                    onPress={()=>navigation.navigate('Connexion')}
                >
                    <Text>Commencez</Text>
            </Pressable>
        </View>)
}
export default WelcomeScreen

