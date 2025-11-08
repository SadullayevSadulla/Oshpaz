import "./mainMaps.css";
const MainMaps = () => {
    return (
        <section className="maps_section">
            <div className="maps_container container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.8163974376243!2d60.371882375878116!3d41.37807357130117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfa52a2495980b%3A0x20d0a3bfc21b981d!2sSofra%20Restaurant!5e0!3m2!1suz!2s!4v1762428878121!5m2!1suz!2s" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sofra Restaurant Location"
                />
            </div>
        </section>
    )
}
export default MainMaps;