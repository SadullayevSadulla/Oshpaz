import "./header.css"
const Header = () =>{
    return<>
     <header>
        <div className="header_note container">
                <div className="header_left">
                <img src="/img/Logo.svg" alt="logo" />
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
                <button className="Button3">
                    <img src="/img/ic-menu-navigation.svg" alt="icon" />
                </button>
            </div>
        </div>
     </header>
    </>
}
export default Header;