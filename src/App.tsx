import "./App.css";
import * as Tone from "tone";
import Row from "./Row";
import clipNamesByType, { ClipType } from "./clipNamesByType";
import processFiles from "./processFiles";
import { ChangeEventHandler, useRef, useState } from "react";

const App = () => {
  // Downloaded file name
  const [name, setName] = useState("clip");
  
  // Track type
  const [trackType, setTrackType] = useState('phrase')

  // Refs to file inputs
  const inputs = {
    spanishPhrase: useRef<HTMLInputElement>(null),
    spanishPhraseFemale: useRef<HTMLInputElement>(null),
    englishPhrase: useRef<HTMLInputElement>(null),
    example1: useRef<HTMLInputElement>(null),
    example2: useRef<HTMLInputElement>(null),
    example3: useRef<HTMLInputElement>(null),
    example4: useRef<HTMLInputElement>(null),
    example5: useRef<HTMLInputElement>(null),
    example6: useRef<HTMLInputElement>(null),
    example7: useRef<HTMLInputElement>(null),
    example8: useRef<HTMLInputElement>(null),
    example9: useRef<HTMLInputElement>(null),
    example10: useRef<HTMLInputElement>(null),
  } as {
    [key: string]: React.RefObject<HTMLInputElement>,
  };
  

  const reqFiles = {
    flashTrack: [
      'spanishPhrase',
      'englishPhrase',
      'example1',
      'example2',
      'example3',
    ], 
    flashTrackFemale: [
      'spanishPhraseFemale',
      'englishPhrase',
      'example1',
      'example2',
      'example3',
    ], 
    looperTrack: [
      'spanishPhrase',
    ],
    looperTrackFemale: [
      'spanishPhraseFemale'
    ],
    clipTrack: [
      'spanishPhrase',
      'example1',
      'example2',
      'example3',
      'example4',
      'example5',
      'example6',
      'example7',
      'example8',
      'example9',
      'example10',
    ],
  } as {
    [key: string]: string[],
  };

  // retrieves the input files required for the desired track type
  const getURLsAndProcess = ({orderString}: {orderString: string}) => {
    const urls: Record<string, string> = {};

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
      name,
      urls,
      orderString,
      trackType
    });
  };

  const stopRunning = () => {
    console.log('disposing');
    Tone.Transport.stop();
  }

  return (
    <div className="App">
      <h2>The Clip Collider </h2>

      {/* Collide button */}
      <Row name="" id="buttons">
        <button onPointerDown={() => getURLsAndProcess({orderString: 'flashTrack'})}>Flashtrack (M)</button>
        <button onPointerDown={() => getURLsAndProcess({orderString: 'flashTrackFemale'})}>Flashtrack (F)</button>
        <button onPointerDown={() => getURLsAndProcess({orderString: 'looperTrack'})}>Looptrack (M)</button>
        <button onPointerDown={() => getURLsAndProcess({orderString: 'looperTrackFemale'})}>Looptrack (F)</button>
        <button onPointerDown={() => getURLsAndProcess({orderString: 'clipTrack'})}>Cliptrack</button>
      </Row>

      {/* Downloaded file name */}
      <Row name="Name" id="file-name-input">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Row>

      {/* Select track type */}
      <Row name="Track type">
        <select 
          onChange={e => setTrackType(e.target.value)}>
          <option value="phrase">Phrase</option>
          <option value="term">Term</option>
          <option value="conjVerb">Verb - Conjugated</option>
          <option value="infVerb">Verb - Infinitive</option>
        </select>
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

    </div>
  );
};

export default App;
