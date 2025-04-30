import { useEffect, useState } from "react";
import ab1 from "../assets/imgs/ab1.jpeg";
import ab2 from "../assets/imgs/ab2.jpeg";
import ab3 from "../assets/imgs/ab3.jpeg";
import { motion } from "framer-motion";

const arr = [ab1, ab2, ab3];

const Imgslideshow = () => {
  const [img, setImg] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setImg((p) => (p + 1) % 3);
    }, 4000);

    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div style={{ height: 600 }}>
      {arr.map((el, i) => {
        return (
          <>
            {img == i && (
              <motion.img
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                src={el}
                style={{ width: "100%", height: 600 }}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default Imgslideshow;
