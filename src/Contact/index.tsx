import { useEffect, useState } from "react";
import "./contact.css";
import sr from "../assets/logo.png";
import { useParams } from "react-router-dom";

type info = {
  nam: string;
  email: string;
  num: string;
  ef: string;
  msg: string;
};

const Contact = () => {
  const { ef } = useParams();
  const [info, setInfo] = useState<info>({
    nam: "",
    email: "",
    num: "",
    ef: ef || "",
    msg: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const id = e.target.id;
    setInfo((p) => {
      const copy = { ...p };
      if (id === "nam") copy[id] = e.target.value;
      else if (id === "num") copy[id] = e.target.value;
      else if (id === "email") copy[id] = e.target.value;
      else if (id === "ef") copy[id] = e.target.value;
      else if (id === "msg") copy[id] = e.target.value;
      return copy;
    });
  };

  const sendDet = () => {
    console.log(info);
  };

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
          <h2>Mobile no. : 7003631507</h2>
        </div>
        <div className="con-con">
          <label htmlFor="nam">Your Name :</label>
          <input
            type="text"
            id="nam"
            placeholder="Name"
            value={info.nam}
            onChange={handleChange}
          />
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={info.email}
            onChange={handleChange}
          />
          <label htmlFor="num">Your Number :</label>
          <input
            type="number"
            id="num"
            placeholder="Number"
            value={info.num}
            onChange={handleChange}
          />
          <label htmlFor="ef">Enquiry For :</label>
          <input
            type="text"
            id="ef"
            placeholder="reason"
            value={info.ef}
            onChange={handleChange}
          />
          <label htmlFor="msg">Your Massege :</label>
          <textarea
            id="msg"
            placeholder="massege"
            value={info.msg}
            onChange={handleChange}
          />
          <div></div>
          <button style={{ maxWidth: 140 }} onClick={sendDet}>
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
