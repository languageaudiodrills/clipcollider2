import * as Tone from "tone";
import download from "./download";
import order from "./order";

const record = (p: {
  output: Tone.Volume;
  name: string;
  clips: Tone.Player[];
}) => {
  const { output, name, clips } = p;

  // Try to output an mp4 if possible
  const mp4Type = "audio/mp4";
  const mp4TypeIsSupported = MediaRecorder.isTypeSupported(mp4Type);
  const mimeType = mp4TypeIsSupported ? mp4Type : undefined;

  // Connect to the output and start recording
  let recorder: Tone.Recorder | undefined = new Tone.Recorder({ mimeType });

  output.connect(recorder);
  recorder.start();

  // Play each clip
  let index = -1;

  const playNext = () => {
    index++;

    // Keep playing while there are more clips to play
    if (index < clips.length) {
      const { space = 0 } = order[index];
      const { clip = 0 } = order[index];
      const player = clips[index];

      // get the length of the clip
      const time = player.buffer.duration;

      player.onstop = () => {
        setTimeout(playNext, space * 1000);
      };

      player.start();

      // stop the clip, if specified,
      // at time of playing, plus the length of the clip minus 0.5 seconds
      if( clip !== 0 ){
        player.stop( ("+" + (time-clip).toString()) );
      }
      
    } else {
      // After the last clip, download and clean up
      download({
        recorder: recorder as Tone.Recorder,
        name: `${name}.${mp4TypeIsSupported ? "m4a" : "webm"}`,
      });

      output.disconnect(recorder);
      recorder!.dispose();
      recorder = undefined;
    }
  };

  playNext();
};

export default record;
