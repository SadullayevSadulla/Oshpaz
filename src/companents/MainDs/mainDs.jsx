import "./mainDs.css";

const MainDs = () => {
  return (
    <section className="mainDs">
      <div className="mainDs_left">
        <h1>Stay Updated</h1>
        <p>
          Subscribe to our newsletter and never miss our latest news, updates, and special offers.
        </p>
      </div>

      <div className="mainDs_right">
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe</button>
      </div>
    </section>
  );
};

export default MainDs;
