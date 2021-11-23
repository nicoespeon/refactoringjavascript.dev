import { ComingSoon } from "./ComingSoon";
import { Dream } from "./Dream";
import { Hero } from "./Hero";
// import { FAQ } from "./FAQ";
// import { Features } from "./Features";
import { Fix } from "./Fix";
import { Pain } from "./Pain";
// import { PricingTable } from "./PricingTable";
import { WhoAmI } from "./WhoAmI";
import { useWindowSize } from "./useWindowSize";

const TopLeft = () => {
  const { width } = useWindowSize();
  const opacity = width > 1320 ? 0.65 : 0.25;

  return (
    <svg
      className="absolute left-0"
      style={{
        top: -10,
        left: -50,
      }}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="600"
      height="300"
      preserveAspectRatio="none"
      viewBox="0 0 600 300"
    >
      <g mask='url("#SvgjsMask1024")' fill="none">
        <path
          d="M375.04-37.3C324.72-27.54 349.76 94.75 223.29 100.55 96.82 106.35-1.49 183.78-80.21 184.55"
          stroke={`rgba(255, 0, 115, ${opacity})`}
          strokeWidth="2"
        ></path>
        <path
          d="M366.88-54.77C302.65-45.14 288.6 92.8 164.25 107.81 39.9 122.82 21.81 234.16-38.38 239.81"
          stroke={`rgba(255, 0, 115, ${opacity})`}
          strokeWidth="2"
        ></path>
        <path
          d="M239.15-58.2C185.58-4.94 225.94 216.94 132.44 224.49 38.94 232.04-23.39 139.14-80.99 137.49"
          stroke={`rgba(255, 0, 115, ${opacity})`}
          strokeWidth="2"
        ></path>
        <path
          d="M547.2-25.82C488.64-20.2 451.55 102.9 350.6 103.51 249.66 104.12 252.31 66.01 154.01 66.01 55.71 66.01 7.45 103.34-42.59 103.51"
          stroke={`rgba(255, 0, 115, ${opacity})`}
          strokeWidth="2"
        ></path>
        <path
          d="M519.47-32.49C427.53-11.53 394.05 229.17 250.89 232.33 107.73 235.49 51.45 166.81-17.69 166.33"
          stroke={`rgba(255, 0, 115, ${opacity})`}
          strokeWidth="2"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1024">
          <rect width="600" height="300" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>
  );
};

function App() {
  return (
    <>
      <TopLeft />
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
