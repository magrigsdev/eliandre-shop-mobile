import { View, StyleSheet, Text, Image,Pressable, TextInput } from "react-native"


const ConnexionScreen = () => {


    return (<View style={style.main}>
                <Image 
                source={require('../assets/logo.png')}
                style={style.logo}  />
                <View style={style.contain}>
                    <View><Text style={style.title}>Bienvenue sur Eliandre shop</Text></View> 
                    <View><Text style={style.subTitle}>Découvrez Eliandre Shop, votre boutique en ligne dédiée à l’élégance et à la beauté.</Text></View>
                </View>
                <View style={style.contain}>
                    <Text style={style.label_email}>Email *</Text>
                    <TextInput
                        style={style.input}
                        placeholder="andrea@gmail.com"
                        autoCapitalize="words"
                        autoCorrect={false}
                    />
                    <Text style={style.text_erreur}> Email incorrect ou invalid</Text>
                </View>

                <View style={style.contain}>
                    <Text style={style.label_mot_de_passe}>Mot de passe *</Text>
                    <TextInput
                        style={style.input}
                        placeholder="••••••••"
                        secureTextEntry
                        autoCapitalize="none"
                    />
                    <Text style={style.text_erreur}> Mot de passe incorrect ou insuffiant</Text>
                </View>

                <View style={style.contain}>
                    <Pressable 
                        onPress={()=>navigation.navigate('Accueil')}
                        style={style.button}
                    >
                        <Text style={style.buttonText}>Connecter</Text>
                </Pressable>
                </View>
                


                <View style={style.contain}>
                    <Text style={style.text_end}>Pas de compte ?
                    <Pressable
                    style={{paddingTop:10}}
                     onPress={()=>navigation.navigate('Inscription')}><Text style={style.text_end_colored}> S'inscrire </Text>
                    </Pressable> 
                    </Text>
                </View>
                
            </View>)
}
export default ConnexionScreen

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
        paddingLeft:20,
        marginBottom: 30,
    },
    contain:{
        justifyContent: 'center',    // centre le texte dans la box
        alignItems: 'center', 
        padding:0, 
    },
    champ: {
        justifyContent: 'center',    // centre le texte dans la box
        alignItems: 'center', 
        padding:0, 
        marginBottom:10
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
    },

    //************ */
    label_email: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
        marginEnd:200
    },
    label_mot_de_passe: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
        marginEnd:150
  },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#333',
        width: 280,
        borderRadius: 100,
        marginBottom: 10,
  },
    text_erreur: {
        marginBottom:10,
        color:'red',
        fontWeight: '600',
    },
    text_end:{
        color: '#333',
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    text_end_colored:{
        color: '#333',
        fontSize: 14,
        fontWeight: '600',
        color: 'teal',
        marginTop: 10,
        marginBottom:-4
    }


})