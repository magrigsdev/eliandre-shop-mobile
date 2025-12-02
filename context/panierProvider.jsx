import { createContext,  useCallback, useContext, useMemo } from "react";

const PanierContext = createContext()

export const PanierProvider = ({children}) => {
    //list des objets
    const [panier, setPanier] = useState([])

    //ajoute le produit ou increment sa quantité
    const ajoutePanier = useCallback((item)=>{
      setPanier(prev => {
            const exist = prev.find(p => p._id === item._id);
            if (exist) {
                return prev.map(p =>
                    p._id === item._id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    },[])

    //calcule le total des articles
    const totalItems = useMemo(()=>panier.reduce((sum, p) => sum + (p.quantity || 0), 0), [cart])

    //total des produit dans le panier
    const totalPrice = useMemo(
      ()=> panier.reduce((sum, p) => 
        sum + (p.quantity || 0) * (p.prix ?? p.price ?? 0), 0)
      ,[cart])

    //obtenir la quantité courant
    const getQuantity = useCallback((items, panier)=>{
        return panier.find(p => p._id === items._id)?.quantity || 0;
    },[panier])

    //on utlise memo
    const value = useMemo(
      ()=>({panier, getQuantity, totalPrice, totalItems, ajoutePanier}),
      [panier, getQuantity, totalPrice, totalItems, ajoutePanier ]
    )
    //return the context
    return (
      <PanierContext.Provider value={value}>
        {children}
      </PanierContext.Provider>
    )
}

export const usePanier = () => 
  {
    const ctx = useContext(PanierContext)
    if(!ctx) throw new Error(" usePanier doit être utilisé à l'interieur de <PanierProvider>")
    return ctx;
  }