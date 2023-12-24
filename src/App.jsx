import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cleantech from "./components/Cleantech";
import Curosal from "./components/Curosal";
import Articals from "./components/Articals";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-clip">
      <div className="bg-[url('./assets/windmill.jpg')] bg-center bg-cover bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      <Cleantech />
      {/* <Curosal /> */}
      <Articals />
      <Footer />
    </div>
  );
};

export default App;
