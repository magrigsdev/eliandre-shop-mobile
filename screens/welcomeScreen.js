import { Text, View,Image, Pressable, StyleSheet } from "react-native"


const WelcomeScreen = ({ navigate }) => {
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
                    onPress={()=>navigate.navigate('Connexion')}
                    
                    style={style.button}
                >
                    <Text style={style.buttonText}>Commencez</Text>
            </Pressable>
        </View>)
}
export default WelcomeScreen


const style = StyleSheet.create({
    main:{
        flex:1,
        justifyContent: 'center',    // centre le texte dans la box
        alignItems: 'center',
        fontFamily:'roboto',
        backgroundColor:'white',
        padding:30,
    },
    logo:{
        width:158,
        height:139,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:20
    },
    subTitle:{
        fontSize:14, 
        // paddingLeft:50,
        // paddingRight:50,
        marginBottom: 30,
    },
    contain:{
        justifyContent: 'center',    // centre le texte dans la box
        alignItems: 'center', 
        padding:0, 
    },
    bienvenue:{
        width:'100%',
        height:239,

    },
    button:{
        marginTop: 20,
        backgroundColor: 'teal',
        padding: 20,
        width: 280,
        borderRadius: 100,
        marginBottom: 10,
        alignItems: 'center', 
    },
    buttonText:{
         color: '#FFFFFF', // Couleur du texte
        fontSize: 18, // Taille de la police
    }


})
