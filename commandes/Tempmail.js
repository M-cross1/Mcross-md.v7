"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "tempmail", reaction: "🌟", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*NARUTOV2-MD* Temporary emails,Powered by *⏤͟͟͞͞★Ednut🫶* \n\n ' + "Click the link below to create unlimited TEMPORARY Emails. Powered by *FLASH-MD.*";
    let d = ' https://tempmailpro.app';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/270c5dda834372fd57058.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="🌟"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *NARUTOV2-MD* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *⏤͟͟͞͞★Ednut🫶࿐*'
      let varmess=z+d
      var img='https://telegra.ph/file/270c5dda834372fd57058.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
