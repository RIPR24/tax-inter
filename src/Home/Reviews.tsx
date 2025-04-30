import Fadeup from "../Reusable/Fadeup";
import pr from "../assets/logo/profile.svg";
import st from "../assets/logo/star.svg";

const reviews = [
  {
    name: "Alice Johnson",
    rating: 5,
    msg: "Absolutely loved it! Great quality and fast delivery.",
  },
  {
    name: "Marcus Lee",
    rating: 4,
    msg: "Very satisfied overall, just wish the packaging was better.",
  },
  {
    name: "Priya Desai",
    rating: 3,
    msg: "It's okay for the price, but not exceptional.",
  },
  {
    name: "Sofia Martinez",
    rating: 5,
    msg: "Fantastic experience! Will definitely buy again.",
  },
];

const Reviews = () => {
  return (
    <div style={{ width: "80%", maxWidth: 1000, position: "relative" }}>
      {reviews.map((el, i) => {
        return (
          <Fadeup del={i} key={i}>
            <div
              className="card"
              style={{
                width: 400,
                height: 200,
                position: "absolute",
                top: i * 280,
                left: Math.ceil(500 * Math.random()),
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <img src={pr} style={{ height: 40, width: 40 }} />
                <div>
                  <p style={{ fontWeight: 500 }}>{el.name}</p>
                  <div>
                    {[1, 2, 3, 4, 5].map((e) =>
                      e <= el.rating ? (
                        <img src={st} style={{ height: 10, width: 10 }} />
                      ) : (
                        <></>
                      )
                    )}
                  </div>
                </div>
              </div>
              <p style={{ textAlign: "justify", margin: 10 }}>{el.msg}</p>
            </div>
          </Fadeup>
        );
      })}
    </div>
  );
};

export default Reviews;
