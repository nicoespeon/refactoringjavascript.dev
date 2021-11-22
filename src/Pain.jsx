// const GenerateImage = ({ src }) => (
//   <div className="flex justify-center">
//     <img
//       src={src}
//       className="absolute top-0 filter brightness-[500] md:ml-[66px] md:mt-[-52px]"
//       alt=""
//     />
//     <img src={src} className="relative" alt="" />
//   </div>
// );

export const Pain = () => (
  <section className="md:pt-[92px] py-[48px] md:pb-[90px] bg-slate-light px-6 md:px-0 font-dm-sans">
    <div className="max-w-[790px] mt-[56px] md:mt-20 m-auto">
      <h2 className="font-medium text-slate-headline text-mobile-h2 lg:text-desktop-h2">
        How do you even know you aren't breaking things?
      </h2>
      <div className="max-w-default md:justify-center md:flex md:items-start md:m-auto">
        <div className="w-full md:flex md:items-center md:justify-center">
          <div className="md:mt-12">
            <p>"Write some tests first!"</p>
            <p>
              Yeah, you've heard that. You <em>know</em> tests could help. But
              still:
            </p>
            <ul className="list-decimal">
              <li>
                Adding tests for this would itself require a MAJOR refactoring
                of the entire codebase!
              </li>
              <li>
                Deadlines are short. Would you really have time for this? You
                aren't so sure of this…
              </li>
              <li>
                Your team already asked to freeze features for a while, so you
                can clean up the code. But this isn't happening soon…
              </li>
            </ul>
            <p>
              So you resort to what you know how to do: be extra careful, touch
              the less possible amount of code. Try out some stuff manually.
              Cross fingers.
            </p>
            <p>
              "I won't be the one breaking production this time", you think 🤞
            </p>
          </div>
        </div>
        <div className="relative w-full mt-12 md:mt-0">
          <img src="/assets/jenga/1-fail.gif" alt="" />
        </div>
      </div>
      <div className="max-w-default md:justify-center md:flex md:items-start md:m-auto pt-12">
        <div className="relative w-full mt-12 md:mt-0">
          <img src="/assets/jenga/2-try-and-fail.gif" alt="" />
        </div>
        <div className="w-full md:flex md:items-center md:justify-center">
          <div className="md:mt-12">
            <p>
              If only! This code is a twisted, tangled spaghetti soup. The last
              time you tried renaming a model attribute, half of the routes
              stopped working! 🤬
            </p>
            <p>
              Changing code here is like playing Russian Roulette on a roll. Do
              you feel lucky today?
            </p>
            <p>
              Let's face it. What this codebase really needs is a good
              Refactoring Sprint or two. At least, that's what your colleagues
              say.
            </p>
            <p>
              If you ever experienced that kind of "refactor the codebase"
              attempt, you may have been left… doubtful.
            </p>
            <p>
              How good are 3,000 lines of code spread across 30 methods where{" "}
              <code>fooN()</code> just calls <code>fooN+1()</code> in its last
              line? Great, now you have to jump all around to understand what's
              going on! So much for "coding new features faster".
            </p>
            <p>
              Other devs say they want to refactor the code all the time. They
              look confident and all. But after they have touched the code, the
              result is often worse…
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
