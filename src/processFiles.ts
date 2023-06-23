import * as Tone from "tone";
import levelVolumes from "./levelVolumes";
import order, {Item} from "./order";
import record from "./record";


const modifyOrder = async(p: {
  order: Item[];
  orderString: string;
  typeString: string;
}) => {
  // get args
  const {order, orderString, typeString} = p;

  // loop over every key
  for(let i = 0; i < order.length; i++){
    const item = order[i];

    if(item.replace){
      // the order string is the first folder, then the sound clip that is being played is the second
      // and the third is according to the track type
      // ex:              flashTrack    /       intros          /       conjVerb
      const fileString =  orderString + "/" +   order[i].key +  "/"  +  typeString;

      console.log(fileString);

      // replace if needed
      const newItem: Item = {
        key: fileString,
      }
      order[i] = newItem; 
    }
  }
}


const processFiles = async (p: {
  autoLevel: boolean;
  name: string;
  urls: Record<string, string>;
  orderString: string;
  trackType: string;
}) => {
  // get argument values  
  const { autoLevel, name, urls, orderString, trackType } = p;

  // get the desired order and length
  const selectedOrder = order[orderString];
  let count = Object.values(selectedOrder).length;

  
  // make swaps to order
  modifyOrder({order: selectedOrder, orderString: orderString, typeString: trackType});

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
