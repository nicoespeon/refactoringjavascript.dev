import { useState } from "react";
import MailIcon from "@heroicons/react/outline/MailIcon";
import CheckIcon from "@heroicons/react/outline/CheckIcon";

const ComingSoonArrow = () => (
  <div className="absolute hidden md:block -top-6 -left-24">
    <div
      className="flex flex-col items-center justify-center"
      style={{ color: "rgb(255, 0, 115)" }}
    >
      <p className="font-normal font-ibm-sans italic pr-2">Coming Soon</p>
      <img src="/assets/pricing-tables/arrow.svg" alt="" />
    </div>
  </div>
);

const STATES = {
  INITIAL: "INITIAL",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  WAITING: "WAITING",
};

export function Hero() {
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
    <section className="pt-6 md:px-0 font-dm-sans md:pt-0 relative">
      <div className="relative px-6 m-auto md:px-0 max-w-default">
        <div className="mt-[50px] md:mt-20 m-auto">
          <div className="max-w-[910px] m-auto text-center">
            <h1 className="font-medium text-slate-headline text-mobile-h1 md:text-desktop-h1 font-ibm-sans tracking-tighter leading-tight">
              Refactor JavaScript applications
              <br />
              as you go, stop at any time.
            </h1>
            <p className="mt-[30px] antialiased text-desktop-subheading tracking-wide">
              Your guided path to powerful coding habits.
            </p>
          </div>
          {state === STATES.SUCCESS ? (
            <div className="flex flex-col justify-center mt-8 md:space-x-4 md:flex-row md:mt-10">
              <div
                className="w-full px-8 py-4 mt-4 text-green-600 rounded-lg md:mt-0 filter text-desktop-paragraph md:w-auto flex items-center border"
                style={{
                  borderColor: "green",
                  borderStyle: "double",
                  borderWidth: 6,
                }}
              >
                <CheckIcon className="w-6 h-6 mr-2" />
                <p>
                  <strong>You are in!</strong> Please <u>check your emails</u>,
                  you may need to confirm your subscription.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center mt-8 md:space-x-4 md:flex-row md:mt-10">
              <div className="relative">
                <ComingSoonArrow />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value.trim())}
                  className="py-4 pl-6 bg-white border-2 rounded-lg text-slate-body placeholder-slate-body text-desktop-paragraph placeholder-opacity-30 border-slate-border min-w-[350px] md:w-auto w-full"
                  placeholder="Email"
                />
              </div>
              <button
                className="w-full px-8 py-4 mt-4 text-white rounded-lg md:mt-0 filter hover:brightness-125 text-desktop-paragraph md:w-auto flex items-center justify-center md:justify-start"
                style={{
                  backgroundColor: "rgb(255, 0, 115)",
                }}
                onClick={subscribe}
                disabled={state === STATES.WAITING}
              >
                <MailIcon className="w-6 h-6 mr-2" />
                <p>Ping me when it's ready!</p>
              </button>
            </div>
          )}
          {state === STATES.ERROR && (
            <div className="flex flex-col justify-center md:space-x-4 md:flex-row mt-4 -mb-4">
              <p className="text-red-700 italic text-center">
                Oh no, something went wrong! Please try again, it may be just a
                hiccup…
                <br />
                If you're stuck, ping me anytime:{" "}
                <strong>nicolas@understandlegacycode.com</strong>
              </p>
            </div>
          )}
          <div className="max-w-[790px] mt-[56px] md:mt-14 m-auto">
            <h2 className="font-medium text-slate-headline text-mobile-h3 md:text-desktop-h3">
              Would you risk refactoring your JavaScript codebase?
            </h2>
            <p className="mt-6 text-xl leading-9 antialiased font-normal text-slate-body">
              Deep down you know it: you don't <em>really</em> understand what
              this code is doing.
            </p>
            <p className="mt-6 text-xl leading-9 antialiased font-normal text-slate-body">
              Other developers wrote that. Most don't work here anymore. The
              rest can't remember what <em>this part</em> was supposed to do 🤷‍♂️{" "}
              You are facing the beast and it's a scary one:
            </p>
          </div>
          <img className="" src="/assets/legacy-code.png" alt="" />
          <div className="max-w-[790px] m-auto">
            <p className="mt-6 text-xl leading-9 antialiased font-normal text-slate-body">
              Nesting, weird names, indirections, side-effects everywhere… It's
              a nightmare to work with! You don't want to touch this code with a
              ten feet pole. 🤮
            </p>
            <p className="mt-6 text-xl leading-9 antialiased font-normal text-slate-body">
              But you <strong>have to</strong> touch this code!
            </p>
            <p className="mt-6 text-xl leading-9 antialiased font-normal text-slate-body">
              You are the one who is paid to fix bugs in this mess, right.
              Right?? 😬
            </p>
            <p className="mt-6 text-xl leading-9 antialiased font-normal text-slate-body">
              Your boss expects you to add new ✨ shiny features ✨ on top of
              this swamp by the end of next week. These have already been sold
              to the customers, you know.
            </p>
            <p className="mt-6 text-xl leading-9 antialiased font-normal text-slate-body">
              Just make it happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
