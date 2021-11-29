export function WhoAmI() {
  return (
    <div className="px-6 md:px-0 max-w-[910px] mt-[56px] md:mt-20 m-auto ">
      <div className="md:flex">
        <div className="mt-0 md:mt-10">
          <img
            src="/assets/profile.jpg"
            alt="Nicolas Carlo"
            width="400"
            height="400"
            className="m-auto md:m-0"
            style={{
              borderRadius: "65% 40% 40% 25%",
              borderStyle: "outset",
              borderWidth: 6,
              borderColor: "rgb(255, 0, 115)",
            }}
          />
        </div>
        <div className="w-full md:w-4/5 md:pl-12">
          <p className="mt-6 text-xl leading-9 antialiased font-normal">
            Hey, I'm{" "}
            <a
              href="https://twitter.com/nicoespeon"
              target="_blank"
              rel="noreferrer noopener"
            >
              Nicolas Carlo
            </a>
             
            <span role="img" aria-label="Waving hand">
              👋
            </span>
          </p>
          <p className="mt-6 text-xl leading-9 antialiased font-normal">
            I'm the author of{" "}
            <a
              href="https://understandlegacycode.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              understandlegacycode.com
            </a>{" "}
            and the{" "}
            <a
              href="https://understandlegacycode.com/first-aid-kit"
              target="_blank"
              rel="noreferrer noopener"
            >
              Legacy Code: First Aid Kit
            </a>
            .
          </p>
          <p className="mt-6 text-xl leading-9 antialiased font-normal">
            I started my career on the front-end, building jQuery plugins and
            UIs. I progressively included back-end when Node.js became a thing.
            I've been a freelancer, consultant, and Tech Lead on very different
            projects. I pushed many styles of SPA to production, from
            Backbone.js to Angular, passing by Cycle.js… These past 4 years have
            mostly been React. 😃
          </p>
        </div>
      </div>

      <div className="w-full">
        <p className="mt-6 text-xl leading-9 antialiased font-normal">
          I was a big Webstorm user but I moved to VS Code because I prefer how
          versatile it is.
        </p>
        <p className="mt-6 text-xl leading-9 antialiased font-normal">
          I've had to deal with so many legacy JS code that I started building
          my own{" "}
          <a
            href="https://marketplace.visualstudio.com/items?itemName=nicoespeon.abracadabra"
            target="_blank"
            rel="noreferrer noopener"
          >
            VS Code extension for automated refactorings
          </a>
          ! It's all open-source.
        </p>
        <p className="mt-6 text-xl leading-9 antialiased font-normal">
          I like when things are <u>practical</u>. I do my best to give tricks
          you can use, and tips that can help. I think practice makes perfect.
          Do early, do often, iterate from the feedback!
        </p>
        <p className="mt-6 text-xl leading-9 antialiased font-normal">
          That's why, with this course, I teach what I learned in a way so you
          can <strong>quickly get concrete results</strong> 🏃
        </p>
        <div className="flex justify-end mb-12 mt-6">
          <img src="/assets/signature.png" alt="Nicolas" width="250" />
        </div>
      </div>
    </div>
  );
}
