import MailIcon from "@heroicons/react/outline/MailIcon";

const ComingSoonArrow = () => (
  <div className="absolute hidden md:block -top-6 -left-24">
    <div className="flex flex-col items-center justify-center">
      <p className="font-normal font-dm-sans"> Coming Soon </p>
      <img src="/assets/pricing-tables/arrow.svg" alt="" />
    </div>
  </div>
);

export function Hero() {
  return (
    <section className="pb-[800px]">
      <div>
        <div className="md:max-h-screen pt-6 pb-[50px] md:pb-[90px] md:px-0 bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end font-dm-sans md:pt-0 relative">
          <div className="px-6">
            <nav>
              <div className="m-auto max-w-default">
                <div className="md:h-[30px] flex items-center justify-between"></div>
              </div>
            </nav>
          </div>
          <section className="relative px-6 m-auto md:px-0 max-w-default">
            <div className="mt-[50px] md:mt-20 m-auto">
              <div className="max-w-[910px] m-auto text-center">
                <h1 className="font-medium text-slate-headline text-mobile-h1 md:text-desktop-h1">
                  Clean up your JavaScript application as you go, stop at any
                  time.
                </h1>
                <p className="mt-[30px] text-desktop-subheading">
                  Your guided path to powerful coding habits.
                </p>
              </div>
              <div className="flex flex-col justify-center mt-8 md:space-x-4 md:flex-row md:mt-10">
                <ComingSoonArrow />
                <input
                  type="email"
                  className="py-4 pl-6 bg-white border-2 rounded-lg text-slate-body placeholder-slate-body text-desktop-paragraph placeholder-opacity-30 border-slate-border min-w-[350px]"
                  placeholder="Email"
                />
                <button className="w-full px-8 py-4 mt-4 text-white rounded-lg md:mt-0 bg-slate-blue filter hover:brightness-125 text-desktop-paragraph md:w-auto flex items-center">
                  <MailIcon className="w-6 h-6 mr-2" />
                  <p>Ping me when it's ready!</p>
                </button>
              </div>
              <div className="max-w-[790px] mt-[56px] md:mt-20 m-auto">
                <h2 className="font-medium text-slate-headline text-mobile-h3 md:text-desktop-h3">
                  Why would risk refactoring your JavaScript codebase?
                </h2>
                <p className="mt-[28px] md:mt-10">
                  Deep down you it: you don't <em>fully</em> understand what
                  this code is doing.
                </p>
                <p>
                  It has been written by other developers, some don't even work
                  there anymore. Those who are left can't remember what{" "}
                  <em>this part</em> was supposed to do.
                </p>
                <p>Now you are facing the beast and it's a scary one:</p>
              </div>
              <div className="relative mt-[56px] md:mt-20 flex items-center justify-center h-[194px] md:h-[680px] bg-white bg-opacity-70 rounded-3xl">
                <img
                  className="h-[188px] md:h-auto mt-8 md:mt-[100px]"
                  src="/assets/heros/groupbanner.svg"
                  alt=""
                />
              </div>
              <div className="clear-both" />
              <div className="max-w-[790px] mt-[56px] md:mt-20 m-auto">
                <p>
                  Nesting, weird names, indirections, side-effects everywhere…
                  It's a nightmare to work with!
                </p>
                <p>You don't want to touch this code with a ten feet pole.</p>
                <p>
                  But you <strong>have to</strong> touch this code!
                </p>
                <p>You are the one who is paid to fix bugs in this mess.</p>
                <p>
                  Your boss expects you to add new ✨ shiny features ✨ on top
                  of this swamp by the end of next week. These have already been
                  sold to the customers you know, just make it happen.
                </p>
                <p>Sorry!</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
