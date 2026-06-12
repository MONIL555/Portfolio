import fs from 'fs';

const lotties = [
  { name: 'checkmark.json', url: 'https://assets3.lottiefiles.com/packages/lf20_ujndnpdo.json' },
  { name: 'pulse.json', url: 'https://assets2.lottiefiles.com/packages/lf20_7wzqrg0o.json' },
  { name: 'arrow_bounce.json', url: 'https://assets4.lottiefiles.com/packages/lf20_hve0h5.json' },
  { name: 'loader.json', url: 'https://assets10.lottiefiles.com/packages/lf20_b0qtx88i.json' }
];

if (!fs.existsSync('src/assets/lottie')) fs.mkdirSync('src/assets/lottie', { recursive: true });

async function run() {
  for (const {name, url} of lotties) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        fs.writeFileSync(`src/assets/lottie/${name}`, JSON.stringify(data));
        console.log(`Downloaded ${name}`);
      } else {
        console.log(`Failed to download ${name}`);
        fs.writeFileSync(`src/assets/lottie/${name}`, JSON.stringify({"v":"5.5.2","fr":30,"ip":0,"op":60,"w":500,"h":500,"nm":"Empty","ddd":0,"assets":[],"layers":[]}));
      }
    } catch(e) {
      console.log(`Error ${name}: ${e.message}`);
      fs.writeFileSync(`src/assets/lottie/${name}`, JSON.stringify({"v":"5.5.2","fr":30,"ip":0,"op":60,"w":500,"h":500,"nm":"Empty","ddd":0,"assets":[],"layers":[]}));
    }
  }
}

run();
