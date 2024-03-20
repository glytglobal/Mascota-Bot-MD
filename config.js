import { watchFile, unwatchFile } from "fs"  
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from "cheerio"
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"
import { en, es, pt } from "./lib/idiomas/total-idiomas.js"

// ✿ 𝗣𝗥𝗢𝗣𝗜𝗘𝗧𝗔𝗥𝗜𝗢/𝗢𝗪𝗡𝗘𝗥 ✿
// ◉━━━━━ AÑADA LOS NUMEROS A SER PROPIETARIO/A | ADD THE NUMBERS TO BE OWNER ━━━━◉

global.owner = [
 ["99999999", '🌟 𝗠𝗮𝘀𝗰𝗼𝘁𝗮-𝗕𝗼𝘁-𝗠𝗗 🌟', true], 
 ["5493795319022", '👑 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 👑', true],
 ["573013482814", '𝗗𝗶𝗲𝗴𝗼 🐈', true],
 ["51955918117", '𝗗𝗮𝗻𝗶𝗲𝗹 🇦🇱', true]]

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.mods = []
global.prems = ["5493795319022"]
//key de violetics
global.Key360 = ["964f-0c75-7afc"]
   
  
// ◉━━━━━ IDIOMA : LENGUAJE ━━━━◉
// AGREGA EL IDIOMA QUE QUIERES QUE TENGA MASCOTA-BOT-MD
// ADD THE LANGUAGE YOU WANT MASCOTA-BOT-MD TO HAVE
//
//  es = ESPAÑOL/ESP         en = ENGLISH/ENG     
//             pt = PORTUGUÊS/BR

global.lenguajeGB = es // IDIOMA DE MASCOTA-BOT-MD EJEMPLO: ES | EN | PT

// ━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.openai_key = 'sk-0'
/* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */

global.openai_org_id = 'org-3'
/* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */

global.keysZens = ["LuOlangNgentot", "c2459db922", "37CC845916", "6fb0eff124", "hdiiofficial", "fiktod", "BF39D349845E", "675e34de8a", "0b917b905e6f"]
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ["29d4b59a4aa687ca", "5LTV57azwaid7dXfz5fzJu", "cb15ed422c71a2fb", "5bd33b276d41d6b4", "HIRO", "kurrxd09", "ebb6251cc00f9c63"]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ["5VC9rvNx", "cfALv5"]
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = "Mascota"
global.itsrose = ["4b146102c4d500809da9d1ff"]
global.baileys = "@whiskeysockets/baileys"

global.APIs = { 
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',	
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': `${lolkeysapi}`,
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren'
};

global.mods = []


/*************************/
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

// ◉━━━━━ VERSION | NOMBRE | CUENTAS ━━━━◉

global.official = [ // AGREGATE SI ERES OWNER 
["5493795319022", '𝗚𝗟 𝗬𝗧 𝗠𝗫', 1],
["573013482814", '𝗗𝗶𝗲𝗴𝗼 🐈', 1],
["51955918117", '𝗗𝗮𝗻𝗶𝗲𝗹 🇦🇱']]

global.mail = '' // AGREGA TU CORREO
global.desc = '' // AGREGA UNA DESCRIPCION CORTA
global.desc2 = '' // AGREGA UNA DESCRIPCIÓN LARGA (SOLO SE APLICARÁ SI SU WHATSAPP NO TIENE DESCRIPCIÓN)
global.country = '' // AGREGA TU PAIS EJEMPLO: 🇦🇷

global.packname = "𝐌𝐚𝐬𝐜𝐨𝐭𝐚-𝐁𝐨𝐭-𝐌𝐃 😼" // PACKNAME - NOMBRE DEL PACK
global.author = "𝐁𝐘 𝐆𝐋 𝐘𝐓 𝐌𝐗" // AUTHOR PACK - AUTOR DEL PACK

//⊱ ━━━━━.⋅ VERSION | NOMBRE | CUENTAS ⋅.━━━━ ⊰

global.vs = "1.0.0"
global.vsJB = "1.2 (Beta)"

