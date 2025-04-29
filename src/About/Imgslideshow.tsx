import "react-slideshow-image/dist/styles.css";
import ab1 from "../assets/imgs/ab1.jpeg";
import ab2 from "../assets/imgs/ab2.jpeg";
import ab3 from "../assets/imgs/ab3.jpeg";
import { Fade } from "react-slideshow-image";

const Imgslideshow = () => {
  return (
    <div style={{ width: "100%", height: 600 }} className="slide-container">
      <Fade>
        <div>
          <img style={{ width: "100%", aspectRatio: "16/9" }} src={ab1} />
        </div>
        <div>
          <img style={{ width: "100%" }} src={ab2} />
        </div>
        <div>
          <img style={{ width: "100%" }} src={ab3} />
        </div>
      </Fade>
    </div>
  );
};

export default Imgslideshow;
