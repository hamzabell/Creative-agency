import React from "react";
import { Footer, ContactUs, Services, Banner, Team } from "./components";
import Global from "./Global";
function App() {
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
