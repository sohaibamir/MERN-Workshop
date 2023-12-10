import { useContext, useState, createContext } from "react";
import en from "../LanguageConfig/en";
import ur from "../LanguageConfig/ur";

// create context
export const LanguageContext = createContext()

// create provider for this context
export const LanguageProvide = ({ children }) => {
    const [language, setLanguage] = useState(en)

    const changeLanguage = (val) => {
        if ( val == 'en'){
            setLanguage(en)
        } else {
            setLanguage(ur)
        }
    }

    return(

        <LanguageContext.Provider value={{language, changeLanguage}} >
            {children}
        </LanguageContext.Provider>
    )
}

// create custom hook, through which we can access context inside app
export const useLanguage = () => {
    const context = useContext(LanguageContext)
    return context;
}