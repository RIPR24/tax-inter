import sr from "./assets/logo.png";
import wp from "./assets/wp.svg";
import loc from "./assets/logo/loc.svg";
import gm from "./assets/gm.svg";
import { dat } from "./Services/data";
import { useNavigate } from "react-router-dom";
import ftr from "./assets/imgs/FTR.jpeg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
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
      <div>
        <img src={ftr} style={{ height: 100, borderRadius: 10 }} />
        <div style={{ display: "flex", gap: 20, marginTop: 10 }}>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Tax+India/@22.4694147,88.3108572,669m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a027b09a542eeb3:0x182b4e0d6a097dd5!8m2!3d22.4694147!4d88.3108572!16s%2Fg%2F11x6yqw4rr?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D"
          >
            <img src={loc} style={{ height: 35, width: 35 }} />
          </a>
          <img src={gm} style={{ height: 35, width: 35 }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
