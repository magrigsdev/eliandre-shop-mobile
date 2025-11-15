
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

    //**************  VALIDATION CHAMPS PAR CHAMPS */
    //VALIDATION NOM
    const validateNom = () => {
        let erreur = ""
        if(typeof formData.nom !== "undefined")
            formData.nom.trim() =='' ? erreur = "le nom est requis":''
        else erreur = "le nom est requis"
        return erreur
    }
    //VALIDATION PRENNOM
    const validatePrenom = () => {
        let erreur = ""
        if(typeof formData.prenom !== "undefined"){
           if(formData.prenom.trim() =='') 
                erreur = "le prénom est requis"
            
        }
            
        else erreur = "le prénom est requis"
        return erreur
    }
    //VALIDATION TELEPHONE
    const validateTelephone = () => {
        let erreur = ""
        if(formData.telephone){
            if (formData.telephone.length > 0 && formData.telephone.length < 10) {
                erreur = 'Téléphone doit contenir  10 chiffres';
            }
        } 
        else erreur = "le telephone est requis"
        return erreur
    }

    //VALIDATION EMAIL
    const validateEmail = () => {
        let erreur = ""
        if( typeof formData.email !== "undefined"){
            if(formData.email.trim() =='' ) erreur = "Email est requis"
            //Validation de l'email 
            else if(!emailValidate(formData.email))
                erreur = "L'email est invalide"
        }
        else erreur = "Email est requis"
        return erreur
    }
    //VALIDATION MOT DE PASSE
    const validateMotdepasse = () => {
        let erreur = ""
            if(formData.mtp && formData.mtp.trim() =='')
                {
                   erreur = "mot de passe est requis"
                }
            else if(!formData.mtp) 
                {
                    erreur = "mot de passe est requis"
                }   
            else if (formData.mtp.length > 0 && formData.mtp.length < 8 ) 
                {
                    erreur = 'le mot de passe doit contenir au Minimum 8 caractères.';
                } 
            else if( formData.mtp.length > 25)
                {
                    erreur = 'le mot de passe doit contenir au maximun Minimum 25 characters.';
                }
            // //Vérifie la présence d'une majuscule
            else if(!/[A-Z]/.test(formData.mtp))
                {
                    erreur = 'le mot de passe doit contenir au moins une lettre majuscule.';
                }
            //// Vérifie la présence d'un chiffre
            else if(!/[0-9]/.test(formData.mtp))
                {
                    erreur = 'le mot de passe doit contenir au moins un nombre.';
                }
            //         // Vérifie la présence d’un caractère spécial
            else if(!/[!@#$%^&*(),.?":{}|<>]/.test(formData.mtp))
                {
                    erreur = 'le mot de passe doit contenir au moins  un caractère spécial.';
                }
            
        return erreur;
    }
    //CONFIRMATION DU MOT DE PASSE 
    const confirmMotdepasse = () => {
        let erreur = ""
        
        if(formData.cmtp && formData.cmtp.trim() =='')
            {
                erreur = "la confirmation de mot de passe est requis"
            }
        else if(!formData.cmtp) 
            {
                erreur = "la confirmation de mot de passe est requis"
            } 
        else if(formData.mtp )
            {   
                if(formData.mtp !== formData.cmtp)
                    erreur = 'Les mots de passe ne correspondent pas';
            }        
        return erreur
    }


    const validationChamps = () => {
        const erreurs = {}
        validatePrenom() !=='' ? erreurs.prenom = validatePrenom():''
        validateNom() !=='' ? erreurs.nom = validateNom():''
        validateTelephone() !=='' ? erreurs.telephone = validateTelephone():''
        validateEmail() !=='' ? erreurs.email = validateEmail():''
        validateMotdepasse() !=='' ? erreurs.mtp = validateMotdepasse():''
        confirmMotdepasse() !=='' ? erreurs.cmtp = confirmMotdepasse():''

        setErrors(erreurs)   
    }
    

    //*********** HANDLE ON SUBMIT */
    const handleOnSubmit = () => {
        validationChamps()
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
                                            keyboardType="phone-pad"
                                            maxLength={10}
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
                                            secureTextEntry={true}
                                            autoCapitalize="none"
                                            value={formData.mtp}
                                            onChangeText = {(value)=> handleOnChange('mtp',value)}
                                        />
                                        {errors.mtp && <Text style={style.text_erreur}> {errors.mtp}</Text>}
                                    </View>
                                    <View style={style.contain}>
                                        <Text style={style.label_cmtp}>Confirmation de mot de passe *</Text>
                                        <TextInput
                                            required={true}
                                            style={style.input}
                                            placeholder="••••••••"
                                            secureTextEntry={true}
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
                                        <Text style={style.text_end}>Déjà un compte ?
                                        <Pressable
                                        
                                        // onPress={()=>navigate.navigate('Inscription')}
                                            ><Text style={style.text_end_colored}>  Se connecter </Text>
                                        </Pressable> 
                                        </Text>
                                    </View>
                                </ScrollView>
                </View>
            </>)
}
export default InscriptionScreen