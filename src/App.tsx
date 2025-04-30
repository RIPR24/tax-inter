import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Nav />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default App;
