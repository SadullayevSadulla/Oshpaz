import "./header.css"
import { useState } from "react"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return <>
        <header>
            <div className="header_note container">
                <div className="header_left">
                    <a href="#">
                        <img src="/img/Logo.svg" alt="logo" />
                    </a>
                </div>
                <div className="header_right">
                    <button className="Button1">
                        <img src="/img/person.svg" alt="icon" />
                        <p>Log in</p>
                    </button>
                    <button className="Button2">
                        <img src="/img/cart.svg" alt="icon" />
                        <p>0</p>
                    </button>
                    <button className="Button3" onClick={toggleMenu}>
                        <img src="/img/ic-menu-navigation.svg" alt="icon" />
                    </button>
                    {isMenuOpen && (
                        <div className="burger-menu">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/restaurants">Restaurants</a></li>
                                <li><a href="/delivery">Delivery Info</a></li>
                                <li><a href="/specialities">Specialities</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    </>
}
export default Header;