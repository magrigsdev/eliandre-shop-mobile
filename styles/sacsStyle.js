// Styles
import {  StyleSheet } from 'react-native';


export const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
 articleContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  info: {
    padding: 0,
    justifyContent: 'center',
    width: '90%',
  },
  nom: {
    fontSize: 18,
    fontWeight: '500',
  },
  quantite: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
  },
  prix: {
    fontSize: 16,
    color: '#888',
  },
  separator: {
    height: 12,
  },
  prixDown: {
    color: '#dc4646ff',
    fontSize: 16,
  },
  prixUp: {
    color: '#118333ff',
    fontSize: 16,
  },
  bouton: {
    backgroundColor: '#008080',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: 100,
    shadowColor: '#000',
    color: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    }},
      cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cartItem: {
    fontSize: 16,
    marginBottom: 4,
  },
  cartContainer: {
  marginTop: 20,
  padding: 16,
  backgroundColor: '#f9f9f9',
  borderTopWidth: 1,
  borderColor: '#ccc',
},
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cartItem: {
    fontSize: 16,
    marginBottom: 4,
  },
  header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 16,
  paddingTop: 16,
  paddingBottom: 8,
  backgroundColor: '#fff',
},
 
  cartBadge: {
    backgroundColor: '#eee',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  
  cartText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin:20
  },
 
  
});
