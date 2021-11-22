export function Dream() {
  return (
    <div className="max-w-[790px] mt-[56px] md:mt-20 m-auto">
      <h2 className="font-medium text-slate-headline text-mobile-h2 lg:text-desktop-h2">
        Never ask for permission to refactor again!
      </h2>
      <div className="max-w-default md:justify-center md:flex md:items-start md:m-auto pt-12">
        <div className="w-full md:flex md:items-center md:justify-center">
          <div>
            <p>
              What if you knew how to clean up code while you deliver value to
              your customers?
            </p>
            <p>
              Imagine being able to dive into any kind of JavaScript codebase,
              knowing that you can fix problems safely. You come in and know
              that you can:
            </p>
            <ol className="list-numeric pl-4 italic">
              <li>Detect code smells and address them</li>
              <li>Make safe changes without having tests</li>
              <li>Update the code so we can easily write the missing tests</li>
              <li>
                Stop refactoring at any time, change my mind, or just ship!
              </li>
            </ol>
            <p>
              Refactoring code is what you do <u>while shipping changes</u>. You
              don't need to ask for permission. Each new feature is now an
              opportunity to make the code easier to maintain!
            </p>
            <p>
              You didn't suddenly become a genius developer. But you master safe
              refactoring techniques. From the outside, it just looks
              impressive!
            </p>
          </div>
        </div>
        <div className="relative w-full mt-12 md:mt-0">
          <img src="/assets/jenga/3-success-2.gif" alt="" />
        </div>
      </div>

      <h2 className="font-medium text-slate-headline text-mobile-h2 lg:text-desktop-h2 mt-12">
        What if refactoring was second nature to you?
      </h2>
      <div className="max-w-default md:justify-center md:flex md:items-start md:m-auto pt-12">
        <div className="relative w-full mt-12 md:mt-0">
          <img src="/assets/jenga/3-success.gif" alt="" />
        </div>
        <div className="w-full md:flex md:items-center md:justify-center">
          <div className="md:mt-12">
            <p>You know what doesn't take you much time?</p>
            <p>
              Saving a file you changed. Switch to your browser to see these
              changes. Opening up your terminal. Creating a new component.
            </p>
            <p>
              These actions are <strong>small</strong> and{" "}
              <strong>you're used to doing them</strong>. You probably don't
              even think about it anymore!
            </p>
            <p>
              Imagine you knew <strong>refactoring moves</strong> that would be{" "}
              <strong>fast and safe</strong> to execute. You'd get so familiar
              with them that you would do them <em>instinctively</em>.
            </p>
            <p>
              How would it change the way you work? How would you feel if you
              could ship features in time AND improve the code?
            </p>
            <p>
              Sure. Your teammates may still not care and keep creating a mess
              behind themselves.
            </p>
            <p>
              But would you care if you could recover from any mayhem in front
              of you?
            </p>
            <p>
              Managers won't notice anything but the quality of your work. Your
              colleagues will learn from reading your commits. You will lead the
              path to a better codebase, by paving the way. 🧱
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
