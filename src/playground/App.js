import { useState, useEffect } from "react";
import { Playground } from "./Playground";
import "./App.css";

const idsToExercises = {
  Si6MMV: {
    path: "1-1-rename-variable",
    name: "Rename Variable",
    extraHiddenFiles: ["/lib.js"],
  },
  DH9POt: { path: "1-2-encapsulate-variable", name: "Encapsulate Variable" },
  PYeumj: {
    path: "1-2-encapsulate-variable-class",
    name: "Encapsulate Variable (Class)",
    extraFiles: ["/settings.js"],
  },
  R0nPxq: { path: "1-3-extract-variable", name: "Extract Variable" },
  I76LlX: {
    path: "1-3-extract-variable-multiple-occurrences",
    name: "Extract Variable (multiple occurrences)",
  },
  jo1fMh: { path: "1-4-inline-variable", name: "Inline Variable" },
  Fe5s3I: { path: "1-5-return-modified-value", name: "Return Modified Value" },
  PWqnsy: {
    path: "1-5-return-modified-value-multiple",
    name: "Return Modified Value (multiple values)",
  },
  L8UUYA: {
    path: "1-5-return-modified-value-references",
    name: "Return Modified Value (references)",
  },
  "5BLLWo": {
    path: "2-1-replace-superclass-with-delegate",
    name: "Replace Superclass with Delegate",
  },
  "8VxfHi": {
    path: "2-2-replace-constructor-with-factory",
    name: "Replace Constructor with Factory",
    extraFiles: ["/employee.js"],
  },
  "6amZPv": { path: "2-3-inline-function", name: "Inline Function" },
  VVNcyS: {
    path: "2-4-move-function",
    name: "Move Function",
    extraFiles: ["/helpers.js", "/dates.js"],
    extraHiddenFiles: ["/notify.js", "/luxon.js"],
  },
  "7wnlA0": {
    path: "2-4-move-function-mikado",
    name: "Move Function (using Mikado Method)",
    extraFiles: ["/helpers.js", "/dates.js"],
    extraHiddenFiles: ["/notify.js", "/luxon.js"],
  },
  LcUoXT: {
    path: "2-4-move-function-class",
    name: "Move Function (with classes)",
    extraFiles: ["/task.js", "/dates.js"],
    extraHiddenFiles: ["/notify.js", "/luxon.js"],
  },
  U6d4wi: {
    path: "2-4-move-function-up",
    name: "Move Function (nested function)",
  },
  tmEr0R: {
    path: "2-5-encapsulate-collection",
    name: "Encapsulate Collection",
    extraFiles: ["/questions.js"],
  },
  XtaSuL: {
    path: "2-5-encapsulate-collection-class",
    name: "Encapsulate Collection (Class)",
    extraFiles: ["/questions.js"],
  },
  x5416W: {
    path: "2-6-remove-middle-man",
    name: "Remove Middle Man",
    extraFiles: ["/expense.js"],
  },
  // 'njWjEk': {path: '', name: ''},
  // 'j0Dw3Y': {path: '', name: ''},
  // 'gFA3iq': {path: '', name: ''},
  // 'kwwc4c': {path: '', name: ''},
  // 'd22r73': {path: '', name: ''},
  // 'EcWnH9': {path: '', name: ''},
  // 'UL1swp': {path: '', name: ''},
  // '7XIVGO': {path: '', name: ''},
  // 'gbYVbb': {path: '', name: ''},
  // 'BTpp6w': {path: '', name: ''},
  // 'lGXiOM': {path: '', name: ''},
  // 'dt3ZoK': {path: '', name: ''},
  // 'wwDanD': {path: '', name: ''},
  // '7bRv7r': {path: '', name: ''},
  // 'MwKQup': {path: '', name: ''},
  // 'jlRkMY': {path: '', name: ''},
  // 'QSyWHv': {path: '', name: ''},
  // 'T9hkN5': {path: '', name: ''},
  // 'tJRLZn': {path: '', name: ''},
  // '2q9xIK': {path: '', name: ''},
  // 'e1EOEE': {path: '', name: ''},
  // 'doeoqk': {path: '', name: ''},
  // 'Wfy8Z2': {path: '', name: ''},
  // 'puY4uC': {path: '', name: ''},
  // '1zcLKO': {path: '', name: ''},
  // 'XB5Ucm': {path: '', name: ''},
  // 'b6OZio': {path: '', name: ''},
  // '8m2Yfy': {path: '', name: ''},
  // 'NKFw0Y': {path: '', name: ''},
  // '1f0Ik0': {path: '', name: ''},
  // 'jaDlIN': {path: '', name: ''},
  // 'vLmPjO': {path: '', name: ''},
  // 'NXIXpx': {path: '', name: ''},
  // 'd8p9Vc': {path: '', name: ''},
  // 'xVTjId': {path: '', name: ''},
  // '5oFRfV': {path: '', name: ''},
  // 'xleMD8': {path: '', name: ''},
  // 'hacBV2': {path: '', name: ''},
  // 'GNjpWg': {path: '', name: ''},
  // 'Wttj0T': {path: '', name: ''},
  // 'QMHeCN': {path: '', name: ''}
};
const defaultExercise = idsToExercises.Si6MMV;

export default function App() {
  const [exerciceId, setExerciseId] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setExerciseId(window.location.hash.replace("#", ""));
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      Object.keys(idsToExercises).forEach((id) =>
        console.log(idsToExercises[id].name, window.location.origin + `#${id}`)
      );
    }
  }, []);

  const exercise = idsToExercises[exerciceId] ?? defaultExercise;

  return (
    <div className={theme === "dark" ? "App" : "App light"}>
      <div className="App__Header">
        <h1>
          <span>Refactoring JavaScript</span>
          <br />
          Playground
        </h1>
        <h2>{exercise.name}</h2>

        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <span className="sr-only">
            {theme === "light"
              ? "Switch to dark theme"
              : "Switch to light theme"}
          </span>
          <svg width="34" height="34" viewBox="-5 -5 34 34" strokeWidth="0">
            {theme === "light" ? (
              <g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.353 2.939a1 1 0 01.22 1.08 8 8 0 0010.408 10.408 1 1 0 011.301 1.3A10.003 10.003 0 0112 22C6.477 22 2 17.523 2 12c0-4.207 2.598-7.805 6.273-9.282a1 1 0 011.08.22z"
                ></path>
              </g>
            ) : (
              <g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.929 4.929a1 1 0 011.414 0l.707.707A1 1 0 115.636 7.05l-.707-.707a1 1 0 010-1.414zm14.142 0a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM7 12a5 5 0 1110 0 5 5 0 01-10 0zm-5 0a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm17 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-2.05 4.95a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm-11.314 0a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM12 19a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"
                ></path>
              </g>
            )}
          </svg>
        </button>
      </div>

      <Playground exercise={exercise} theme={theme} />
    </div>
  );
}
