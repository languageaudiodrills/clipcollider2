import * as Tone from "tone";
import levelVolumes from "./levelVolumes";
import order, {Item} from "./order";
import record from "./record";

const swaps = {
  flash: {
    'phrase': [
      'game',
      'game',
      'game',
    ],
    'term': [
      'beep',
      'beep',
      'beep',
    ],
    'verbConj': [
      'punch',
      'punch',
      'punch',
    ],
    'verbInf': [
      'game',
      'game',
      'game',
    ]
  },
  
  looper: {
    'phrase': [
      'game',
      'game',
      'game',
    ],
    'term': [
      'beep',
      'beep',
      'beep',
    ],
    'verbConj': [
      'punch',
      'punch',
      'punch',
    ],
    'verbInf': [
      'game',
      'game',
      'game',
    ]
  }

} as {
  [key: string]: {
    [key: string]: string[];
  },
};


const modifyOrder = async(p: {
  order: Item[];
  orderString: string;
  typeString: string;
}) => {
  // get args
  const {order, orderString, typeString} = p;

  let keyCounter = 0;

  // loop over every key
  for(let i = 0; i < order.length; i++){
    const item = order[i];

    if(item.replace){
      const keyString: string = swaps[orderString][typeString][keyCounter];
      keyCounter++;

      // replace if needed
      const newItem: Item = {
        key: keyString,
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

  console.log('after modifying');
  for( const {key} of selectedOrder){
    console.log(key);
  }


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
