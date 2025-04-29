import { NavLink } from "react-router-dom";
import "./nav.css";
import sr from "../assets/logo.png";

const Nav = () => {
  return (
    <div className="navbar">
      <img src={sr} alt="" style={{ width: 80 }} />
      <div style={{ display: "flex", gap: 30 }}>
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/about"}>ABOUT</NavLink>
        <NavLink to={"/services"}>SERVICES</NavLink>
        <NavLink to={"/contact"}>CONTACT</NavLink>
      </div>
      <div style={{ width: 80 }}></div>
    </div>
  );
};

export default Nav;
