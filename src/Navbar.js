import "./Navbar.css";
import logo from "./FliqaIndia-Logo 1.svg";

// const opts = ['Home' , 'Service', 'Portfolio' , 'Community' , 'Blog' ] ;

function Navbar() {
  return (
    <div className="Navbar">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="Home">Home</div>
      <div className="Service">Service</div>
      <div className="Portfolio">Portfolio</div>
      <div className="Community">Community</div>
      <div className="Blog">Blog</div>
      <div className="SignUp-Button">
        <div className="button">Sign Up</div>
      </div>
      <div className="SignIn-Button">
        <div className="button">Sign In</div>
      </div>
    </div>
  );
}

export default Navbar;
