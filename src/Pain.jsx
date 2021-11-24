import { useWindowSize } from "./useWindowSize";

const SeparatorTop = () => {
  const { width } = useWindowSize();

  return width > 1440 ? null : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={width}
      height="560"
      preserveAspectRatio="none"
      viewBox={`0 0 1440 560`}
      className="absolute"
      style={{ top: -560, left: "50%", transform: "translateX(-50%)" }}
    >
      <g mask='url("#SvgjsMask1027")' fill="none">
        <path
          d="M 0,528 C 96,468 288,262.8 480,228 C 672,193.2 768,364.4 960,354 C 1152,343.6 1344,211.6 1440,176L1440 560L0 560z"
          fill="rgba(255, 0, 115, 1)"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1027">
          <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>
  );
};

const SeparatorBottom = () => {
  const { width } = useWindowSize();

  return width > 1440 ? null : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={width}
      height="560"
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
      className="absolute"
      style={{
        bottom: -560,
        left: "50%",
        transform: "translateX(-50%) rotate(180deg)",
      }}
    >
      <g mask='url("#SvgjsMask1027")' fill="none">
        <path
          d="M 0,528 C 96,468 288,262.8 480,228 C 672,193.2 768,364.4 960,354 C 1152,343.6 1344,211.6 1440,176L1440 560L0 560z"
          fill="rgba(255, 0, 115, 1)"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1027">
          <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>
  );
};

export const Pain = () => {
  const { width } = useWindowSize();

  return (
    <section
      className="px-6 md:px-0 font-dm-sans relative text-white"
      style={{
        backgroundColor: "rgb(255, 0, 115)",
        marginTop: width > 1440 ? 60 : 450,
        marginBottom: width > 1440 ? 60 : 450,
        paddingTop: width > 1440 ? 10 : 0,
        paddingBottom: width > 1440 ? 90 : 0,
      }}
    >
      <SeparatorTop />
      <div className="max-w-[790px] mt-[56px] md:mt-20 m-auto">
        <h2 className="font-medium text-mobile-h2 lg:text-desktop-h2 font-ibm-sans tracking-tight">
          How do you know you aren't breaking things?
        </h2>
        <div className="w-full mt-12 md:mt-20">
          <p className="mt-6 text-mobile-h3 lg:text-desktop-h3 leading-9 font-normal text-white italic quote">
            Write some tests first!
          </p>
          <p className="mt-6 text-xl leading-9 antialiased font-normal text-white">
            Yeah, you've heard that. You <em>know</em> tests could help. But
            still:
          </p>
          <ol className="list-decimal mt-6 text-xl leading-9 antialiased font-normal text-white">
            <li>
              Adding tests for this would itself require a MAJOR refactoring of
              the entire codebase!
            </li>
            <li>
              Deadlines are short. Would you really have time for this? You
              aren't so sure of this…
            </li>
            <li>
              Your team already asked to freeze features for a while, so you can
              clean up the code. But this isn't happening soon…
            </li>
          </ol>
        </div>
        <div className="max-w-default md:justify-center md:flex md:items-center md:mt-12">
          <div className="w-full md:flex md:items-center md:justify-center">
            <div className="md:mr-2">
              <p className="mt-6 text-xl leading-9 antialiased font-normal text-white">
                So you resort to what you know how to do:
              </p>
              <p className="mt-6 text-xl leading-9 antialiased font-normal text-white">
                Touch the less possible amount of code.
                <br />
                Try out some stuff manually.
                <br />
                Be extra careful.
                <br />
                Cross fingers.
              </p>
              <p className="mt-6 text-xl leading-9 antialiased font-normal text-white"></p>
            </div>
          </div>
          <div className="relative md:mt-0 mt-12">
            <div
              className="absolute w-full h-full bg-white hidden md:block"
              style={{ top: -15, left: 15, zIndex: 1 }}
            ></div>
            <img
              src="/assets/jenga/1-fail.gif"
              alt=""
              className="relative border-4 border-white md:border-0 m-auto md:m-0"
              style={{ zIndex: 2 }}
            />
          </div>
        </div>

        <div className="w-full md:mt-12">
          <p className="mt-20 md:mt-6 text-mobile-h3 lg:text-desktop-h3 leading-9 font-normal text-white italic quote">
            I won't be the one breaking production this time 🤞
          </p>
        </div>

        <div className="max-w-default md:justify-center md:flex md:items-center md:m-auto pt-20 md:pt-12">
          <div className="relative md:mr-4">
            <img
              src="/assets/jenga/2-try-and-fail.gif"
              alt=""
              className="relative border-4 border-white md:border-0 m-auto md:m-0"
              style={{ zIndex: 2 }}
            />
            <div
              className="absolute w-full h-full bg-white hidden md:block"
              style={{ top: 15, left: -15, zIndex: 1 }}
            ></div>
          </div>
          <div className="w-full md:flex md:items-center md:justify-center mt-12 md:mt-0">
            <div className="md:ml-4">
              <p className="mt-6 text-xl leading-9 antialiased font-normal text-white">
                If only! This code is a twisted, tangled spaghetti soup. The
                last time you tried renaming a model attribute, half of the
                routes stopped working! 🤬
              </p>
              <p className="mt-6 text-xl leading-9 antialiased font-normal text-white">
                Changing code here is like playing Russian Roulette on a roll.
              </p>
              <p className="mt-6 text-xl leading-9 antialiased font-normal text-white">
                Do you feel lucky today?
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:mt-12">
          <p className="mt-6 text-xl leading-9 antialiased font-normal text-white">
            Let's face it. What this codebase really needs is a good Refactoring
            Sprint or two (or three). At least, that's what your colleagues say.
          </p>
          <p className="mt-6 text-xl leading-9 antialiased font-normal text-white">
            If you ever experienced that kind of "refactor the codebase"
            attempt, you may have been left… doubtful.
          </p>
          <p className="mt-6 text-xl leading-9 antialiased font-normal text-white">
            How good are 3,000 lines of code spread across 30 methods where{" "}
            <code className="border border-white rounded px-1 py-1">
              fooN()
            </code>{" "}
            just calls{" "}
            <code className="border border-white rounded px-1 py-1">
              fooN+1()
            </code>{" "}
            in its last line? Now you have to jump all around the code to
            understand what's going on. Great! So much for "coding new features
            faster".
          </p>
          <p className="mt-6 text-xl leading-9 antialiased font-normal text-white">
            Other devs say they want to refactor the code all the time. They
            look confident and all. But after they have touched the code, the
            result is often worse…
          </p>
        </div>
      </div>
      <SeparatorBottom />
    </section>
  );
};
