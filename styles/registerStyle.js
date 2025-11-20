import { StyleSheet} from "react-native"

export const style = StyleSheet.create({
    main:{
        flex:1,
        justifyContent: 'center',    // centre le texte dans la box
        alignItems: 'center',
        fontFamily:'roboto',
        backgroundColor:'white',
        padding:30,
    },

    backButton:{
        width:30,
        height:30,
    },
    row: {
        flexDirection: 'row',      // Aligne les éléments horizontalement
        alignItems: 'center',      // Centre verticalement les éléments
        justifyContent: 'space-between', // Espace entre eux (ou 'center' selon ton besoin)
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    titleInsc: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
        marginTop:20,
    },
    //**********  */
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:20
    },
    subTitle:{
        fontSize:14, 
        paddingLeft:20,
        marginBottom: 20,
        textAlign:'center',
        marginTop:20,
    },
    contain:{
        justifyContent: 'center',    // centre le texte dans la box
        alignItems: 'center', 
        padding:0,
        marginBottom:14, 
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

    //************ STYLE DES CHAMPS */

    label_nom: {
        fontSize: 14,
        fontWeight: '600',
        color:'#333',
        marginBottom: 8,
        marginEnd:200,
    },
    label_prenom:{
        fontSize: 14,
        fontWeight: '600',
        color:'#333',
        marginBottom: 8,
        marginEnd:180,
    },
    label_email:{
        fontSize: 14,
        fontWeight: '600',
        color:'#333',
        marginBottom: 8,
        marginEnd:200,
    },
    label_telephone:{
        fontSize: 14,
        fontWeight: '600',
        color:'#333',
        marginBottom: 8,
        marginEnd:170,
    },
    label_mtp:{
        fontSize: 14,
        fontWeight: '600',
        color:'#333',
        marginBottom: 8,
        marginEnd:150,
    },
    label_cmtp:{
        fontSize: 14,
        fontWeight: '600',
        color:'#333',
        marginBottom: 8,
        marginEnd:40,
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
        marginBottom:0,
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
        textAlign:'center',
        width:250,
        marginTop:0,
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