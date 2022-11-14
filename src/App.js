import "./App.css";
import image from "./image 5.svg";
import vector1 from "./Group 152.svg";
import vector2 from "./Group 154.svg";
import vector3 from "./Group 153.svg";
import vector4 from "./Group 155.svg";
import card1 from "./Group 38.svg";
import card2 from "./Group 103.svg";
import card3 from "./Group 104.svg";
import card4 from "./Group 105.svg";
import card5 from "./Group 106.svg";

function App() {
  return (
    <div className="App">
      <img src={image} className="Photo" alt="Background_Image"></img>
      <div className="container">
        <div className="Heading">India's Leading Creative Platform</div>
        <div className="heading">
          Experience hassle free bookings. Trusted by 2500+ Customers
        </div>
        <div className="search-box">
          <div className="content">Search service, blog and many more…</div>
          <div className="inner-box">
            <div className="search-btn">Search</div>
          </div>

        </div>
        <div className='container2'>
          <div className='box'>
            <img src={vector1} className="vector1" alt="vector1"></img>
            <div className="box1">
              <div className="content1">
                Verified Reviews
              </div>
              <div className="content2">
                For verified reviewers
              </div>
            </div>

          </div>
          <div className='box'>
            <img src={vector2} className="vector2" alt="vector2"></img>
            <div className="box1">
              <div className="content1">
                Top Articles
              </div>
              <div className="content2">
                Helps you decide
              </div>
            </div>
          </div>
          <div className='box'>
            <img src={vector3} className="vector3" alt="vector3"></img>
            <div className="box1">
              <div className="content1">
                Write Share Win Contest
              </div>
              <div className="content2">
                Earn cash for reviews
              </div>
            </div>
          </div>
          <div className='box'>
            <img src={vector4} className="vector4" alt="vector4"></img>
            <div className="box1">
              <div className="content1">
                MouthShut for Brands
              </div>
              <div className="content2">
                Request a Demo
              </div>
            </div>
          </div>
        </div>
        <br></br>

        <div className="container3">
          <div className="inner-container">
            <div className="Heading2">
              Find Trusted Associate
            </div>
            <div className="Heading3">
              Find the best Fliqa Associate for your special day.
            </div>
            <div className="see-more">
              See More {'>'}{'>'}
            </div>
          </div>
          <div className="inner-container2">
            <img className="photo-card" src={card1} alt="card1">
            </img>
            <img className="photo-card" src={card2} alt="card2"></img>
            <img className="photo-card" src={card3} alt="card3"></img>
            <img className="photo-card" src={card4} alt="card4"></img>
            <img className="photo-card" src={card5} alt="card5"></img>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
