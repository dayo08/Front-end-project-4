import React, { useEffect } from "react";
import Client from "./Client/Client";
import OurClients from "./OurClients/OurClients";
import OurCompany from "./OurCompany/OurCompany";
import Product from "./Product/Product";
import SocialMedia from "./SocialMedia/SocialMedia";
function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Client />
      <SocialMedia />
      <OurCompany />
      <Product />
      <OurClients />
    </div>
  );
}

export default Services;
