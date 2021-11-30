import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  useSandpack,
  useSandpackNavigation,
} from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import { useEffect } from "react";
import "./Playground.css";

// Imported as a string with Webpack's raw-loader
import PlaygroundApp from "./levels/PlaygroundApp";
import PlaygroundAppCSS from "./levels/PlaygroundApp.css";
import PlaygroundAppHTML from "./levels/PlaygroundApp.html";

export function Playground({ exercise, theme = "dark" }) {
  // Imported as strings with Webpack's raw-loader
  const code = require(`./levels/${exercise.path}/playground`).default;
  const tests = require(`./levels/${exercise.path}/tests`).default;

  const extraFiles = exercise.extraFiles ?? [];
  const extraHiddenFiles = exercise.extraHiddenFiles ?? [];
  const files = extraFiles.concat(extraHiddenFiles).reduce((result, file) => {
    result[file] = require(`./levels/${exercise.path}${file}`).default;
    return result;
  }, {});

  return (
    <SandpackProvider
      template="react"
      customSetup={{
        files: {
          ...files,
          ...extraHiddenFiles,
          "/playground.js": code,
          "/tests.js": tests,
          // Replace the default App of the React template
          // The playground app will run the relevant tests
          "/App.js": PlaygroundApp,
          "/styles.css": PlaygroundAppCSS,
          "/public/index.html": PlaygroundAppHTML,
        },
      }}
      // Only show the playground file to the user
      openPaths={["/playground.js", ...extraFiles]}
      activePath="/playground.js"
      // Add a little delay to let keystrokes happen
      recompileMode="delayed"
      recompileDelay={500}
    >
      <SandpackLayout theme={theme === "light" ? "github-light" : "night-owl"}>
        <SandpackCodeEditor
          code={code}
          wrapContent
          showLineNumbers
          showInlineErrors
          showRunButton={false}
          showTabs={extraFiles.length > 0}
          customStyle={{
            height: "75vh",
          }}
        />
        <SimpleCodeViewer exercisePath={exercise.path} theme={theme} />
      </SandpackLayout>
    </SandpackProvider>
  );
}

function SimpleCodeViewer({ exercisePath, theme }) {
  const { sandpack } = useSandpack();
  const { refresh } = useSandpackNavigation();

  // Reset playground when we change exercise
  useEffect(() => {
    sandpack.resetAllFiles();
    refresh();
  }, [exercisePath]);

  return (
    <div className={theme === "dark" ? "Playground" : "Playground light"}>
      <div>
        <SandpackPreview
          showNavigator={false}
          showOpenInCodeSandbox={false}
          showRefreshButton={false}
          customStyle={{
            height: "200px",
          }}
        />
        <button
          onClick={() => {
            sandpack.resetAllFiles();
            refresh();
          }}
        >
          Reset playground
        </button>
      </div>
    </div>
  );
}
