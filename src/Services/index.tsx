import sr from "../assets/logo.png";
import { dat } from "./data";
import "./service.css";

const Services = () => {
  return (
    <div className="con">
      <img src={sr} alt="" style={{ width: "50%" }} />
      <div className="ser-con">
        {dat.map((el, i) => (
          <div key={i} className="card">
            <h2>{el.title}</h2>
            <p>{el.details || ""}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
