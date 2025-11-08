import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <div className="header_left">
                            <img src="/public/Logo3.svg" alt="logo" />
                        </div>
                        <div className="app-stores">
                            <a href="#" className="store-button">
                                <img src="/public/app-img1-1.svg" alt="App Store" />
                            </a>
                            <a href="#" className="store-button">
                                <img src="/public/app-img2-12.svg" alt="Google Play" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>About us</h3>
                        <ul>
                            <li><a href="#">Concept</a></li>
                            <li><a href="#">Franchise</a></li>
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Restaurant signup</a></li>
                            <li><a href="#">For Investors</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Get help</h3>
                        <ul>
                            <li><a href="#">Read FAQs</a></li>
                            <li><a href="#">Restaurants</a></li>
                            <li><a href="#">Specialities</a></li>
                            <li><a href="#">Sign up to deliver</a></li>
                            <li><a href="#">English</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Contact us</h3>
                        <ul>
                            <li>Yellow kitchen Paris 11</li>
                            <li>69 avenue de la Republique 75011 Paris</li>
                            <li>0800 111 126</li>
                            <li>contact@yellowkitchens.com</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="social-links">
                        <a href="#" className="social-link">
                            <img src="/public/instagram.svg" alt="Instagram" />
                        </a>
                        <a href="#" className="social-link">
                            <img src="/public/twitter.svg" alt="Twitter" />
                        </a>
                        <a href="#" className="social-link">
                            <img src="/public/facebook.svg" alt="Facebook" />
                        </a>
                    </div>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms</a>
                        <span>© 2020 Yellow Kitchen</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;