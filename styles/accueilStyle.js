


import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
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