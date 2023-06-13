import "./App.css";
import Row from "./Row";
import clipNamesByType, { ClipType } from "./clipNamesByType";
import processFiles from "./processFiles";
import { ChangeEventHandler, useRef, useState } from "react";

const App = () => {
  // Downloaded file name
  const [name, setName] = useState("clip");
  // Auto-level flag
  const [autoLevel, setAutoLevel] = useState(false);

  // Refs to file inputs
  const inputs = {
    spanishPhrase: useRef<HTMLInputElement>(null),
    englishPhrase: useRef<HTMLInputElement>(null),
    spanishPhraseSlowedDown: useRef<HTMLInputElement>(null),
    example1: useRef<HTMLInputElement>(null),
    example2: useRef<HTMLInputElement>(null),
    example3: useRef<HTMLInputElement>(null),
  } as {
    [key: string]: React.RefObject<HTMLInputElement>,
  };
  

  const reqFiles = {
    collider: [
      'spanishPhrase',
      'englishPhrase',
      'spanishPhraseSlowedDown',
      'example1',
      'example2',
      'example3',
    ], 
    looper: [
      'spanishPhrase',
      'spanishPhraseSlowedDown',
    ]
  } as {
    [key: string]: string[],
  };

  const getURLsAndProcess = ({orderString}: {orderString: string}) => {
    const urls: Record<string, string> = {};

    // get the required file list for the selected recording to be produced
    const fileNameList = reqFiles[orderString];

    for (const [key, fileName] of Object.entries(fileNameList)){
      // get the corresponding file from the list
      const files = inputs[fileName].current!.files;

      // if a file has not been submitted
      if (files === null || files.length === 0) {
        alert(`Missing ${clipNamesByType[fileName]}`);
        return;
      }

      const file = files[0];
      const url = URL.createObjectURL(file);

      urls[fileName] = url;
    }

    // Pass off file name and urls
    processFiles({
      autoLevel,
      name,
      urls,
      orderString
    });
  };

  // Toggle auto-level
  const toggleAutoLevel: ChangeEventHandler<HTMLInputElement> = (event) => {
    setAutoLevel(event.target.checked);
  };

  return (
    <div className="App">
      <h2>The Clip Collider</h2>

      {/* Downloaded file name */}
      <Row name="Name">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Row>

      {/* Uploaded files */}
      {Object.entries(clipNamesByType).map(([type, name], index) => {
        if (!(type in inputs)) {
          throw Error(`Missing ref for ${type}`);
        }

        return (
          <Row key={index} name={name}>
            <input ref={inputs[type as ClipType]} type="file" />
          </Row>
        );
      })}

      {/* Auto-level toggle */}
      <Row name="">
        <input type="checkbox" onInput={toggleAutoLevel} /> Auto-level
      </Row>

      {/* Collide button */}
      <Row name="">
        <button onPointerDown={() => getURLsAndProcess({orderString: 'collider'})}>Collide</button>
      </Row>

      {/* Looper button */}
      <Row name="">
        <button onPointerDown={() => getURLsAndProcess({orderString: 'looper'})}>Looper</button>
      </Row>
    </div>
  );
};

export default App;
