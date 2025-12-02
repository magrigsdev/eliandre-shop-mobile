import { createContext,  useCallback } from "react";

const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const addToCart = useCallback ((bag) => {
      setCart((prevCart) => {
        // search if the bag is already in the cart
      const index = prevCart.findIndex((p) => p.id === bag.id);

      if (index !== -1) 
        {
          // already in the cart → increase quantity **********
          const copy = [...prevCart]; // copy of the cart
          //
          const currentQuantity = copy[index].quantity || 1;
          // const currentQuantity = undefined || 1;

          copie[index] = {
            ...copy[index],
            quantity: currentQuantity + (bag.quantity || 1),
          };

          return copie;
        }
        // not in the cart → add it
        return [...prevPanier, { ...bag, quantity: bag.quantity || 1 }];

      })
  }, [])

  //return the context
  return (
    <CartContext.Provider value={{ cart,setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);