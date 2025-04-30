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
import { useNavigate } from "react-router-dom";
import Headings from "../Reusable/Headings";

const pics = [bill, imp, n2, n1, web, loan, tm, tl, cal, tp];

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="con">
      <Hero />
      <Headings str="Services" />
      <div className="ser-con">
        {dat.map((el, i) => (
          <Fadeup key={i} del={i % 3}>
            <div className="card shrt">
              <img src={pics[i]} style={{ height: 60, width: 60 }} />
              <h2>{el.title}</h2>
              <p>{el.head}</p>
              <h3
                onClick={() => {
                  navigate("/contact/" + el.title);
                }}
                className="exp"
              >
                EXPLORE
              </h3>
            </div>
          </Fadeup>
        ))}
      </div>
    </div>
  );
};

export default Services;
