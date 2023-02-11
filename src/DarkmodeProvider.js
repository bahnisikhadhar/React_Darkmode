import {createContext, useState } from "react";

export const DarkModeContext = createContext();
export default function DarkmodeProvider({children}){
    // console.log(props) // though we didn't pass anything as prop from index.js, yet we bydefault got props, and it has a children(whatever is wrapped by DarkmodeContext in index.js, is its children, here it is App ) and we destructured it to get as parameter

    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
    
    return(
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
        </DarkModeContext.Provider>
    )
}