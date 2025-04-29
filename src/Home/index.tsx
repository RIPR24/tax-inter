import sr from "../assets/logo.png";

const Home = () => {
  return (
    <div className="con">
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="con-ab">
          <img src={sr} alt="" style={{ width: "80%" }} />
          <h3>533, D.H. ROAD, Poraaswathtatala</h3>
        </div>
        <div className="intro card">
          <h3>
            Unlock Financial Confidence with Expert Tax Consulting Navigating
            the complexities of taxation shouldn't be a burden—it should be a
            strategic advantage.
          </h3>
          <p>
            At Tax India, we empower individuals and businesses with tailored
            tax solutions that maximize savings, ensure compliance, and drive
            financial growth. With deep industry expertise and a proactive
            approach, we turn tax challenges into opportunities, helping you
            stay ahead in a constantly evolving financial landscape.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="card cd">
          <h2>20 +</h2>
          <p>Years of service</p>
        </div>
        <div className="card cd">
          <h2>2000 +</h2>
          <p>Number of clients</p>
        </div>
        <div className="card cd">
          <h2>98 %</h2>
          <p>Success rate</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
