import hr from "./assets/imgs/hero.png";

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
          height: 400,
          zIndex: -1,
        }}
      />
      <h2 style={{ color: "aliceblue", fontSize: "3rem", padding: "0 20px" }}>
        TAX INDIA
      </h2>
      <h3 style={{ color: "aliceblue", fontSize: "2rem", padding: "0 20px" }}>
        Mobile no. : 7003631507
      </h3>
    </div>
  );
};

export default Hero;
