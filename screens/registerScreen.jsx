import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { style } from '../styles/registerStyle'
import { useState } from 'react'

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

        //****** FUNCTION FOR HANDLEONCHANGE */
        const  handleOnChange = (field, value) => {
            setFormData(prev => ({...prev, [field]: value}))
            // clean the error field
            if(errors[field]) {
                setErrors(prev=>({...prev,[field]: ''}))
            } 
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