global.gt = "𝙈𝙖𝙨𝙘𝙤𝙩𝙖-𝘽𝙤𝙩-𝙈𝘿 😼" // NOMBRE DE TU BOT
global.yt = "https://www.youtube.com/@GLYTMX" // CANAL DE YOUTUBE
global.yt2 = "https://www.youtube.com/shorts/"
global.ig = "https://www.instagram.com/"
global.md = "https://github.com/glytglobal/Mascota-Bot-MD/"
global.fb = "https://www.facebook.com/WilsonWaoz"

global.cnl = 'https://whatsapp.com/channel/'
global.nna = 'https://whatsapp.com/channel/'
global.nn2 = 'https://whatsapp.com/channel/'
global.nna2 = 'https://chat.whatsapp.com/'
global.nn = 'https://chat.whatsapp.com/'
global.nnn = 'https://chat.whatsapp.com/'
global.nnnt = 'https://chat.whatsapp.com/'
global.nnntt = 'https://chat.whatsapp.com/'
global.nnnttt = 'https://chat.whatsapp.com/LgxLCZwejjSFaeREilUo7r' //Grupo 5 - Anexados del infierno
global.nnnttt1 = 'https://chat.whatsapp.com/'
global.nnnttt2 = 'https://chat.whatsapp.com/'
global.nnnttt3 = 'https://chat.whatsapp.com/'
global.nnnttt4 = 'https://chat.whatsapp.com/'
global.nnnttt5 = 'https://chat.whatsapp.com/'
global.paypal = 'https://paypal.me/WilsonWaoz'
global.asistencia = 'Wa.me/5493795319022' // CREADOR DE MASCOTA
global.asistencia2 = 'Wa.me/5492964650915' // FIEL COLABORADOR MASCOTA
global.curiosity = 'https://github.com/AzamiJS/CuriosityBot-MD'
global.katashibot = 'https://github.com/KatashiFukushima/KatashiBot-MD/'
global.Shana = 'https://github.com/DanielDiod/DokiBot'

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━━━━━━━━━.⋅ DATOS ⋅.━━━━━━━━━━━━━━ ⊰

global.rg = '╰⊱✅⊱ 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 | 𝐑𝐄𝐒𝐔𝐋𝐓 ⊱✅⊱╮\n\n'
global.resultado = rg

global.ag = '╰⊱⚠️⊱ 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀 | 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 ⊱⚠️⊱╮\n\n'
global.advertencia = ag

global.iig = '╰⊱❕⊱ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 | 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 ⊱⊱╮\n\n'
global.informacion = iig

global.fg = '╰⊱❌⊱ 𝐄𝐑𝐑𝐎𝐑 - 𝐅𝐀𝐋𝐋𝐎 ⊱❌⊱╮\n\n'
global.fallo = fg

global.mg = '╰⊱❗️⊱ 𝐋𝐎 𝐔𝐒𝐎 𝐌𝐀𝐋 | 𝐔𝐒𝐄𝐃 𝐈𝐓 𝐖𝐑𝐎𝐍𝐆 ⊱❗️⊱╮\n\n'
global.mal = mg

global.eeg = '╰⊱🜲⊱ 𝐑𝐄𝐏𝐎𝐑𝐓𝐄 | 𝐑𝐄𝐏𝐎𝐑𝐓 ⊱🜲⊱╮\n\n'
global.envio = eeg

global.eg = '╰⊱💞⊱ 𝐄𝐗𝐈𝐓𝐎 | 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 ⊱💞⊱╮\n\n'
global.exito = eg

//𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


// ◉━━━━━ INFORMACION | INFORMATION ━━━━◉

global.wm = "𝙈𝙖𝙨𝙘𝙤𝙩𝙖-𝘽𝙤𝙩-𝙈𝘿 😼"
global.igfg = "𝙈𝙖𝙨𝙘𝙤𝙩𝙖-𝘽𝙤𝙩-𝙈𝘿 😼" 
global.wait = "*⌛ _Cargando | Charging..._ ▬▭▭▭▭▭▭*"
global.waitt = "*⌛ _Cargando | Charging..._ ▬▬▭▭▭*"
global.waittt = "*⌛ _Cargando | Charging..._ ▬▬▬▬▭▭*"
global.waitttt = "*⌛ _Cargando | Charging..._ ▬▬▬▬▬▬▭*"
global.nomorown = "5493795319022"
global.pdoc = ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"];

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


