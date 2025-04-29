import sr from "./assets/logo.png";
import wp from "./assets/wp.svg";
import gm from "./assets/gm.svg";

const Footer = () => {
  return (
    <div
      style={{
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#242424",
        fontSize: "1.4rem",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={sr} alt="" style={{ width: "25vw" }} />
        <h3>533, D.H. ROAD, Poraaswathtatala</h3>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p>CONTACT: 7003631507</p>
        <p>CONTACT: 9876543210</p>
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        <img src={wp} style={{ height: 35, width: 35 }} />
        <img src={gm} style={{ height: 35, width: 35 }} />
      </div>
    </div>
  );
};

export default Footer;
