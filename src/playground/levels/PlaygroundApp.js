import { useState, useEffect } from "react";

export default function PlaygroundApp() {
  const [secondsWhileBroken, setSecondsWhileBroken] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      try {
        const { runTests } = require(`./tests`);
        runTests();
        setError(null);
      } catch (error) {
        const isTranspilationError = error.message.endsWith(
          "hasn't been transpiled yet."
        );
        if (isTranspilationError) {
          // Only consider errors in logic
          // Don't count when code can't compile => compiler error is a test itself
          return;
        }

        setError(error);
        setSecondsWhileBroken(secondsWhileBroken + 1);
      }
    }, 1_000);
    return () => clearInterval(interval);
  }, [secondsWhileBroken]);

  const isBroken = error !== null;

  return (
    <>
      <div className="PlaygroundApp">
        <div>
          <p className="Label">Current state</p>
          <p className="Value" style={{ color: isBroken ? "red" : "green" }}>
            {isBroken ? "Broken" : "Working"}
          </p>
        </div>
        <div>
          <p className="Label">Seconds while broken</p>
          <p
            className="Value"
            style={{
              color: isBroken
                ? "red"
                : secondsWhileBroken > 20
                ? "orange"
                : "green",
            }}
          >
            {secondsWhileBroken}
          </p>
        </div>
      </div>

      {process.env.NODE_ENV === "development" && error && (
        <pre style={{ color: "gray" }}>{error?.message}</pre>
      )}
    </>
  );
}
