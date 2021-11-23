export function Dream() {
  return (
    <div className="px-6 md:px-0 max-w-[790px] mt-[56px] md:mt-20 m-auto pb-20">
      <h2 className="font-medium text-mobile-h2 lg:text-desktop-h2 font-ibm-sans tracking-tight text-slate-headline">
        Never ask for permission to refactor again!
      </h2>
      <div className="w-full">
        <p className="mt-6 text-xl leading-9 antialiased font-normal">
          What if you knew how to clean up code while you deliver value to your
          customers?
        </p>
        <p className="mt-6 text-xl leading-9 antialiased font-normal">
          Imagine being able to dive into any kind of JavaScript codebase,
          knowing that you can fix problems safely. You come in and know that
          you can:
        </p>
        <ol className="list-decimal mt-6 text-xl leading-9 antialiased font-normal">
          <li>Detect code smells and address them</li>
          <li>Make safe changes without having tests</li>
          <li>Update the code so we can easily write the missing tests</li>
          <li>Stop refactoring at any time, change my mind, or just ship!</li>
        </ol>
      </div>

      <div className="max-w-default md:justify-center md:flex md:items-center md:m-auto md:pt-12">
        <div className="w-full md:w-1/2 md:flex md:items-center md:justify-center">
          <div>
            <p className="mt-6 text-xl leading-9 antialiased font-normal">
              Refactoring code is what you do <u>while shipping changes</u>.
            </p>
            <p className="mt-6 text-xl leading-9 antialiased font-normal">
              You don't need to ask for permission.
            </p>
            <p className="mt-6 text-xl leading-9 antialiased font-normal">
              Each new feature is now an opportunity to make the code easier to
              maintain!
            </p>
          </div>
        </div>
        <div className="relative mt-12 md:mt-0">
          <img
            src="/assets/jenga/3-success-2.gif"
            alt=""
            className="relative border-4 md:border-0 m-auto md:m-0"
            style={{ zIndex: 2, borderColor: "rgb(255, 0, 115)" }}
          />
          <div
            className="absolute w-full h-full hidden md:block"
            style={{
              top: -15,
              left: 15,
              zIndex: 1,
              backgroundColor: "rgb(255, 0, 115)",
            }}
          ></div>
        </div>
      </div>

      <div className="w-full mt-12">
        <p className="mt-6 text-xl leading-9 antialiased font-normal">
          You didn't suddenly become a genius developer. But you master safe
          refactoring techniques. From the outside, it just looks impressive!
        </p>
      </div>

      <h2 className="mt-20 font-medium text-mobile-h2 lg:text-desktop-h2 font-ibm-sans tracking-tight text-slate-headline">
        What if refactoring was natural to you?
      </h2>

      <div className="w-full">
        <p className="mt-6 text-xl leading-9 antialiased font-normal">
          You know what doesn't take you much time?
        </p>
        <p className="mt-6 text-xl leading-9 antialiased font-normal">
          Saving a file you changed. Switching to your browser to see these
          changes. Opening up your terminal. Creating a new component…
        </p>
        <p className="mt-6 text-xl leading-9 antialiased font-normal">
          These actions are <strong>small</strong> and{" "}
          <strong>you're used to doing them</strong>. You probably don't even
          think about it anymore!
        </p>
      </div>

      <div className="max-w-default md:justify-center md:flex md:items-center md:m-auto pt-12">
        <div className="relative md:mr-4">
          <img
            src="/assets/jenga/3-success.gif"
            alt=""
            className="relative border-4 md:border-0 m-auto md:m-0"
            style={{ zIndex: 2, borderColor: "rgb(255, 0, 115)" }}
          />
          <div
            className="absolute w-full h-full hidden md:block"
            style={{
              top: 15,
              left: -15,
              zIndex: 1,
              backgroundColor: "rgb(255, 0, 115)",
            }}
          ></div>
        </div>
        <div className="w-full md:flex md:items-center md:justify-center">
          <div className="md:ml-4">
            <p className="mt-6 text-xl leading-9 antialiased font-normal">
              Imagine you knew <strong>refactoring moves</strong> that would be{" "}
              <strong>fast and safe</strong> to execute. You'd get so familiar
              with them that you would do them <em>instinctively</em>.
            </p>
            <p className="mt-6 text-xl leading-9 antialiased font-normal">
              How would it change the way you work?
            </p>
            <p className="mt-6 text-xl leading-9 antialiased font-normal">
              How would you feel if you could ship features in time AND improve
              the code?
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-12">
        <p className="mt-6 text-xl leading-9 antialiased font-normal">
          Sure. Your teammates may still not care and keep creating a mess
          behind themselves.
        </p>
        <p className="mt-6 text-xl leading-9 antialiased font-normal">
          But would you care if you could recover from any mayhem in front of
          you?
        </p>
        <p className="mt-6 text-xl leading-9 antialiased font-normal">
          Managers won't notice anything but the quality of your work. Your
          colleagues will learn from reading your commits.{" "}
          <strong>You will lead the path to a better codebase</strong>, by
          paving the way. 🧱
        </p>
      </div>
    </div>
  );
}
