import crypto from 'crypto';
import * as secp256k1 from '@transmute/did-key-secp256k1';
const main = async ()=> {
const { didDocument, keys } = await secp256k1.generate(
  {
    secureRandom: () => {
      return crypto.randomBytes(32);
    },
  },
  { accept: 'application/did+json' }
);
console.log( JSON.stringify({ didDocument }, null ,2))
console.log( JSON.stringify({ keys }, null , 2))
}
main().then(r => console.log('run'))