const InputWithButton = () => (
  <div className="flex justify-between max-w-xl px-2 py-2 m-auto border-opacity-10 border-[#19313C] border-2 rounded-lg focus-within:border-slate-blue transition-all duration-300">
    <input
      className="w-1/2 text-[18px] bg-transparent px-4 outline-none md:w-8/12 focus:outline-non font-dm-sans"
      type="email"
      placeholder="Email"
    ></input>
    <button className="w-1/2 px-6 py-3 text-white transition-all duration-300 rounded-lg outline-none filter hover:brightness-125 focus:outline-none md:w-4/12 bg-slate-blue font-dm-sans">
      Keep me posted
    </button>
  </div>
);

const PrimaryButton = () => (
  <div>
    <button className="flex items-center justify-center w-full px-12 py-4 m-auto space-x-2 font-medium text-white transition-all duration-300 rounded-lg text-desktop-paragraph font-dm-sans bg-slate-blue filter hover:brightness-150 md:w-auto">
      <span>Keep me posted</span>
    </button>
  </div>
);

export const ComingSoon = () => (
  <section className="py-12 md:py-[90px] bg-slate-light px-6 md:px-0 font-dm-sans">
    <div className="text-center max-w-default md:justify-center md:flex md:m-auto">
      <div>
        <div className="m-auto max-w-[790px]">
          <h2 className="mt-8 font-medium leading-snug md:mt-12 text-mobile-h2 md:text-desktop-h2 text-slate-headline">
            Coming Soon.
          </h2>
          <div className="mt-4 text-center md:text-left">
            <p className="mt-4 text-mobile-paragraph md:text-desktop-paragraph text-slate-headline">
              I'm currently building up this course. I estimate the launch date
              will happen <strong>in early 2022</strong>.
            </p>
            <p>
              Want to follow the course's development? You can sign up for email
              updates. I send updates every week to share what's happening
              behind the curtain 😉
            </p>
          </div>
          <div className="hidden mt-8 md:mt-12 md:block">
            <InputWithButton />
          </div>
          <div className="mt-8 md:mt-12 md:hidden">
            <input
              className="w-full py-4 pl-6 bg-transparent border-2 rounded-lg border-slate-border text-desktop-paragraph"
              type="email"
              placeholder="Enter your email"
            ></input>
            <div className="mt-2">
              <PrimaryButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
