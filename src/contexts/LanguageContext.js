import { createContext } from "react";
import { IntlProvider } from "react-intl";
import spanish from '../lang/es.json'
import english from '../lang/en.json'
import React, {useState} from "react";
export const LanguageContext = createContext();


const navigatorLocale = "en"
//const navigatorLocale = navigator.languages[1];


const getMessages = (locale)=> {
    if(locale === 'es') return spanish;
    if(locale === 'en') return english;

    return spanish;
};

//wrapper para envolver a toda la app

const LanguageWrapper = (props)=> {
    const [locale, setLocale] = useState(navigatorLocale) ;
    const [messages, setMessages] = useState(getMessages(navigatorLocale));

    const changeLanguage = (newLanguageLocale)=> {
            setLocale(newLanguageLocale);
            setMessages(getMessages(newLanguageLocale))
    };

    return ( 
        <LanguageContext.Provider value={{ locale, changeLanguage}}>
            <IntlProvider locale={locale} messages= {messages}>
                {props.children}
            </IntlProvider>
        </LanguageContext.Provider>
    )
}
export default LanguageWrapper;