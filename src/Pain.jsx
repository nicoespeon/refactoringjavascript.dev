const GenerateImage = ({ src }) => (
  <div className="flex justify-center">
    <img
      src={src}
      className="absolute top-0 filter brightness-[500] md:ml-[66px] md:mt-[-52px]"
      alt=""
    />
    <img src={src} className="relative" alt="" />
  </div>
);

export const Pain = () => (
  <section className="md:pt-[142px] py-[48px] md:pb-[90px] bg-slate-light px-6 md:px-0 font-dm-sans">
    <div className="max-w-default md:justify-center md:flex md:items-start md:m-auto">
      <div className="w-full md:flex md:items-center md:justify-center">
        <div className="md:mt-12">
          <h2 className="mt-6 font-medium leading-snug text-mobile-h2 md:text-mobile-h2 max-w-[400px]">
            How do you even know you aren't breaking things?
          </h2>
          <p>"Write automated tests first!"</p>
          <p>
            Yeah, you've heard that. You know tests could help, but:
            <ul className="list-decimal">
              <li>
                Adding tests to this code itself requires a MAJOR refactoring of
                the entire codebase!
              </li>
              <li>
                Deadlines are short, you don't really think you have time for
                this…
              </li>
              <li>
                You already asked to freeze features for a while, so you can
                clean up the code. But this won't happen soon…
              </li>
            </ul>
          </p>
          <p>
            If you're just being careful and touch the less possible amount of
            code, maybe that would work?
          </p>
        </div>
      </div>
      <div className="relative w-full mt-12 md:mt-0">
        <GenerateImage src="/assets/jenga/1-fail.gif" />
      </div>
    </div>
    <div className="max-w-default md:justify-center md:flex md:items-start md:m-auto pt-32">
      <div className="relative w-full mt-12 md:mt-0">
        <GenerateImage src="/assets/jenga/2-try-and-fail.gif" />
      </div>
      <div className="w-full md:flex md:items-center md:justify-center">
        <div className="md:mt-12">
          <p>
            If only! This code is a twisted, tangled spaghetti soup. The last
            time you tried renaming a model attribute, half of the routes
            stopped working! 🤬
          </p>
          <p>
            What this codebase really need is a good Refactoring Sprint or two.
            At least, that's what your colleagues say.
          </p>
          <p>
            If you have experienced some of these "refactor the codebase"
            attempts, you may have been left… well, doubtful.
          </p>
          <p>
            How good are 3,000 lines of code spread across 30 methods where{" "}
            <code>fooN()</code> just calls <code>fooN+1()</code> in its last
            line? Great, now you have to jump all around to understand what's
            going on! So much for not wasting your time when coding.
          </p>
          <p>
            Other developers say they want to refactor the code all the time.
            They look confident and all. But after they have touched the code,
            the result is often worse…
          </p>
        </div>
      </div>
    </div>
  </section>
);
