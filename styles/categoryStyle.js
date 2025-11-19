

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  nomProduit: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  detailsProduit: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  description: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
  },
  stock: {
    fontSize: 12,
    color: '#888',
  },
  erreur: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  loader: {
    marginTop: 20,
  },
});