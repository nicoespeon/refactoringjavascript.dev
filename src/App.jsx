import { ComingSoon } from "./ComingSoon";
import { Dream } from "./Dream";
import { Hero } from "./Hero";
// import { FAQ } from "./FAQ";
// import { Features } from "./Features";
import { Fix } from "./Fix";
import { Pain } from "./Pain";
// import { PricingTable } from "./PricingTable";
import { WhoAmI } from "./WhoAmI";

// TODO: run Grammarly on whole copy once done
// TODO: update assets (logo, favicon, etc)
function App() {
  return (
    <>
      <Hero />
      <Pain />
      <Dream />
      <Fix />
      <ComingSoon />
      {/* <Features /> */}
      <WhoAmI />
      {/* <PricingTable /> */}
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
    </>
  );
}

export default App;
