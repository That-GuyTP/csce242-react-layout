import {Outlet, Link} from "react-router-dom";
import Header from "./components/Header";
import {useState} from "react";



const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); //! to flip some shit.

    }
    
    return (
        <>
            <Header />
            <button onClick={toggleMenu}>Toggle</button>
            <nav id="main-nav" className={menuOpen ? "" : "hide-small"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/pictures">Pictures</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </nav>            
            
            <Outlet />

            <p>This is my footer</p>
        </>
    );
};

export default Layout;