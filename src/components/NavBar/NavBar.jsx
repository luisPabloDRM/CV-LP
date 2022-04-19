import { NavLink } from 'react-router-dom';
import { FormattedMessage  as T} from 'react-intl';
import "./NavBar.scss";

const Navbar = () => {

    return (
        <div className="navbar">

             <NavLink to="/">
               <button><T id="Home" /></button>
            </NavLink> 




            <NavLink to="/education">
                <button><T id='Educ' /> </button>
            </NavLink>

            <NavLink to="/experience">
                <button> <T id='Exp' />  </button>
            </NavLink>


            <NavLink to="/more">
                <button> <T id='More' /> </button>
            </NavLink>

            <NavLink to="/portfolio">
                <button> <T id='porfoliobut' /> </button>
            </NavLink>
        </div>
    )
}

export default Navbar;
