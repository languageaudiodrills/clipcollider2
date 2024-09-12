import * as Tone from "tone";
import download from "./download";

// sum function
const sum = (previous: number, current: number) => previous + current;

const calcRMS = ( p: {
  audioData: Float32Array
}) => {
  const { audioData } = p;
  let sumOfSquares = 0;
  const totalSamples = audioData.length;
  
  // Sum the squares of all amplitude values
  for (let i = 0; i < totalSamples; i++) {
    sumOfSquares += audioData[i] * audioData[i];
  }

  // Calculate the RMS and convet to db
  const rms = Math.sqrt(sumOfSquares / totalSamples);
  const rmsDb = 20 * Math.log10(rms);

  return rmsDb;
}


const playClip = async (player: Tone.Player, time: number, clip: number, space: number): Promise<void> => {
  return new Promise((resolve) => {
    // Set up the player stop event listener
    player.onstop = () => {
      // Delay execution based on the 'space' parameter
      setTimeout(() => {
        resolve(); // Resolve the promise when the delay is complete
      }, space * 1000);
    };

    // Start recording/playing
    player.start();

    // Stop the clip at the appropriate time if `clip` is specified
    if (clip !== 0) {
      player.stop("+" + (time - clip).toString());
    }
  });
}


const record = async (p: {
  output: Tone.Volume;
  name: string;
  clips: Tone.Player[];
  order: any;
}) => {
  console.log('1')
  const { output, name, clips, order } = p;

  // Try to output an mp4 if possible
  const mp4Type = "audio/mp4";
  const mp4TypeIsSupported = MediaRecorder.isTypeSupported(mp4Type);
  const mimeType = mp4TypeIsSupported ? mp4Type : undefined;

  // Connect to the output and start recording
  let recorder: Tone.Recorder | undefined = new Tone.Recorder({ mimeType });

  recorder.start();

  // Play each clip
  let index = 0;
  
  // Keep playing while there are more clips to play
  while( index < clips.length ) {
    const { space = 0 } = order[index];
    const { clip = 0 } = order[index];
    const { key = "none"} = order[index];
    const { targetVol = -16 }  = order[index];
    const player = clips[index];
  
    // get the length of the clip
    const time = player.buffer.duration;
  
    // calculate the RMS in db, adjust gain 
    const clipVol = calcRMS({audioData: player.buffer.getChannelData(0)});
    const gainNode = new Tone.Gain(Tone.dbToGain(targetVol - clipVol));
  
    // connect gain node
    player.connect(gainNode);
    gainNode.connect(recorder);
    gainNode.connect(output);
  
    console.log(`Adjusting volume for ${key} to ${targetVol}, prev: ${clipVol}, adjust by: ${targetVol - clipVol}`);
  
    await playClip(player, time, clip, space);
    
    index++;
  }

  // After the last clip, download and clean up
  download({
    recorder: recorder as Tone.Recorder,
    name: `${name}.${mp4TypeIsSupported ? "m4a" : "webm"}`,
  });

  recorder!.dispose();
};

export default record;
