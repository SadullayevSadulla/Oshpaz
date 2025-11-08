import "./header.css"
const Header = () =>{
    return<>
     <header>
        <div className="header_note container">
                <div className="header_left">
                <img src="./public/Logo.svg" alt="logo" />
            </div>
            <div className="header_right">
                <button className="Button1">
                    <img src="./public/person.svg" alt="icon" />
                    <p>Log in</p>
                </button>
                <button className="Button2">
                    <img src="./public/cart.svg" alt="icon" />
                    <p>0</p>
                </button>
                <button className="Button3">
                    <img src="./public/ic-menu-navigation.svg" alt="icon" />
                </button>
            </div>
        </div>
     </header>
    </>
}
export default Header;