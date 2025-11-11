import "./headerMain.css"

const HeaderMain = () => {
    return <>
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
                    <img src="/img/Photo.png" alt="img" />
                </div>
            </div>
        </section>
        <section>
            <div className="header_ds container">
                <div className="header_ds1">
                    <img src="/img/Page 1.svg" alt="img" />
                    <h1>delivery in all paris in less than 30 minutes</h1>
                </div>
                <div className="header_ds1">
                    <img src="/img/delivery.svg" alt="img" />
                    <h1>Free delivery from 29 euros</h1>
                </div>
                <div className="header_ds1">
                    <img src="/img/paris.svg" alt="img" />
                    <h1>Only fresh and French products</h1>
                </div>
            </div>
        </section>
    </>
}
export default HeaderMain;