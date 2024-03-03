//CÓDIGO CREADO GRACIAS A https://github.com/Azami19 & https://github.com/GataNina-Li
//Puedes editar el país,enlaces, los números se editan desde el config.js

// ARREGLADO Y ADAPTADO PARA MASCOTA-BOT-MD BY POWERED GL YT MX
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
try{
let contact, number, ofc, nombre, description, correo, lugar, enlace, biog
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let biografiaBot = await conn.fetchStatus(conn.user.jid.split('@')[0] + '@s.whatsapp.net').catch(_ => 'undefined')
let bioBot = biografiaBot.status?.toString() || `${desc2 == '' ? lenguajeGB.smsContacto1() : desc2}`

let contacts = global.official.filter(c => c[2] === 1)
let lista = []
for (let i = 0; i < contacts.length; i++) {
contact = contacts[i]
number = String(contact[0])
ofc = await conn.getName(number + '@s.whatsapp.net') //String(contact[1])
let biografia = await conn.fetchStatus(number +'@s.whatsapp.net').catch(_ => 'undefined')
let bio = biografia.status?.toString() || `${desc2 == '' ? lenguajeGB.smsContacto2() : desc2}`
  
nombre = official[0][0] == String(contact[0]) ? official[0][1] : official[1][0] == String(contact[0]) ? official[1][1] : official[2][0] == String(contact[0]) ? official[2][1] : official[3][0] == String(contact[0]) ? official[3][1] : official[4][0] == String(contact[0]) ? official[4][1] : lenguajeGB.smsContacto3() 
description = official[0][0] == String(contact[0]) ? '𝘾𝙍𝙀𝘼𝘿𝙊𝙍 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 𝘿𝙀 𝙈𝘼𝙎𝘾𝙊𝙏𝘼-𝘽𝙊𝙏-𝙈𝘿' : official[1][0] == String(contact[0]) ? '𝗖𝗢𝗟𝗔𝗕𝗢𝗥𝗔𝗗𝗢𝗥 𝗢𝗙𝗜𝗖𝗜𝗔𝗟' lenguajeGB.smsContacto4() : official[2][0] == String(contact[0]) ? lenguajeGB.smsContacto4() : official[3][0] == String(contact[0]) ? lenguajeGB.smsContacto4() : desc === '' ? lenguajeGB.smsContacto5() : desc
correo = official[0][0] == String(contact[0]) ? 'glyt.xp.contacto@gmail.com' : official[1][0] == String(contact[0]) ? '𝘚𝘐𝘕 𝘊𝘖𝘙𝘙𝘌𝘖' : official[2][0] == String(contact[0]) ? lenguajeGB.smsContacto6() : mail === '' ? lenguajeGB.smsContacto6() : mail
lugar = official[0][0] == String(contact[0]) ? '𝘈𝘙𝘎𝘌𝘕𝘛𝘐𝘕𝘈' : official[1][0] == String(contact[0]) ? '𝘚𝘐𝘕 𝘗𝘈𝘐𝘚' : official[2][0] == String(contact[0]) ? '𝘚𝘐𝘕 𝘗𝘈𝘐𝘚' : official[3][0] == String(contact[0]) ? '𝘚𝘐𝘕 𝘗𝘈𝘐𝘚' : country === '' ? '𝘚𝘐𝘕 𝘗𝘈𝘐𝘚' : country
enlace = official[0][0] == String(contact[0]) ? 'https://github.com/glytglobal/' : official[1][0] == String(contact[0]) ? 'https://chat.whatsapp.com/J2IRY8iLvtL2Us6pVGGcRH' : official[2][0] == String(contact[0]) ? 'https://whatsapp.com/channel/0029Va8GeVFAO7REOj3qnW37' : official[3][0] == String(contact[0]) ? 'https://chat.whatsapp.com/EBQOkLPgftc8mPR4KTml8S' : md 
   
lista.push([number, ofc, nombre, description, official[3][0] == String(contact[0]) ? null : correo, lugar, enlace, bio, official[1][0] == String(contact[0]) ? 'https://chat.whatsapp.com/J2IRY8iLvtL2Us6pVGGcRH' : null]) }  
lista.push([conn.user.jid.split('@')[0], await conn.getName(conn.user.jid), packname, lenguajeGB.smsContacto8(), mail === '' ? 'katashifukushima23@gmail.com' : mail, lenguajeGB.smsContacto7(), md, bioBot, yt, ig, fb, paypal, nna])
await conn.sendContactArray(m.chat, lista, null, { quoted: fkontak })
  
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}} 
handler.command = /^(contactos?|contacts?)$/i //['contacto', 'contact']  

export default handler


/*function handler(m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true }}})
}

handler.command = ['contacto', 'contact']  
export default handler*/
