import react from "react";
import "./Home.css";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <>
      <div className="right">
        
      </div>

      <div className="RightText">
          <h3>Hello , It's me </h3>
          <h1>
              MADHUSUDAN
          </h1>
          <h4>
            BTech graduate in Electronics. User-centric web designing for
            efficient programs. Moderate understanding of JavaScript, CSS and
            HTML
          </h4>
          <span className="btn"><Link to="/contact">Hire Me</Link></span>
        </div>
    </>
  );
};

export default Home;
