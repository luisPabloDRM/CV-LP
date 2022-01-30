import { NavLink } from 'react-router-dom';
import "./NavBar.scss";

const Navbar = () => {

    return (
        <div className="navbar">

             <NavLink to="/">
               <button>About</button>
            </NavLink>


            <NavLink to="/education">
                <button>Education</button>
            </NavLink>

            <NavLink to="/experience">
                <button>Experience</button>
            </NavLink>


            <NavLink to="/more">
                <button>More</button>
            </NavLink>
        </div>
    )
}

export default Navbar;