// ◉━━━━━ IMG ━━━━◉

global.imagen1 = fs.readFileSync("./Menú2.jpg")
global.imagen2 = fs.readFileSync("./media/menus/img1.jpg")
global.imagen3 = fs.readFileSync("./media/menus/img2.jpg")
global.imagen4 = fs.readFileSync("./media/menus/img3.jpg")
global.imagen5 = fs.readFileSync("./media/menus/img4.jpg")
global.imagen6 = fs.readFileSync("./media/menus/img5.jpg")
global.imagen7 = fs.readFileSync("./media/menus/img6.jpg")
global.imagen8 = fs.readFileSync("./media/menus/img7.jpg")

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//━━━━━━━━━━━━━━ IMG ━━━━━━━━━

global.img = 'https://telegra.ph/file/38cd8c6bea67860878901.jpg'
global.img2 = 'https://telegra.ph/file/38cd8c6bea67860878901.jpg'

global.img3 = 'https://telegra.ph/file/b296c5cf0dfbc3e944c97.jpg' // premium
global.img4 = 'https://telegra.ph/file/b296c5cf0dfbc3e944c97.jpg' // premium

global.img5 = 'https://telegra.ph/file/041c8bb3213da3a0ef410.jpg'
global.img6 = 'https://telegra.ph/file/041c8bb3213da3a0ef410.jpg'
global.img7 = 'https://telegra.ph/file/424dd6d15bd2aef9aaf1d.jpg'
global.img8 = 'https://telegra.ph/file/424dd6d15bd2aef9aaf1d.jpg'
global.img9 = 'https://telegra.ph/file/9db73a2463e7889c68c2f.jpg'

global.img10 = 'https://telegra.ph/file/9db73a2463e7889c68c2f.jpg'
global.img11 = 'https://telegra.ph/file/c5fa3b0c75a97f1a310d3.jpg'
global.img12 = 'https://telegra.ph/file/c5fa3b0c75a97f1a310d3.jpg'
global.img13 = 'https://telegra.ph/file/1e7e54a16dd6fd59c8d22.jpg'
global.img14 = 'https://telegra.ph/file/1e7e54a16dd6fd59c8d22.jpg'
global.img15 = 'https://telegra.ph/file/c314943b11806b25803f3.jpg'

global.img16 = 'https://telegra.ph/file/c314943b11806b25803f3.jpg' // +18

global.img17 = 'https://telegra.ph/file/38cd8c6bea67860878901.jpg'
global.img18 = 'https://telegra.ph/file/1e7e54a16dd6fd59c8d22.jpg'

global.logogit = 'https://telegra.ph/file/75bbb5686e0dff952e79c.jpg'

global.welgata = [ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb]
global.redesMenu = [cnl, nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt1, nnnttt2, nnnttt3, nnnttt4, md, ig, paypal, yt, asistencia, fb]
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18]
global.gataVidMenu = ['https://telegra.ph/file/93af7de92aa4e791b77b4.mp4', 'https://telegra.ph/file/a848eeb479e662f2e3fab.mp4', 'https://telegra.ph/file/117391db9016a51f73618.mp4']
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


// ◉━━━━━ RPG ━━━━◉

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='];

global.cmenut = "❖––––––『"
global.cmenub = "┊✦ "
global.cmenuf = "╰━═┅═━––––––๑\n"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
 
global.dmenut = "*❖─┅──┅〈*"
global.dmenub = "*┊»*"
global.dmenub2 = "*┊*"
global.dmenuf = "*╰┅────────┅✦*"
global.htjava = "⫹⫺"

global.htki = "*⭑•̩̩͙⊱•••• ☪*"
global.htka = "*☪ ••••̩̩͙⊰•⭑*"

global.comienzo = "• • ◕◕════"
global.fin = " • •"

