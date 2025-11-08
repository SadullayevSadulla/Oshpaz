import "./headerDs.css";
const HeaderDs = () => {
    return<> 
      <section>
        <div className="header_ds container">
            <div className="header_ds1">
                <img src="./public/Page 1.svg" alt="img" />
                <h1>delivery in all paris in less than 30 minutes</h1>
            </div>
            <div className="header_ds1">
                <img src="./public/delivery.svg" alt="img" />
                <h1>Free delivery from 29 euros</h1>
            </div>
            <div className="header_ds1">
                <img src="./public/paris.svg" alt="img" />
                <h1>Only fresh and French products</h1>
            </div>
        </div>
      </section>
    </>;
}
export default HeaderDs;