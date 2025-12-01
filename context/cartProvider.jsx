// contexts/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Structure : { productId: { product: {...}, quantity: number } }
  const [cart, setCart] = useState({});

  // Ajouter au panier
  const ajoutePanier = (item) => {
    setCart(prevCart => {
      const productId = item.id;

      if (prevCart[productId]) {
        // Si le produit existe déjà, on augmente la quantité
        return {
          ...prevCart,
          [productId]: {
            ...prevCart[productId],
            quantity: prevCart[productId].quantity + 1
          }
        };
      } else {
        // Nouveau produit, quantité = 1
        return {
          ...prevCart,
          [productId]: {
            product: item,
            quantity: 1
          }
        };
      }
    });
  };

  // Augmenter la quantité
  const increaseQuantity = (productId) => {
    setCart(prevCart => ({
      ...prevCart,
      [productId]: {
        ...prevCart[productId],
        quantity: prevCart[productId].quantity + 1
      }
    }));
  };

  // Diminuer la quantité
  const decreaseQuantity = (productId) => {
    setCart(prevCart => {
      const currentQuantity = prevCart[productId].quantity;
      
      if (currentQuantity === 1) {
        // Si quantité = 1, on supprime du panier
        const { [productId]: removed, ...rest } = prevCart;
        return rest;
      }
      
      return {
        ...prevCart,
        [productId]: {
          ...prevCart[productId],
          quantity: currentQuantity - 1
        }
      };
    });
  };

  // Supprimer du panier
  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const { [productId]: removed, ...rest } = prevCart;
      return rest;
    });
  };

  // Obtenir le nombre total d'articles
  const getTotalItems = () => {
    return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
  };

  // Obtenir le prix total
  const getTotalPrice = () => {
    return Object.values(cart).reduce((total, item) => {
      return total + (item.product.prix * item.quantity);
    }, 0);
  };

  // Obtenir les articles du panier sous forme de tableau
  const getCartItems = () => {
    return Object.values(cart);
  };

  // Vider le panier
  const clearCart = () => {
    setCart({});
  };

  return (
    <CartContext.Provider value={{
      cart,
      ajoutePanier,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      getTotalItems,
      getTotalPrice,
      getCartItems,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personnalisé
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart doit être utilisé dans CartProvider');
  }
  return context;
};