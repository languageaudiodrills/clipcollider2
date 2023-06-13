import * as Tone from "tone";
import levelVolumes from "./levelVolumes";
import order from "./order";
import record from "./record";


const processFiles = async (p: {
  autoLevel: boolean;
  name: string;
  urls: Record<string, string>;
  orderString: string;
}) => {
  // get argument valkues  
  const { autoLevel, name, urls, orderString } = p;

  // get the desired order and length
  const selectedOrder = order[orderString];
  let count = Object.values(selectedOrder).length;

  // Make sure Tone.js is ready to go
  await Tone.start();

  const clips: Tone.Player[] = [];
  const output = new Tone.Volume(0).toDestination();

  // Level volumes and record after all players have been loaded
  const onload = async () => {
    count -= 1;
    if (count === 0) {
      if (autoLevel) {
        await levelVolumes( {output: output, clips: clips, order: selectedOrder} );
      }

      record( {output: output, name: name, clips: clips, order: selectedOrder} );
    }
  };

  // Load a player for each item in order
  for (const { key } of selectedOrder) {
    console.log(key);
    // check if clip is already loaded (input files)
    // or if needs to be laoded from audio (prerecorded)
    const url = key in urls ? urls[key] : `audio/${key}.wav`;
    const player = new Tone.Player({
      url,
      onload,
      onerror(error) {
        alert(`Something went wrong for file ${url}! ${error}`);
      },
    });

    player.connect(output);
    clips.push(player);
  }
};

export default processFiles;
