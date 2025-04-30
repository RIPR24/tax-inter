import Fadeup from "../Reusable/Fadeup";
import Headings from "../Reusable/Headings";
import Imgslideshow from "./Imgslideshow";
import "./abt.css";

const About = () => {
  return (
    <div className="con">
      <Imgslideshow />
      <div className="about-con">
        <Headings str="ABOUT US" />
        <Fadeup del={1}>
          <p style={{ fontSize: "1.2rem" }}>
            Nestled in the heart of Pora Aswatthatala, Kolkata, Tax India stands
            as a prominent Tax Office, offering comprehensive and reliable
            taxation services. Its convenient location, situated on 533 Diamond
            Harbour Road and identifiable by the renowned Mitali Chakra Club's
            landmark, makes it easily accessible. With a team of experienced
            professionals, Tax India's commitment to precision, timeliness, and
            personalized guidance empowers businesses and individuals to
            navigate the complexities of taxation with confidence.
          </p>
        </Fadeup>
      </div>
    </div>
  );
};

export default About;
