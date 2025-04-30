import sr from "./assets/logo.png";
import wp from "./assets/wp.svg";
import gm from "./assets/gm.svg";
import { dat } from "./Services/data";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#242424",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <img src={sr} alt="" style={{ width: 200 }} />
        <p>533, D.H. ROAD, Poraaswathtatala</p>
        <div style={{ display: "flex", gap: 10 }}>
          <img src={wp} style={{ height: 30, width: 30 }} />
          <p>: 7003631507</p>
        </div>
      </div>
      <div className="foot-links">
        {dat.map((el, i) => (
          <p
            key={i}
            onClick={() => {
              navigate("/contact/" + el.title);
            }}
          >
            {el.title}
          </p>
        ))}
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        <img src={wp} style={{ height: 35, width: 35 }} />
        <img src={gm} style={{ height: 35, width: 35 }} />
      </div>
    </div>
  );
};

export default Footer;