global.botdate = `⫹⫺ Date :  ${moment.tz('Argentina/Buenos Aires').format('DD/MM/YY')}`; // Argentina/Cordoba
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('Argentina/Buenos Aires').format('HH:mm:ss')}`;// Argentina/Buenos Aires
global.fgif = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': bottime,
                        'jpegThumbnail': fs.readFileSync('./Menú2.jpg')
                               }
                              }
                             };

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


global.multiplier = 150 // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup 

// 🜲 EMOJIS RPG - REFERENCIAS 🜲
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      level: '🧬 Nivel : Level',
      limit: lenguajeGB.eDiamante(),
      exp: lenguajeGB.eExp(),
      bank: '🏦 Banco : Bank',
      diamond: lenguajeGB.eDiamantePlus(),
      health: '❤️ Salud : Health',
      kyubi: lenguajeGB.eMagia(),
      joincount: lenguajeGB.eToken(),
      emerald: lenguajeGB.eEsmeralda(),
      stamina: lenguajeGB.eEnergia(),
      role: '💪 Rango | Role',
      premium: '🎟️ Premium',
      pointxp: '📧 Puntos Exp : Point Xp',
      gold: lenguajeGB.eOro(),
      
      trash: lenguajeGB.eBasura(),
      crystal: '🔮 Cristal : Crystal',
      intelligence: '🧠 Inteligencia : Intelligence',
      string: lenguajeGB.eCuerda(),
      keygold: '🔑 Llave de Oro : Key Gold',
      keyiron: '🗝️ Llave de Hierro : Key Iron',
      emas: lenguajeGB.ePinata(),
      fishingrod: '🎣 Caña de Pescar : Fishing Rod',
      gems: '🍀 Gemas : Gemas',
      magicwand: '⚕️ Varita Mágica : Magic Wand',
      mana: '🪄 Hechizo : Spell',
      agility: '🤸‍♂️ Agilidad : Agility',
      darkcrystal: '♠️ Cristal Oscuro : Dark Glass',
      iron: lenguajeGB.eHierro(),
      rock: lenguajeGB.eRoca(),
      potion: lenguajeGB.ePocion(),
      superior: '💼 Superior : Superior',
      robo: '🚔 Robo : Robo',
      upgrader: '🧰 Aumentar Mejora : Upgrade',
      wood: lenguajeGB.eMadera(),
      
      strength: '🦹‍ ♀️ Fuerza : Strength',
      arc: '🏹 Arco : Arc',
      armor: '🥼 Armadura : Armor',
      bow: '🏹 Super Arco : Super Bow',
      pickaxe: '⛏️ Pico : Peak',
      sword: lenguajeGB.eEspada(),
      
      common: lenguajeGB.eCComun(),
      uncoommon: lenguajeGB.ePComun(),
      mythic: lenguajeGB.eCMistica(),
      legendary: lenguajeGB.eClegendaria(),
      petFood: lenguajeGB.eAMascots(), //?
      pet: lenguajeGB.eCMascota(),//?
      
      bibitanggur: lenguajeGB.eSUva(), bibitapel: lenguajeMC.eSManzana(), bibitjeruk: lenguajeMC.eSNaranja(), bibitmangga: lenguajeMC.eSMango(), bibitpisang: lenguajeMC.eSPlatano(),
      
      ayam: '🐓 Pollo : Chicken',
      babi: '🐖 Puerco : Pig',
      Jabali: '🐗 Jabalí : Wild Boar',
      bull: '🐃 Toro : Bull',    
      buaya: '🐊 Cocodrilo : Alligator',    
      cat: lenguajeGB.eGato(),    
      centaur: lenguajeGB.eCentauro(),
      chicken: '🐓 Pollo : Chicken',
      cow: '🐄 Vaca : Cow', 
      dog: lenguajeGB.ePerro(),
      dragon: lenguajeGB.eDragon(),
      elephant: '🐘 Elefante : Elephant',
      fox: lenguajeGB.eZorro(),
      giraffe: '🦒 Jirafa : Giraffe',
      griffin: lenguajeGB.eAve(), //Mascota : Griffin',
      horse: lenguajeGB.eCaballo(),
      kambing: '🐐 Cabra : Goat',
      kerbau: '🐃 Búfalo : Buffalo',
      lion: '🦁 León : Lion',
      money: lenguajeGB.eGataCoins(),
      monyet: '🐒 Mono : Monkey',
      panda: '🐼 Panda',
      snake: '🐍 Serpiente : Snake',
      phonix: '🕊️ Fénix : Phoenix',
      rhinoceros: '🦏 Rinoceronte : Rhinoceros',
      wolf: lenguajeGB.eLobo(),
      tiger: '🐅 Tigre : Tiger',
      cumi: '🦑 Calamar : Squid',
      udang: '🦐 Camarón : Shrimp',
      ikan: '🐟 Pez : Fish',
      
      fideos: '🍝 Fideos : Noodles',
      ramuan: '🧪 Ingrediente NOVA : Ingredients',
      knife: '🔪 Cuchillo : Knife'
    };
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
};

global.rpgg = { // SOLO EMOJIS
  emoticon(string) {
    string = string.toLowerCase();
    let emott = {
      level: '🧬', limit: '💎', exp: '⚡', bank: '🏦',
      diamond: '💎+', health: '❤️', kyubi: '🌀', joincount: '🪙',
      emerald: '💚', stamina: '✨', role: '💪', premium: '🎟️',
      pointxp: '📧', gold: '👑',
      
      trash: '🗑', crystal: '🔮', intelligence: '🧠', string: '🕸️', keygold: '🔑',
      keyiron: '🗝️', emas: '🪅', fishingrod: '🎣', gems: '🍀', magicwand: '⚕️',
      mana: '🪄', agility: '🤸‍♂️', darkcrystal: '♠️', iron: '⛓️', rock: '🪨',
      potion: '🥤', superior: '💼', robo: '🚔', upgrader: '🧰', wood: '🪵',
      
      strength: '🦹‍ ♀️', arc: '🏹', armor: '🥼', bow: '🏹', pickaxe: '⛏️', sword: '⚔️',
      
      common: '📦', uncoommon: '🥡', mythic: '🗳️', legendary: '🎁', petFood: '🍖', pet: '🍱',
      
      bibitanggur: '🍇', bibitapel: '🍎', bibitjeruk: '🍊', bibitmangga: '🥭', bibitpisang: '🍌',
      
      ayam: '🐓', babi: '🐖', Jabali: '🐗', bull: '🐃', buaya: '🐊', cat: '🐈',      
      centaur: '🐐', chicken: '🐓', cow: '🐄', dog: '🐕', dragon: '🐉', elephant: '🐘',
      fox: '🦊', giraffe: '🦒', griffin: '🦅', //Mascota : Griffin',
      horse: '🐎', kambing: '🐐', kerbau: '🐃', lion: '🦁', money: '🐱', monyet: '🐒', panda: '🐼',
      snake: '🐍', phonix: '🕊️', rhinoceros: '🦏',
      wolf: '🐺', tiger: '🐅', cumi: '🦑', udang: '🦐', ikan: '🐟',
      
      fideos: '🍝', ramuan: '🧪', knife: '🔪'
    };
    let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emott[results[0][0]];
  }
};


global.rpgshop = { // TIENDA
  emoticon(string) {
    string = string.toLowerCase();
    let emottt = {
      exp: lenguajeGB.eExp(), limit: lenguajeGB.eDiamante(), diamond: lenguajeGB.eDiamantePlus(), joincount: lenguajeGB.eToken(),
      emerald: lenguajeGB.eEsmeralda(), berlian: lenguajeGB.eJoya(), kyubi: lenguajeGB.eMagia(), gold: lenguajeGB.eOro(),
      money: lenguajeGB.eMascotaCoins(), tiketcoin: lenguajeGB.eMascotaTickers(), stamina: lenguajeGB.eEnergia(),
            
      potion: lenguajeGB.ePocion(), aqua: lenguajeGB.eAgua(), trash: lenguajeGB.eBasura(), wood: lenguajeGB.eMadera(),
      rock: lenguajeGB.eRoca(), batu: lenguajeGB.ePiedra(), string: lenguajeGB.eCuerda(), iron: lenguajeGB.eHierro(),
      coal: lenguajeGB.eCarbon(), botol: lenguajeGB.eBotella(), kaleng: lenguajeGB.eLata(), kardus: lenguajeGB.eCarton(),
      
      eleksirb: lenguajeGB.eEletric(), emasbatang: lenguajeGB.eBarraOro(), emasbiasa: lenguajeGB.eOroComun(), rubah: lenguajeGB.eZorroG(),
      sampah: lenguajeGB.eBasuraG(), serigala: lenguajeGB.eLoboG(), kayu: lenguajeGB.eMaderaG(), sword: lenguajeGB.eEspada(),
      umpan: lenguajeGB.eCarnada(), healtmonster: lenguajeGB.eBillete(), emas: lenguajeGB.ePinata(), pancingan: lenguajeGB.eGancho(),
      pancing: lenguajeGB.eCanaPescar(),
       
      common: lenguajeGB.eCComun(), uncoommon: lenguajeGB.ePComun(), mythic: lenguajeGB.eCMistica(),
      pet: lenguajeGB.eCMascota(),//?
      gardenboxs: lenguajeGB.eCJardineria(),//?
      legendary: lenguajeGB.eClegendaria(),
      
      anggur: lenguajeGB.eUva(), apel: lenguajeGB.eManzana(), jeruk: lenguajeGB.eNaranja(), mangga: lenguajeMC.eMango(), pisang: lenguajeGB.ePlatano(),
      
      bibitanggur: lenguajeGB.eSUva(), bibitapel: lenguajeGB.eSManzana(), bibitjeruk: lenguajeGB.eSNaranja(), bibitmangga: lenguajeGB.eSMango(), bibitpisang: lenguajeGB.eSPlatano(),
      
      centaur: lenguajeGB.eCentauro(), griffin: lenguajeGB.eAve(), kucing: lenguajeGB.eGato(), naga: lenguajeGB.eDragon(),
      fox: lenguajeGB.eZorro(), kuda: lenguajeGB.eCaballo(), phonix: lenguajeGB.eFenix(), wolf: lenguajeGB.eLobo(),
      anjing: lenguajeGB.ePerro(),
 
      petFood: lenguajeGB.eAMascots(), //?
      makanancentaur: lenguajeGB.eCCentauro(), makanangriffin: lenguajeGB.eCAve(),
      makanankyubi: lenguajeGB.eCMagica(), makanannaga: lenguajeGB.eCDragon(), makananpet: lenguajeGB.eACaballo(), makananphonix: lenguajeGB.eCFenix()
    }
    let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emottt[results[0][0]];
  }
};

global.rpgshopp = { // TIENDA
  emoticon(string) {
    string = string.toLowerCase();
    let emotttt = {
      exp: '⚡', limit: '💎', diamond: '💎+', joincount: '🪙',
      emerald: '💚', berlian: '♦️', kyubi: '🌀', gold: '👑',
      money: '🐱', tiketcoin: '🎫', stamina: '✨',
            
      potion: '🥤', aqua: '💧', trash: '🗑', wood: '🪵',
      rock: '🪨', batu: '🥌', string: '🕸️', iron: '⛓️',
      coal: '⚱️', botol: '🍶', kaleng: '🥫', kardus: '🪧',
      
      eleksirb: '💡', emasbatang: '〽️', emasbiasa: '🧭', rubah: '🦊🌫️',
      sampah: '🗑🌫️', serigala: '🐺🌫️', kayu: '🛷', sword: '⚔️',
      umpan: '🪱', healtmonster: '💵', emas: '🪅', pancingan: '🪝',
      pancing: '🎣',
       
      common: '📦', uncoommon: '🥡', mythic: '🗳️',
      pet: '📫',// ? 
      gardenboxs: '💐',// ? 
      legendary: '🎁',
      
      anggur: '🍇', apel: '🍎', jeruk: '🍊', mangga: '🥭', pisang: '🍌',
      
      bibitanggur: '🌾🍇', bibitapel: '🌾🍎', bibitjeruk: '🌾🍊', bibitmangga: '🌾🥭', bibitpisang: '🌾🍌',
      
      centaur: '🐐', griffin: '🦅', kucing: '🐈', naga: '🐉', fox: '🦊', kuda: '🐎', phonix: '🕊️', wolf: '🐺', anjing: '🐶',
       
      petFood: '🍖', // ?
      makanancentaur: '🐐🥩', makanangriffin: '🦅🥩', makanankyubi: '🌀🥩', makanannaga: '🐉🥩',
      makananpet: '🍱🥩', makananphonix: '🕊️🥩'  
    }
    let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emotttt[results[0][0]];
  }
};

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
