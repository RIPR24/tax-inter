import hr from "./assets/imgs/hero.png";
import lg from "./assets/imgs/log.png";

const Hero = () => {
  return (
    <div className="hero">
      <img
        src={hr}
        style={{
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          height: 450,
          zIndex: -1,
        }}
      />
      <img src={lg} style={{ width: 250 }} />
      <p style={{ color: "aliceblue", fontSize: "2rem", padding: "0 20px" }}>
        Mobile no. : 7003631507
      </p>
    </div>
  );
};

export default Hero;
