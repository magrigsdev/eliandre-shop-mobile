import { createContext, useContext, useState } from "react"


const UserContext =  createContext()

export const  UserProvider = ({children}) => {
    const [user, setUser] = useState([])

    //deconnection
    const deconnection = useCallback(()=>{setUser([])})

  return (
            <UserContext.Provider value={{user, deconnection}}>
                {children}
            </UserContext.Provider>
        )
}

//hook pour utilser le context
export const useUser = () => useContext(UserContext)
