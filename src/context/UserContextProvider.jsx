import { createContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";

export const UserContext = createContext()



const UserContextProvider =({children})=>{
    const [currentUser, setCurrentUser] = useState(false);

    useEffect(() => {
        userObserver(setCurrentUser);
      }, []);

      return (
        <UserContext.Provider value={{currentUser}}>
            {children}
        </UserContext.Provider>
      )
}

export default UserContextProvider
