

export const  PanierProvider = ({ children }) => {
    //iit le tableau qui va recevoir le panier : id,libelle, prix et quantité
    const [panier, SetPanier] = useState([]);

    const addpanier = (produit) => {

        SetPanier((prev) => {
            const existing = prev.find(item => item.id === produit.id);
            //it true donc il existe
            if(existing){//return 
                return prev.map(
                    item => item.id === produit.id
                    ? { ...item, quantity: item.quantity + 1}
                    : item
                
                );
            }
            return [...prev, {...produit, quantity: 1}]

        });
    }

}