import React, { useEffect } from "react";
import About from "./About/About";
import Agency from "./Agency/Agency";
import Marketing from "./Marketing/Marketing";
import Creative from "./Creative/Creative";
import Clients from "./clients/Clients";
import New from "./New/New";
import Crouseal from "./Crouseal/Crouseal";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Crouseal />
      <About />
      <Marketing />
      <Agency />
      <Creative />
      <Clients />
      <New />
    </>
  );
}

export default Home;
