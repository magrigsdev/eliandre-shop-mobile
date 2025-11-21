import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native"
import { style } from "../styles/signupStyle"
import { useState } from "react"
import { VerifUser } from "../database/tasks"
import { CustomerContext, User, UserConext } from "./welcomeScreen"

const SingupScreen = ({navigation}) => {
    // HOOKS INITIATION 
    const [formData, setFormData] = useState({email:'', mtp:''})
    const [errors, setErrors] = useState({})
    const [user, setUser] = useState("Andréa")
    


    
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
            newError.email = "L'email est invalide"
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
        //     const handleOnSubmit = () => {

        //         if(Validation()){ 
        //             if(VerifUser(formData.nom, formData.email) !== null)
        //             {
        //                 navigation.replace('tabs')
        //             }
        //             console.log("login success")
        //         } 
        //         else {
        //             console.log("failed")
        //         }
        //         setFormData({email:'', mtp:''})
                
        //    }
    //********* temporaire */
    
    // formData.nom  && setUser(formData.nom)
    //fonction temporaire
    
    //
   

    const handleOnSubmit = () => {
            navigation.replace('tabs')    
    }
    

        return ( 
            
        <View style={style.main}>
             <ScrollView  
                vertical={true}
                showsVerticalScrollIndicator={false}
                >
                    <View style={style.main}>
                        <Image 
                            source={{ uri:'https://cdn-icons-png.flaticon.com/512/3081/3081559.png'}}
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
                            placeholder="email"
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
                            secureTextEntry = {true}
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
                        onPress={()=>navigation.navigate('register')}
                        >
                        <Text style={style.text_end_colored}> S'inscrire </Text>
                        </Pressable> 
                        </Text>
                    </View>
                </ScrollView>
        </View>
            
    )
}
export default SingupScreen