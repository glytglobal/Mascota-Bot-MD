import { watchFile, unwatchFile } from "fs"  
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from "cheerio"
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"
import { en, es, id, ar, pt, fr, hi } from "./lib/idiomas/total-idiomas.js"

// ✿ 𝗣𝗥𝗢𝗣𝗜𝗘𝗧𝗔𝗥𝗜𝗢/𝗢𝗪𝗡𝗘𝗥 ✿
// ◉━━━━━ AÑADA LOS NUMEROS A SER PROPIETARIO/A | ADD THE NUMBERS TO BE OWNER ━━━━◉

global.owner = [
["99999999", '🌟 𝗠𝗮𝘀𝗰𝗼𝘁𝗮-𝗕𝗼𝘁-𝗠𝗗 🌟', true],
["51955918117", '𝗗𝗔𝗡𝗜𝗘𝗟 🇦🇱', true], 
["5493795319022", '𝗢𝗪𝗡𝗘𝗥/𝗖𝗥𝗘𝗔𝗗𝗢𝗥', true]], 

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.mods = []
global.prems = ["5493795319022"]
//key de violetics
global.Key360 = ["964f-0c75-7afc"]
   
  
// ◉━━━━━ IDIOMA : LENGUAJE ━━━━◉
// AGREGA EL IDIOMA QUE QUIERES QUE TENGA MASCOTA-BOT-MD
// ADD THE LANGUAGE YOU WANT MASCOTA-BOT-MD TO HAVE
//  es = ESPAÑOL/ESP         id = INDONESIA/IND
//  en = ENGLISH/ENG         pt = PORTUGUÊS/BR
//  ar = عربي/عربي            hi = HINDI LENGUAJE

global.lenguajeMC = es // IDIOMA DE MASCOTA-BOT-MD EJEMPLO: ES | EN | PT...

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

global.official = [ // AGREGATE MASCOTA SI ERES OWNER
["51955918117", '𝗗𝗔𝗡𝗜𝗘𝗟 🇦🇱'], 
["5493795319022", '𝗚𝗟 𝗬𝗧 𝗠𝗫 - 𝗖𝗥𝗘𝗔𝗗𝗢𝗥', true]], 

global.mail = '' // AGREGA TU CORREO
global.desc = '' // AGREGA UNA DESCRIPCION CORTA
global.desc2 = '' // AGREGA UNA DESCRIPCIÓN LARGA (SOLO SE APLICARÁ SI SU WHATSAPP NO TIENE DESCRIPCIÓN)
global.country = '' // AGREGA TU PAIS EJEMPLO: 🇦🇷

global.packname = "𝙈𝙖𝙨𝙘𝙤𝙩𝙖-𝘽𝙤𝙩-𝙈𝘿 😼" // PACKNAME - NOMBRE DEL PACK
global.author = "𝙈𝙖𝙨𝙘𝙤𝙩𝙖 😼" // AUTHOR PACK - AUTOR DEL PACK

//⊱ ━━━━━.⋅ VERSION | NOMBRE | CUENTAS ⋅.━━━━ ⊰

global.vs = "1.0.0"
global.vsJB = "1.0 (Beta)"

global.gt = "𝙈𝙖𝙨𝙘𝙤𝙩𝙖-𝘽𝙤𝙩-𝙈𝘿 😼" // NOMBRE DE TU BOT
global.yt = "https://www.youtube.com/@Mascota-Bot-MD"
global.yt2 = "https://www.youtube.com/shorts/
global.ig = "https://www.instagram.com/
global.md = "https://github.com/glytglobal/Mascota-Bot-MD/"
global.fb = "https://www.facebook.com/WilsonWaoz"

global.cnl = 'https://whatsapp.com/channel/
global.nna = 'https://whatsapp.com/channel/
global.nn2 = 'https://whatsapp.com/channel/
global.nna2 = 'https://chat.whatsapp.com/
global.nn = 'https://chat.whatsapp.com/
global.nnn = 'https://chat.whatsapp.com/
global.nnnt = 'https://chat.whatsapp.com/
global.nnntt = 'https://chat.whatsapp.com/
global.nnnttt = 'https://chat.whatsapp.com/LgxLCZwejjSFaeREilUo7r' //Grupo 5 - Anexados del infierno
global.nnnttt1 = 'https://chat.whatsapp.com/
global.nnnttt2 = 'https://chat.whatsapp.com/
global.nnnttt3 = 'https://chat.whatsapp.com/
global.nnnttt4 = 'https://chat.whatsapp.com/
global.nnnttt5 = 'https://chat.whatsapp.com/
global.paypal = 'https://paypal.me/WilsonWaoz
global.asistencia = 'Wa.me/5493795319022' // CREADOR DE MASCOTA
global.asistencia2 = 'Wa.me/5492964650915' // FIEL COLABORADOR MASCOTA
global.Curiosity = 'https://github.com/AzamiJS/CuriosityBot-MD'
global.katashibot = 'https://github.com/KatashiFukushima/KatashiBot-MD/'
global.Shana = 'https://github.com/DanielDiod/DokiBot'

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━━━━━━━━━.⋅ DATOS ⋅.━━━━━━━━━━━━━━ ⊰

