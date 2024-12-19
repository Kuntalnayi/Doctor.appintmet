import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext  = createContext();

const AppContextProvider = (props) =>{
 
    let  rupee = "$";
  const value = {
           rupee,doctors
    }
    return(
       <AppContext.Provider value={value}>
        {props.children}
       </AppContext.Provider>
    
    )
}
export default AppContextProvider