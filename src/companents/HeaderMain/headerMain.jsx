import "./headerMain.css"

const HeaderMain = () =>{
    return<>
    <section>
        <div className="header_main container">
            <div className="header_main_left">
                <div className="header_main_h1">
                    <h1>Your Food court at home</h1>
                </div>
                <div className="header_main_left_button">
                    <button className="Button4">
                        <h1>Delivery</h1>
                        <p>Order in</p>
                    </button>
                    <button className="Button5">
                        <h1>Takeout</h1>
                        <p>Grab and go</p>
                    </button>
                </div>
            </div>
                <div className="header_main_right">
                    <img src="/public/Photo.png" alt="img" />
                </div>
        </div>
    </section>
    </>
}
export default HeaderMain;