global.rg = '╰⊱✅⊱ *𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊 | 𝙍𝙀𝙎𝙐𝙇𝙏* ⊱✅⊱╮\n\n'
global.resultado = rg

global.ag = '╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n'
global.advertencia = ag

global.iig = '╰⊱❕⊱ *𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉 | 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉* ⊱⊱╮\n\n'
global.informacion = iig

global.fg = '╰⊱❌⊱ *𝙀𝙍𝙍𝙊𝙍* ⊱❌⊱╮\n\n'
global.fallo = fg

global.mg = '╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n'
global.mal = mg

global.eeg = '╰⊱📩⊱ *𝙍𝙀𝙋𝙊𝙍𝙏𝙀 | 𝙍𝙀𝙋𝙊𝙍𝙏* ⊱📩⊱╮\n\n'
global.envio = eeg

global.eg = '╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊 | 𝙎𝙐𝘾𝘾𝙀𝙎𝙎* ⊱💚⊱╮\n\n'
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

global.imagen1 = fs.readFileSync("./media/menus/Menu3.jpg")
global.imagen2 = fs.readFileSync("./media/menus/img1.jpg")
global.imagen3 = fs.readFileSync("./media/menus/img2.jpg")
global.imagen4 = fs.readFileSync("./media/menus/img3.jpg")
global.imagen5 = fs.readFileSync("./media/menus/img4.jpg")
global.imagen6 = fs.readFileSync("./media/menus/img5.jpg")
global.imagen7 = fs.readFileSync("./media/menus/img6.jpg")
global.imagen8 = fs.readFileSync("./media/menus/img7.jpg")
global.imagen9 = fs.readFileSync("./media/menus/img8.jpg")
global.imagen10 = fs.readFileSync("./media/menus/img9.jpg")
global.imagen11 = fs.readFileSync("./media/menus/img10.jpg")
global.imagen12 = fs.readFileSync("./media/menus/img11.jpg")
global.imagen13 = fs.readFileSync("./media/menus/img12.jpg")

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
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]

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
                        'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')
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
      limit: lenguajeMC.eDiamante(),
      exp: lenguajeMC.eExp(),
      bank: '🏦 Banco : Bank',
      diamond: lenguajeMC.eDiamantePlus(),
      health: '❤️ Salud : Health',
      kyubi: lenguajeMC.eMagia(),
      joincount: lenguajeMC.eToken(),
      emerald: lenguajeMC.eEsmeralda(),
      stamina: lenguajeMC.eEnergia(),
      role: '💪 Rango | Role',
      premium: '🎟️ Premium',
      pointxp: '📧 Puntos Exp : Point Xp',
      gold: lenguajeMC.eOro(),
      
      trash: lenguajeMC.eBasura(),
      crystal: '🔮 Cristal : Crystal',
      intelligence: '🧠 Inteligencia : Intelligence',
      string: lenguajeMC.eCuerda(),
      keygold: '🔑 Llave de Oro : Key Gold',
      keyiron: '🗝️ Llave de Hierro : Key Iron',
      emas: lenguajeMC.ePinata(),
      fishingrod: '🎣 Caña de Pescar : Fishing Rod',
      gems: '🍀 Gemas : Gemas',
      magicwand: '⚕️ Varita Mágica : Magic Wand',
      mana: '🪄 Hechizo : Spell',
      agility: '🤸‍♂️ Agilidad : Agility',
      darkcrystal: '♠️ Cristal Oscuro : Dark Glass',
      iron: lenguajeMC.eHierro(),
      rock: lenguajeMC.eRoca(),
      potion: lenguajeMC.ePocion(),
      superior: '💼 Superior : Superior',
      robo: '🚔 Robo : Robo',
      upgrader: '🧰 Aumentar Mejora : Upgrade',
      wood: lenguajeMC.eMadera(),
      
      strength: '🦹‍ ♀️ Fuerza : Strength',
      arc: '🏹 Arco : Arc',
      armor: '🥼 Armadura : Armor',
      bow: '🏹 Super Arco : Super Bow',
      pickaxe: '⛏️ Pico : Peak',
      sword: lenguajeMC.eEspada(),
      
      common: lenguajeMC.eCComun(),
      uncoommon: lenguajeMC.ePComun(),
      mythic: lenguajeMC.eCMistica(),
      legendary: lenguajeMC.eClegendaria(),
      petFood: lenguajeMC.eAMascots(), //?
      pet: lenguajeMC.eCMascota(),//?
      
      bibitanggur: lenguajeMC.eSUva(), bibitapel: lenguajeMC.eSManzana(), bibitjeruk: lenguajeMC.eSNaranja(), bibitmangga: lenguajeMC.eSMango(), bibitpisang: lenguajeMC.eSPlatano(),
      
      ayam: '🐓 Pollo : Chicken',
      babi: '🐖 Puerco : Pig',
      Jabali: '🐗 Jabalí : Wild Boar',
      bull: '🐃 Toro : Bull',    
      buaya: '🐊 Cocodrilo : Alligator',    
      cat: lenguajeMC.eGato(),    
      centaur: lenguajeMC.eCentauro(),
      chicken: '🐓 Pollo : Chicken',
      cow: '🐄 Vaca : Cow', 
      dog: lenguajeMC.ePerro(),
      dragon: lenguajeMC.eDragon(),
      elephant: '🐘 Elefante : Elephant',
      fox: lenguajeMC.eZorro(),
      giraffe: '🦒 Jirafa : Giraffe',
      griffin: lenguajeMC.eAve(), //Mascota : Griffin',
      horse: lenguajeMC.eCaballo(),
      kambing: '🐐 Cabra : Goat',
      kerbau: '🐃 Búfalo : Buffalo',
      lion: '🦁 León : Lion',
      money: lenguajeMC.eGataCoins(),
      monyet: '🐒 Mono : Monkey',
      panda: '🐼 Panda',
      snake: '🐍 Serpiente : Snake',
      phonix: '🕊️ Fénix : Phoenix',
      rhinoceros: '🦏 Rinoceronte : Rhinoceros',
      wolf: lenguajeMC.eLobo(),
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
      exp: lenguajeMC.eExp(), limit: lenguajeMC.eDiamante(), diamond: lenguajeMC.eDiamantePlus(), joincount: lenguajeMC.eToken(),
      emerald: lenguajeMC.eEsmeralda(), berlian: lenguajeMC.eJoya(), kyubi: lenguajeMC.eMagia(), gold: lenguajeMC.eOro(),
      money: lenguajeMC.eMascotaCoins(), tiketcoin: lenguajeMC.eMascotaTickers(), stamina: lenguajeMC.eEnergia(),
            
      potion: lenguajeMC.ePocion(), aqua: lenguajeMC.eAgua(), trash: lenguajeMC.eBasura(), wood: lenguajeMC.eMadera(),
      rock: lenguajeMC.eRoca(), batu: lenguajeMC.ePiedra(), string: lenguajeMC.eCuerda(), iron: lenguajeMC.eHierro(),
      coal: lenguajeMC.eCarbon(), botol: lenguajeMC.eBotella(), kaleng: lenguajeMC.eLata(), kardus: lenguajeMC.eCarton(),
      
      eleksirb: lenguajeMC.eEletric(), emasbatang: lenguajeMC.eBarraOro(), emasbiasa: lenguajeMC.eOroComun(), rubah: lenguajeMC.eZorroG(),
      sampah: lenguajeMC.eBasuraG(), serigala: lenguajeMC.eLoboG(), kayu: lenguajeMC.eMaderaG(), sword: lenguajeMC.eEspada(),
      umpan: lenguajeMC.eCarnada(), healtmonster: lenguajeMC.eBillete(), emas: lenguajeMC.ePinata(), pancingan: lenguajeMC.eGancho(),
      pancing: lenguajeMC.eCanaPescar(),
       
      common: lenguajeMC.eCComun(), uncoommon: lenguajeMC.ePComun(), mythic: lenguajeMC.eCMistica(),
      pet: lenguajeMC.eCMascota(),//?
      gardenboxs: lenguajeMC.eCJardineria(),//?
      legendary: lenguajeMC.eClegendaria(),
      
      anggur: lenguajeMC.eUva(), apel: lenguajeMC.eManzana(), jeruk: lenguajeMC.eNaranja(), mangga: lenguajeMC.eMango(), pisang: lenguajeMC.ePlatano(),
      
      bibitanggur: lenguajeMC.eSUva(), bibitapel: lenguajeMC.eSManzana(), bibitjeruk: lenguajeMC.eSNaranja(), bibitmangga: lenguajeMC.eSMango(), bibitpisang: lenguajeMC.eSPlatano(),
      
      centaur: lenguajeMC.eCentauro(), griffin: lenguajeMC.eAve(), kucing: lenguajeMC.eGato(), naga: lenguajeMC.eDragon(),
      fox: lenguajeMC.eZorro(), kuda: lenguajeMC.eCaballo(), phonix: lenguajeMC.eFenix(), wolf: lenguajeMC.eLobo(),
      anjing: lenguajeMC.ePerro(),
 
      petFood: lenguajeMC.eAMascots(), //?
      makanancentaur: lenguajeMC.eCCentauro(), makanangriffin: lenguajeMC.eCAve(),
      makanankyubi: lenguajeMC.eCMagica(), makanannaga: lenguajeMC.eCDragon(), makananpet: lenguajeMC.eACaballo(), makananphonix: lenguajeMC.eCFenix()
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