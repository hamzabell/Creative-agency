import React, { useEffect } from "react";
import { Footer, ContactUs, Services, Banner, Team } from "./components";
import Global from "./Global";
function App() {
  useEffect(() => {
    document.body.style.zoom = "100%";
  }, []);
  return (
    <div>
      <Global />
      <Banner />
      <Services />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
