export function FAQ() {
  return (
    <div className="max-w-[790px] mt-[56px] md:mt-20 m-auto">
      <h2 className="font-medium text-slate-headline text-mobile-h2 lg:text-desktop-h2">
        Frequent Questions
      </h2>
      {/* TODO: what's the difference with Fowler's book? Showing you moves + interactive playground is obvious. More subtle is that I've been a fullstack JS dev for a decade, and I know some patterns are more idiomatic than others. Fowler uses JS snippets to illustrate the moves. I'm tailoring the moves to JS developers. Learning path is adapted, some moves I even dropped. Most moves I show you how to do it with just functions and objects vs. classes—although I also show you how classes can be good in JS when used properly. */}
      <div>
        <dt>Will the content of this course be updated?</dt>
        <dd>
          Yes! I will keep this course up-to-date to stay relevant with new
          techniques and JavaScript syntax. Most of what you'll learn will be
          evergreen anyway, but I'll make sure things don't get outdated. I may
          even add content, if relevant.
        </dd>
      </div>
      <div>
        <dt>What if I don't like the course?</dt>
        <dd>
          <p>
            That's fine, I practice a{" "}
            <strong>100% 30-day money back guarantee</strong>.
          </p>
          <p>
            My goal is to teach you skills that will make you code faster and
            safer, regardless of the framework you're dealing with. I'm sure
            you'll love it!
          </p>
        </dd>
      </div>
      <div>
        <dt>Is this course relevant for me?</dt>
        <dd>
          <p>This course is extremely valuable if you are:</p>
          <ul className="list-disc">
            <li>Working with JavaScript/TypeScript code</li>
            <li>Dealing with code that is poorly tested</li>
            <li>Under pressure to deliver features and bug fixes on time</li>
            <li>In a scenario where "rewrite" isn't an option</li>
          </ul>
          <p>
            You'll find it useful if you want to improve the way you work: adopt
            great habits to make you stand out as a JS developer.
          </p>
          <p>
            If you have read Martin Fowler's Refactoring book (not required) but
            felt you didn't get the most of it, then my course will guide you in
            a comprehensive way through the content.
          </p>
          <p>This course is probably NOT for you if:</p>
          <ul className="list-disc">
            <li>
              You already have read Refactoring and you're applying it in your
              daily job
            </li>
            <li>
              You already adopted the habit of making tiny refactorings to make
              the change easy
            </li>
            <li>
              You already practice micro-committing and the Mikado Method with
              ease
            </li>
          </ul>
        </dd>
      </div>
      <div>
        <dt>What NOT to expect from this course?</dt>
        <dd>
          <p>
            This course will teach you Atomic Refactorings. You'll get into the
            habit of doing safe changes that don't change the behavior of the
            code.
          </p>
          <p>
            That can help you make changes easier. It can also help you refactor
            code enough so you can finally run it under a test harness.
          </p>
          <p>This course will not teach you:</p>
          <ul className="list-disc">
            <li>
              How to do large-scale architectural changes. But you'll know
              atomic moves you may compose into bigger refactorings yourself.
            </li>
            <li>
              Refactorings that are specific to React/Vue/Svelte/Angular/etc.
              I'll teach you to deal with generic JavaScript code, not a
              framework in particular.
            </li>
            <li>How to test JavaScript code.</li>
          </ul>
          <p>
            I recommend you check{" "}
            <a
              href="https://testingjavascript.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Testing JavaScript
            </a>{" "}
            by Kent C. Dodds for that. It's a great complimentary. My course
            helps you make Legacy Code testable, and make changes easier in
            general.
          </p>
        </dd>
      </div>
      <div>
        <dt>Can I share this course with my team?</dt>
        <dd>
          <p>
            If you want to do so, please suggest your teammates purchase their
            own individual access. Maybe you can get your client/employer to
            cover the expense.
          </p>
          <p>
            If you're looking for team discounts, reach me out at
            <a href="mailto:nicolas@understandlegacycode.com">
              nicolas@understandlegacycode.com
            </a>
            .
          </p>
        </dd>
      </div>
      <div>
        <dt>What if I have another question?</dt>
        <dd>
          Send me an email at{" "}
          <a href="mailto:nicolas@understandlegacycode.com">
            nicolas@understandlegacycode.com
          </a>
        </dd>
      </div>
    </div>
  );
}
