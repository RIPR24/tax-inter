import sr from "../assets/logo.png";
import Fadeup from "../Reusable/Fadeup";
import { dat } from "./data";
import "./service.css";
import bill from "../assets/logo/bills.svg";
import cal from "../assets/logo/cal.svg";
import imp from "../assets/logo/import.svg";
import n1 from "../assets/logo/notes1.svg";
import n2 from "../assets/logo/notes2.svg";
import loan from "../assets/logo/loan.svg";
import web from "../assets/logo/web.svg";
import tm from "../assets/logo/tm.svg";
import tl from "../assets/logo/tl.svg";
import tp from "../assets/logo/tax-plan.svg";
import Hero from "../Hero";

const pics = [bill, imp, n2, n1, web, loan, tm, tl, cal, tp];

const Services = () => {
  return (
    <div className="con">
      <Hero />
      <img src={sr} alt="" style={{ width: "50%" }} />
      <div className="ser-con">
        {dat.map((el, i) => (
          <Fadeup del={i % 3}>
            <div key={i} className="card shrt">
              <img src={pics[i]} style={{ height: 60, width: 60 }} />
              <h2>{el.title}</h2>
              <p>{el.head}</p>
            </div>
          </Fadeup>
        ))}
      </div>
    </div>
  );
};

export default Services;
