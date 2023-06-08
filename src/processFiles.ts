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
  
  const { autoLevel, name, urls, orderString } = p;

  // NOTE: MAGIC NUMBER
  // The first number comes from the number of files in public/audio
  // let count = 12 + Object.values(selectedOrder).length;

  const selectedOrder = (orderString === 'collide')? order.collide : order.looper;
  
  let count = Object.values(selectedOrder).length;

  console.log(selectedOrder);

  // Make sure Tone.js is ready to go
  await Tone.start();

  const clips: Tone.Player[] = [];
  const output = new Tone.Volume(0).toDestination();

  // After all players have been loaded,
  // level volumes and record
  const onload = async () => {
    count -= 1;
    if (count === 0) {
      if (autoLevel) {
        await levelVolumes( {output: output, clips: clips, order: selectedOrder} );
      }

      record( {output: output, name: name, clips: clips, order: selectedOrder} );
    }
  };
  console.log('1111111');

  // Load a player for each item in order
  for (const { key } of selectedOrder) {
    console.log(key);
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
