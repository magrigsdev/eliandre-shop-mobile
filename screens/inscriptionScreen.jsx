
import { View, Text, Image,Pressable, TextInput, ScrollView } from "react-native"
import { style } from "../styles/inscriptionStyle"
import { useState } from "react"

const InscriptionScreen = () => {

    // HOOKS INITIATION 
        const [formData, setFormData] = useState(
            {
                email:'',
                nom:'',
                prenom:'',
                telephone:'',
                mtp:'',
                cmtp:''
            })
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

        if(!formData.nom.trim()){
            newError.nom = 'le nom est requis.';
        }else if(formData.nom.length < 14){
            newError.nom = 'le nom est trop long';
        }
        // validation prenom
        if(!formData.prenom.trim()){
            newError.prenom = 'le prenom est requis.';
        }else if(formData.prenom.length < 14){
            newError.prenom = 'le prénom est trop long';
        }
        // Validation du téléphone
        const telRegex = /^[0-9]{10}$/;
        if (!formData.telephone.trim()) {
        newError.telephone = 'Le téléphone est requis';
        } else if (!telRegex.test(formData.telephone.replace(/\s/g, ''))) {
        newError.telephone = 'Téléphone invalide (10 chiffres)';
        }
        // Validation de la confirmation
        if (formData.mtp !== formData.cmtp) {
        newError.cmtp = 'Les mots de passe ne correspondent pas';
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
    return (<> 
                
                <View style={style.main}>
                                <ScrollView 
                                vertical={true}
                                showsVerticalScrollIndicator={false}
                                >
                                <View style={style.row}>
                                    {/* button back  */}
                                    <Pressable
                                        style={{paddingTop:30}}
                                        onPress={()=>navigate.navigate('Inscription')}>
                                        <Image 
                                        source={require('../assets/back-button.png')}
                                        style={style.backButton}  />
                                    </Pressable>

                                    <Text style={style.titleInsc}>Inscription </Text>
                                    
                                </View>
                                
                                    <View style={style.contain}>
                                        <Text style={style.subTitle}>Créez votre profil pour découvrir nos perruques, conseils beauté et nouveautés tendance.</Text>
                                    </View>

                                    <View style={style.contain}>
                                        <Text style={style.label_nom}>Nom *</Text>
                                        
                                        <TextInput
                                            style={style.input}
                                            placeholder="Banzouzi"
                                            autoCapitalize="words"
                                            autoCorrect={false}
                                            keyboardType="default"
                                            value={formData.nom}
                                            onChangeText = {(value)=> handleOnChange('nom',value)}
                                        />
                                        {errors.nom && <Text style={style.text_erreur}> {errors.nom}</Text>}
                                    </View>
                                    <View style={style.contain}>
                                        <Text style={style.label_prenom}>Prénom *</Text>
                                        <TextInput
                                            style={style.input}
                                            placeholder="Andréa"
                                            autoCapitalize="words"
                                            autoCorrect={false}
                                            keyboardType="default"
                                            value={formData.prenom}
                                            onChangeText = {(value)=> handleOnChange('prenom',value)}
                                        />
                                        {errors.prenom && <Text style={style.text_erreur}> {errors.prenom}</Text>}
                                    </View>
                                    <View style={style.contain}>
                                        <Text style={style.label_email}>Email *</Text>
                                        <TextInput
                                            style={style.input}
                                            placeholder="andréa@gmail.com"
                                            autoCapitalize="words"
                                            autoCorrect={false}
                                            keyboardType="default"
                                            value={formData.email}
                                            onChangeText = {(value)=> handleOnChange('email',value)}
                                        />
                                        {errors.email && <Text style={style.text_erreur}> {errors.email}</Text>}
                                        </View>
                                    <View style={style.contain}>
                                        <Text style={style.label_telephone}>Téléphone *</Text>
                                        <TextInput
                                            style={style.input}
                                            placeholder="078765476"
                                            autoCapitalize="words"
                                            autoCorrect={false}
                                            keyboardType="numeric"
                                            value={formData.telephone}
                                            onChangeText = {(value)=> handleOnChange('telephone',value)}
                                        />
                                        {errors.telephone && <Text style={style.text_erreur}> {errors.telephone}</Text>}
                                    </View>
                
                                    <View style={style.contain}>
                                        <Text style={style.label_mtp}>Mot de passe *</Text>
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
                                        <Text style={style.label_cmtp}>Confirmation de mot de passe *</Text>
                                        <TextInput
                                            style={style.input}
                                            placeholder="••••••••"
                                            secureTextEntry
                                            autoCapitalize="none"
                                            value={formData.cmtp}
                                            onChangeText = {(value)=> handleOnChange('cmtp',value)}
                                        />
                                        {errors.cmtp && <Text style={style.text_erreur}> {errors.cmtp}</Text>}
                                    </View>
                
                                    <View style={style.contain}>
                                        <Pressable 
                                            // onPress={()=>navigate.pop('Accueil')}
                                            onPress={handleOnSubmit}
                                            style={style.button}
                                        >
                                            <Text style={style.buttonText}>Enregistrez</Text>
                                        </Pressable>
                                    </View>
                                 
                                    <View style={style.contain}>
                                        <Text style={style.text_end}>Vous avez déjà un compte ?
                                        <Pressable
                                        style={{paddingTop:10}}
                                        onPress={()=>navigate.navigate('Inscription')}><Text style={style.text_end_colored}> Se connecter </Text>
                                        </Pressable> 
                                        </Text>
                                    </View>
                                </ScrollView>
                            </View>
            </>)
}
export default InscriptionScreen