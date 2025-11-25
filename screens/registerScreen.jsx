import { Alert, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { style } from '../styles/registerStyle'
import { useEffect, useState } from 'react'
import { InitDB } from '../database/initdb'
import { InsertUser } from '../database/tasks'

const RegisterScreen = ({navigation}) => {
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

        //     // function to valid email and return boolean : true or false
        const emailValidate = (email) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(String(email).toLowerCase());
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

            //****************************** */    

        //****** FUNCTION FOR HANDLEONCHANGE */
        const  handleOnChange = (field, value) => {
            setFormData(prev => ({...prev, [field]: value}))
            // clean the error field
            if(errors[field]) {
                setErrors(prev=>({...prev,[field]: ''}))
            } 
        }
        
        //********** valider tous les champs */
        const validationChamps = () => {
            const erreurs = {}
            let validation = true // true donc les champs sont valides 

            validatePrenom() !=='' ? erreurs.prenom = validatePrenom():''
            validateNom() !=='' ? erreurs.nom = validateNom():''
            validateTelephone() !=='' ? erreurs.telephone = validateTelephone():''
            validateEmail() !=='' ? erreurs.email = validateEmail():''
            validateMotdepasse() !=='' ? erreurs.mtp = validateMotdepasse():''
            confirmMotdepasse() !=='' ? erreurs.cmtp = confirmMotdepasse():''

            setErrors(erreurs)

            if(erreurs) {
                if(Object.keys(erreurs).length  > 0){
                    validation = false 
                }
            }
            return validation
        }
        //****************** BASE DE DONNEES */
        useEffect(() => { 
            const setupDB = async () => {
                try {
                    await InitDB(); 
                } catch (error) {
                    console.error("Erreur lors de l'initialisation de la base :", error);
                }
            };
            setupDB();
        }, []);
        //*********** HANDLE ON SUBMIT */
        const handleOnSubmit = async () => {
            
            if(validationChamps()){
                  
                try {
                        
                     console.log ("je suis dans aprés ")
                        await InsertUser(
                                formData.nom, 
                                formData.prenom,
                                formData.email,
                                formData.mtp,
                                formData.telephone);
                                Alert.alert('Inscription réussie', `Bienvenue, ${formData.prenom} ${formData.nom} !`);

                        navigation.replace('tabs', {nom: formData.nom})
                        setFormData({email:'', mtp:'',nom:'',prenom:'',telephone:'',cmtp:''}) 
                    } 
                    catch (error) {
                        console.error('Erreur lors de l\'insertion :', error);
                        Alert.alert('Erreur', 'Impossible d\'insérer l\'utilisateur.');
                    
                    }
     
            }
            
            // validationChamps() && goHome() ;
            // validationChamps() && console.log("go home") ;
            
            setFormData({email:'', mtp:''})  
            console.log(errors)
            console.log(validationChamps())   
        }
        

     return (<> 
               
                <View style={style.main}>
                                <ScrollView 
                                vertical={true}
                                showsVerticalScrollIndicator={false}
                                >
                                <View style={style.main}>
                                    <Image source={{ uri:'https://cdn-icons-png.flaticon.com/512/3081/3081559.png'}}
                                        style={style.logo}  />
                                </View>
                                
                                <View style={style.row}>
                                    <Text style={style.titleInsc}>Inscription </Text>
                                </View>
                                    
                                    <View style={style.contain}>
                                        <Text style={style.subTitle}>Créez votre profil pour découvrir nos perruques, conseils beauté et nouveautés tendance.</Text>
                                    </View>

                                    {/* champs nom */}
                                    <View style={style.contain}>
                                        <Text style={style.label_nom}>Nom *</Text>
                                        
                                        <TextInput
                                            style={style.input}
                                            placeholder="nom"
                                            autoCapitalize="words"
                                            autoCorrect={false}
                                            keyboardType="default"
                                            value={formData.nom}
                                            onChangeText = {(value)=> handleOnChange('nom',value)}
                                        />
                                        {errors.nom && <Text style={style.text_erreur}> {errors.nom}</Text>}
                                    </View>
                                    {/* champs prénom */}
                                    <View style={style.contain}>
                                        <Text style={style.label_prenom}>Prénom *</Text>
                                        <TextInput
                                            style={style.input}
                                            placeholder="prenom"
                                            autoCapitalize="words"
                                            autoCorrect={false}
                                            keyboardType="default"
                                            value={formData.prenom}
                                            onChangeText = {(value)=> handleOnChange('prenom',value)}
                                        />
                                        {errors.prenom && <Text style={style.text_erreur}> {errors.prenom}</Text>}
                                    </View>

                                    {/* champs email */}
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

                                    {/* champs telephone */}
                                    <View style={style.contain}>
                                        <Text style={style.label_telephone}>Téléphone *</Text>
                                        <TextInput
                                            style={style.input}
                                            placeholder="telephone"
                                            autoCapitalize="words"
                                            keyboardType="phone-pad"
                                            maxLength={10}
                                            value={formData.telephone}
                                            onChangeText = {(value)=> handleOnChange('telephone',value)}
                                        />
                                        {errors.telephone && <Text style={style.text_erreur}> {errors.telephone}</Text>}
                                    </View>

                                    {/* champs mot de passe */}
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

                                    {/* champs confirme le mot de passe  */}
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
                                    
                                    {/* boutton enregister  */}
                                    <View style={style.contain}>
                                        <Pressable 
                                            // onPress={()=>navigate.replace('Accueil')}
                                            onPress={handleOnSubmit}
                                            style={style.button}
                                        >
                                            <Text style={style.buttonText}>Enregistrez</Text>
                                        </Pressable>
                                    </View>
                                 
                                    <View style={style.contain}>
                                        <Text style={style.text_end}>Déjà un compte ?
                                        <Pressable
                                        
                                        onPress={()=>navigation.navigate('signup')}
                                            ><Text style={style.text_end_colored}>  Se connecter </Text>
                                        </Pressable> 
                                        </Text>
                                    </View>
                                </ScrollView>
                </View>
            </>)
}
export default RegisterScreen