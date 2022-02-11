import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { LanguageContext } from "../../contexts/LanguageContext";

const LanguageSelector = (props) => {
    
    const {locale, changeLanguage} = useContext(LanguageContext);

    return (
        <div>
            <p><FormattedMessage id="languageSelector.title" defaultMessage="Elige tu idioma" /></p>
            <select value={locale} onChange={(ev) => changeLanguage(ev.target.value)}>
                <option value="es">Spanish</option>
                <option value="en">English</option>
                
            </select>
        </div>
    )
};

export default LanguageSelector;

