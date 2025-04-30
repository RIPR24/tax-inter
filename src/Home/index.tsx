import sr from "../assets/logo.png";
import Hero from "../Hero";
import Fadeup from "../Reusable/Fadeup";
import Headings from "../Reusable/Headings";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="con">
      <Hero />
      <div className="con-home">
        <Fadeup>
          <div className="contact-con">
            <div className="con-ab">
              <img src={sr} alt="" style={{ width: "80%" }} />
              <h3>533, D.H. ROAD, Poraaswathtatala</h3>
            </div>
            <div className="intro card">
              <h3>
                Unlock Financial Confidence with Expert Tax Consulting
                Navigating the complexities of taxation shouldn't be a burden—it
                should be a strategic advantage.
              </h3>
              <p>
                At Tax India, we empower individuals and businesses with
                tailored tax solutions that maximize savings, ensure compliance,
                and drive financial growth. With deep industry expertise and a
                proactive approach, we turn tax challenges into opportunities,
                helping you stay ahead in a constantly evolving financial
                landscape.
              </p>
            </div>
          </div>
        </Fadeup>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "10px 20px",
          }}
          className="contact-con"
        >
          <Fadeup del={1}>
            <div className="card cd">
              <h2>20 +</h2>
              <p>Years of service</p>
            </div>
          </Fadeup>
          <Fadeup del={2}>
            <div className="card cd">
              <h2>2000 +</h2>
              <p>Number of clients</p>
            </div>
          </Fadeup>
          <Fadeup del={3}>
            <div className="card cd">
              <h2>98 %</h2>
              <p>Success rate</p>
            </div>
          </Fadeup>
        </div>
        <Headings str="REVIEWS" />
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
