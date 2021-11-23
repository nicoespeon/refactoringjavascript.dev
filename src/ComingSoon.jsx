import { useState } from "react";
import CheckIcon from "@heroicons/react/outline/CheckIcon";

const STATES = {
  INITIAL: "INITIAL",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  WAITING: "WAITING",
};

export const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState(STATES.INITIAL);

  const subscribe = async () => {
    if (state === STATES.WAITING) return;
    if (email === "") return;

    // That's always tricky. Stick to the minimum.
    const isValidEmail = email.includes("@") && email.length >= 3;
    if (!isValidEmail) return;

    try {
      setState(STATES.WAITING);
      await fetch("https://api.convertkit.com/v3/forms/2796121/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          charset: "utf-8",
        },
        body: JSON.stringify({
          api_key: "TTBuGqUj5xOVz5l73Xw-sA",
          email,
          tags: [2767862],
        }),
      });

      setState(STATES.SUCCESS);
      setEmail("");
    } catch (error) {
      setState(STATES.ERROR);
      console.error(error);
    }
  };

  return (
    <section
      className="py-20 px-6 md:px-0 font-dm-sans"
      style={{
        borderTop: 6,
        borderBottom: 6,
        borderColor: "rgb(255, 0, 115)",
        borderStyle: "double",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "bottom",
        backgroundImage: `url(
          "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1004%26quot%3b)' fill='none'%3e%3cpath d='M0 0C0 0 0 0 0 0C70 0 70 0 140 0C210 0 210 0 280 0C350 0 350 0 420 0C490 0 490 0 560 0C630 0 630 0 700 0C770 0 770 0 840 0C893.97 0 901.16 -14.34 947.95 0C971.16 7.11 964.1 42.9 980 42.9C995.77 42.9 988.32 7.04 1011.29 0C1058.32 -14.41 1065.64 0 1120 0C1190 0 1190 0 1260 0C1330 0 1330 0 1400 0C1470 0 1505 -35 1540 0C1575 35 1540 70 1540 140C1540 210 1540 210 1540 280C1540 350 1540 350 1540 420C1540 486 1544.14 487.86 1540 552C1539.62 557.86 1536.87 559.66 1530.97 560C1466.87 563.66 1465.49 560 1400 560C1330 560 1330 560 1260 560C1190 560 1190 560 1120 560C1050 560 1050 560 980 560C910 560 910 560 840 560C770 560 770 560 700 560C674.34 560 648.67 576.35 648.67 560C648.67 521.35 661 490.35 700 450C728.66 420.35 784 429.14 784 420C784 411.37 741.79 419.27 700 414.47C629.79 406.4 626.37 392.08 560 394.25C541.64 394.85 534.99 401.94 530.53 420C514.53 484.82 551.49 518.95 519.08 560C496.22 588.95 469.54 560 420 560C350 560 350 560 280 560C210 560 210 560 140 560C102 560 84.47 583.88 64 560C24.47 513.88 47.86 484.74 20 420C15.86 410.37 1.43 421.23 0 411.25C-8.57 351.23 0 345.63 0 280C0 210 0 210 0 140C0 70 0 70 0 0' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M280 128.52C238.15 128.52 192.5 134.12 192.5 140C192.5 145.89 238.31 152.07 280 152.07C287.99 152.07 291.86 145.96 291.86 140C291.86 134.19 287.83 128.52 280 128.52' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M840 109.27C823.07 109.27 808.1 123.77 808.1 140C808.1 158.23 822.82 178.18 840 178.18C859.42 178.18 881.31 157.99 881.31 140C881.31 123.53 859.68 109.27 840 109.27' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M420 243.56C402.54 243.56 383.06 262.14 383.06 280C383.06 297.2 402.47 313.67 420 313.67C435.72 313.67 449.56 297.12 449.56 280C449.56 262.07 435.79 243.56 420 243.56' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1260 183.45C1216.3 195.83 1200.43 231.02 1200.43 280C1200.43 333.14 1214.19 371.62 1260 387.69C1313.97 406.62 1340.81 384.01 1400 350C1434.52 330.17 1447.42 313.78 1447.42 280C1447.42 250.51 1431.52 239.7 1400 223.46C1337.81 191.42 1316.09 167.56 1260 183.45' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M280 392.42C246.93 392.42 207.2 406.72 207.2 420C207.2 433.15 246.55 445.28 280 445.28C295.41 445.28 304.93 432.91 304.93 420C304.93 406.48 295.79 392.42 280 392.42' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 134.62C1.83 134.62 5.39 136.05 6.09 140C18.35 208.74 28.39 214.72 25.93 280C25.34 295.66 7.88 301.88 0 301.88C-5.08 301.88 0 290.94 0 280C0 210 0 210 0 140C0 137.31 -1.21 134.62 0 134.62' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M280 71.15C222.35 29.8 156 19.05 156 0C156 -16.52 218 0 280 0C350 0 350 0 420 0C480.66 0 482.8 -6.16 541.33 0C552.8 1.21 550.95 14.74 560 14.74C568.28 14.74 565.55 1.1 576 0C635.55 -6.27 638 0 700 0C770 0 770 0 840 0C872.89 0 905.78 -13.74 905.78 0C905.78 19.55 873.32 33.73 840 66.59C802.33 103.73 763.8 101.23 763.8 140C763.8 183.54 796.88 191.25 840 231.21C872.42 261.25 879.34 253.11 914.88 280C949.34 306.07 947.63 308.35 980 337.14C1026.33 378.35 1035.3 371.71 1072.27 420C1105.3 463.14 1079.05 504.73 1120 520C1172.91 539.73 1189.21 497.58 1260 490C1329.21 482.58 1347.88 466.92 1400 490C1426.91 501.92 1418.06 532 1418.06 560C1418.06 567 1409.03 560 1400 560C1330 560 1330 560 1260 560C1190 560 1190 560 1120 560C1090 560 1088.86 566.24 1060 560C1018.86 551.1 1010.7 556.92 980 529.73C931.66 486.92 943.24 473.05 901.92 420C873.24 383.19 880.21 360.27 840 350C779.25 334.48 770.12 367.41 700 368.42C630.12 369.42 621.09 379.55 560 354.02C515.31 335.34 522.5 318.53 488.44 280C452.5 239.33 457.82 234.2 420 195.62C389.2 164.2 384.22 169.37 351.19 140C314.22 107.13 319.94 99.8 280 71.15' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M938.69 140C938.69 117.22 961.78 121.77 980 99.35C1018.67 51.77 1007.28 32.07 1052.47 0C1077.28 -17.61 1086.24 0 1120 0C1168.64 0 1210.84 -27.11 1217.29 0C1227.5 42.89 1177.03 67.34 1153.33 140C1131.37 207.34 1140.8 210.32 1125.96 280C1124.14 288.56 1124.27 296.47 1120 296.47C1114.93 296.47 1115.95 285.59 1107.27 280C1045.95 240.51 1035.04 252.03 980 206.32C950.75 182.03 938.69 170.71 938.69 140' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1361.82 140C1331.87 79.26 1310.52 45.75 1323 0C1329.61 -24.25 1361.5 0 1400 0C1464.16 0 1520.02 -30.47 1528.33 0C1539.11 39.53 1489.55 77.49 1438.18 140C1425.39 155.56 1419.09 156.15 1400 156.15C1380.91 156.15 1370.37 157.33 1361.82 140' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M201.6 280C201.6 247.44 243.87 212.41 280 212.41C310.29 212.41 334.44 247.07 334.44 280C334.44 310.56 309.91 339.39 280 339.39C243.49 339.39 201.6 310.93 201.6 280' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1503.87 280C1519.85 244.04 1530.43 210 1540 210C1548.5 210 1540 245 1540 280C1540 350 1540 350 1540 420C1540 436 1551.43 452 1540 452C1504.76 452 1453.8 453.95 1446.67 420C1435.74 367.95 1473.19 349.04 1503.87 280' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M352.88 420C385.66 388.18 386.75 357.97 420 357.97C452.55 357.97 475.7 380.84 484.47 420C498.32 481.86 489.65 506.97 465.23 560C457.41 576.97 442.62 560 420 560C350 560 350 560 280 560C220.5 560 161 575.42 161 560C161 542.36 225.56 533.61 280 493.89C321.5 463.61 315.66 456.14 352.88 420' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M280 13.77C269.78 4.51 256 3.69 256 0C256 -3.2 268 0 280 0C350 0 350 0 420 0C422.34 0 422.82 -1.41 424.67 0C492.82 52.01 494.37 106.84 560 106.84C620.03 106.84 615.25 46.36 676 0C685.25 -7.06 688 0 700 0C770 0 770 0 840 0C851.81 0 863.61 -4.93 863.61 0C863.61 7.02 852.05 12.2 840 23.9C779.99 82.2 722.21 77.88 719.49 140C716.61 205.93 834.33 228.29 828.8 280C824.58 319.47 766.06 314.07 700 322.37C631.66 330.96 624.67 329.66 560 313.79C538.33 308.47 542.46 297.96 527.33 280C472.46 214.9 474.51 212.99 420 147.67C416.1 142.99 414.92 144.22 410.51 140C344.92 77.27 347.04 74.51 280 13.77' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1120 62.22C1104.53 62.22 1093.65 22.38 1093.65 0C1093.65 -8.73 1106.82 0 1120 0C1138.99 0 1157.97 -10.66 1157.97 0C1157.97 20.45 1136.69 62.22 1120 62.22' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M271.6 280C271.6 276.51 276.13 272.76 280 272.76C283.24 272.76 285.83 276.47 285.83 280C285.83 283.27 283.2 286.36 280 286.36C276.09 286.36 271.6 283.31 271.6 280' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M400.82 420C400.82 407.99 410.5 402.28 420 402.28C429.3 402.28 438.42 408.18 438.42 420C438.42 467.04 429.39 520 420 520C410.59 520 400.82 466.85 400.82 420' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M969.23 420C969.23 413.91 974.38 408.57 980 408.57C986.13 408.57 992.73 413.84 992.73 420C992.73 427.12 986.06 435.14 980 435.14C974.31 435.14 969.23 427.2 969.23 420' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M248.5 560C248.5 555.33 262.8 542.5 280 542.5C327.01 542.5 376.92 555.59 376.92 560C376.92 564.34 328.46 560 280 560C264.25 560 248.5 564.08 248.5 560' stroke='rgba(255%2c 0%2c 115%2c 0.1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1004'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"
        )`,
      }}
    >
      <div className="text-center max-w-default md:justify-center md:flex md:m-auto">
        <div>
          <div className="m-auto max-w-[790px]">
            <h2 className="font-medium font-ibm-sans tracking-tight text-mobile-h2 md:text-desktop-h2 text-slate-headline">
              Coming Soon.
            </h2>
            <div className="mt-4 text-center md:text-left">
              <p className="mt-6 text-xl leading-9 antialiased font-normal">
                I'm currently building up this course. I estimate the launch
                date will happen <strong>in early 2022</strong>.
              </p>
              <p className="mt-6 text-xl leading-9 antialiased font-normal">
                Want to follow the course's development? You can sign up for
                email updates. I send updates every week to share what's
                happening behind the curtain 😉
              </p>
              <p className="mt-6 text-xl leading-9 antialiased font-normal">
                You will also be the first one to know and get a bonus discount
                when doors open.
              </p>
            </div>
            {/* Desktop */}
            <div className="hidden mt-8 md:mt-12 md:block">
              {state === STATES.SUCCESS ? (
                <div className="flex flex-col justify-center mt-8 md:space-x-4 md:flex-row md:mt-10">
                  <div
                    className="w-full px-8 py-4 mt-4 text-green-600 rounded-lg md:mt-0 filter text-desktop-paragraph md:w-auto flex items-center border bg-white"
                    style={{
                      borderColor: "green",
                      borderStyle: "double",
                      borderWidth: 6,
                    }}
                  >
                    <CheckIcon className="w-6 h-6 mr-2" />
                    <p>
                      <strong>You are in!</strong> Please{" "}
                      <u>check your emails</u>, you may need to confirm your
                      subscription.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between max-w-xl px-2 py-2 m-auto border-opacity-10 border-[#19313C] bg-white border-2 rounded-lg focus-within:border-slate-blue transition-all duration-300">
                  <input
                    className="w-1/2 text-[18px] bg-transparent px-4 outline-none md:w-8/12 focus:outline-non font-dm-sans"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value.trim())}
                  ></input>
                  <button
                    className="w-1/2 px-6 py-3 text-white transition-all duration-300 rounded-lg outline-none filter hover:brightness-125 focus:outline-none md:w-4/12 font-dm-sans"
                    style={{ backgroundColor: "rgb(255, 0, 115)" }}
                    onClick={subscribe}
                    disabled={state === STATES.WAITING}
                  >
                    Keep me posted
                  </button>
                </div>
              )}
              {state === STATES.ERROR && (
                <div className="flex flex-col justify-center md:space-x-4 md:flex-row mt-2 -mb-2">
                  <p className="text-red-700 italic text-center">
                    Oh no, something went wrong! Please try again, it may be
                    just a hiccup…
                    <br />
                    If you're stuck, ping me anytime:{" "}
                    <strong>nicolas@understandlegacycode.com</strong>
                  </p>
                </div>
              )}
            </div>
            {/* Mobile */}
            <div className="mt-8 md:mt-12 md:hidden bg-white">
              {state === STATES.SUCCESS ? (
                <div className="flex flex-col justify-center mt-8 md:space-x-4 md:flex-row md:mt-10">
                  <div
                    className="w-full px-8 py-4 mt-4 text-green-600 rounded-lg md:mt-0 filter text-desktop-paragraph md:w-auto flex items-center border bg-white"
                    style={{
                      borderColor: "green",
                      borderStyle: "double",
                      borderWidth: 6,
                    }}
                  >
                    <CheckIcon className="w-6 h-6 mr-2" />
                    <p>
                      <strong>You are in!</strong> Please{" "}
                      <u>check your emails</u>, you may need to confirm your
                      subscription.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <input
                    className="w-full py-4 pl-6 bg-transparent border-2 rounded-lg border-slate-border text-desktop-paragraph"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value.trim())}
                  ></input>
                  <div className="mt-2">
                    <div>
                      <button
                        className="flex items-center justify-center w-full px-12 py-4 m-auto space-x-2 font-medium text-white transition-all duration-300 rounded-lg text-desktop-paragraph font-dm-sans filter hover:brightness-150 md:w-auto"
                        style={{ backgroundColor: "rgb(255, 0, 115)" }}
                        onClick={subscribe}
                        disabled={state === STATES.WAITING}
                      >
                        <span>Keep me posted</span>
                      </button>
                    </div>
                    {state === STATES.ERROR && (
                      <div className="flex flex-col justify-center md:space-x-4 md:flex-row mt-2">
                        <p className="text-red-700 italic text-center">
                          Oh no, something went wrong! Please try again, it may
                          be just a hiccup…
                          <br />
                          If you're stuck, ping me anytime:{" "}
                          <strong>nicolas@understandlegacycode.com</strong>
                        </p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
