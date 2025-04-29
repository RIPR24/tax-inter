import { Outlet } from "react-router-dom";
import Nav from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

const App = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Nav />
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
