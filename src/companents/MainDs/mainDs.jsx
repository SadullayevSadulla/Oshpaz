import "./mainDs.css"

const MainDs = () => {
    return <>
        <section>
            <div className="mainDs container">
                <div className="mainDs_left">
                    <h1>Your nearest restaurants</h1>
                    <p>Each kitchen works with its own delivery area to deliver food to you as soon as possible</p>
                </div>
                <div className="mainDs_right">
                    <input type="text" placeholder="📍 Enter delivery address" />
                    <button>send</button>
                </div>
            </div>
        </section>
    </>
}
export default MainDs;