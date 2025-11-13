
import { useState } from "react"
import { View, StyleSheet, Text, Image,Pressable, TextInput, ScrollView } from "react-native"


const ConnexionScreen = ({ navigate }) => {

    // HOOKS INITIATION 
    const [formData, setFormData] = useState({email:'', mtp:''})
    const [errors, setErrors] = useState({})


    
    // function to valid email and return boolean : true or false
    const emailValidate = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(String(email).toLowerCase());
    }

    //****** FUNCTION FOR HANDLEONCHANGE */
    const  handleOnChange = (field, value) => {
        setFormData(prev => ({...prev, [field]: value}))
        // clean the error field
        if(errors[field]) {
            setErrors(prev=>({...prev,[field]: ''}))
        } 
    }

    const Validation = () => {
        //VARIABLES INIT
        const newError = {}

        //vérifie le champs email vide 
        if(!formData.email.trim()){
            newError.email = "L'email est requis."
        }//Validation de l'email 
        else if(!emailValidate(formData.email)){
            newError.email = "L'email est inalide"
        }

        // //vérifie le champs mot de passe vide
         if (!formData.mtp.trim()) {
            newError.mtp = 'Le mot de passe est requis.';
            } 
        else if (formData.mtp.length < 8 ) {
            // newError.mtp = 'The password must contain 8 caracters minum';
            newError.mtp = 'le mot de passe doit contenir au Minimum 8 caractères.';
        } 
        else if(formData.mtp.length > 25){
            // newError.mtp = 'The password must contain 25 caracters maximum';
            newError.mtp = 'le mot de passe doit contenir au maximun Minimum 25 characters.';
        }
        //Vérifie la présence d'une majuscule
        else if(!/[A-Z]/.test(formData.mtp)){
            // newError.mtp = 'The password must contain one capitalize letter';
            newError.mtp = 'le mot de passe doit contenir au moins une lettre majuscule.';
        }
        // Vérifie la présence d'un chiffre
        else if(!/[0-9]/.test(formData.mtp)){
            // newError.mtp = 'The password must contain one number';
            newError.mtp = 'le mot de passe doit contenir au moins un nombre.';
        }
        // Vérifie la présence d’un caractère spécial
        else if(!/[!@#$%^&*(),.?":{}|<>]/.test(formData.mtp)){
            // newError.mtp = 'The password must contain one capitalize letter';
            newError.mtp = 'le mot de passe doit contenir au moins  un caractère spécial.';
        }
        
        setErrors(newError)

        return Object.keys(newError).length === 0
    }

    //*********** HANDLE ON SUBMIT */
    const handleOnSubmit = () => {
        if(Validation()){ 
            console.log("login success")
            console.log(emailValidate(formData.email))
            console.log(emailValidate(formData.mtp))
            console.log(errors)
        } 
        else {
            console.log("failed")
            console.log(emailValidate(formData.email))
            console.log(emailValidate(formData.mtp))
            console.log(errors.length)
            console.log(errors)
        }
        setFormData({email:'', mtp:''})
          
   }

    return ( 
            <View style={style.main}>
                <ScrollView 
                vertical={true}
                showsVerticalScrollIndicator={false}
                >
                    <View style={style.main}>
                        <Image 
                        source={require('../assets/logo.png')}
                        style={style.logo}  />
                    </View>
                
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
                            keyboardType="default"
                            value={formData.email}
                            onChangeText = {(value)=> handleOnChange('email',value)}
                        />
                        {errors.email && <Text style={style.text_erreur}> {errors.email}</Text>}
                    </View>

                    <View style={style.contain}>
                        <Text style={style.label_mot_de_passe}>Mot de passe *</Text>
                        <TextInput
                            style={style.input}
                            placeholder="••••••••"
                            secureTextEntry
                            autoCapitalize="none"
                            value={formData.mtp}
                            onChangeText = {(value)=> handleOnChange('mtp',value)}
                        />
                        {errors.mtp && <Text style={style.text_erreur}> {errors.mtp}</Text>}
                    </View>

                    <View style={style.contain}>
                        <Pressable 
                            // onPress={()=>navigate.pop('Accueil')}
                            onPress={handleOnSubmit}
                            style={style.button}
                        >
                            <Text style={style.buttonText}>Connecter</Text>
                        </Pressable>
                    </View>
                 
                    <View style={style.contain}>
                        <Text style={style.text_end}>Pas de compte ?
                        <Pressable
                        style={{paddingTop:10}}
                        onPress={()=>navigate.navigate('Inscription')}><Text style={style.text_end_colored}> S'inscrire </Text>
                        </Pressable> 
                        </Text>
                    </View>
                </ScrollView>
            </View>
            
            )
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
        textAlign:'center',
        paddingLeft: 10,
        paddingRight:10
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