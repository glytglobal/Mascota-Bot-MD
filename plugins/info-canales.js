var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = gataImg.getRandom()	
const cat = `
> CANAL - MULTI-UPDATES
https://whatsapp.com/channel/0029VaUVDE5DeON2qLLrLp3j

> CANAL - MASCOTA-BOT-MD
https://whatsapp.com/channel/0029VaTXanzChq6KEZCzTV2m

> CANAL - MASCOTA-BOTLITE-MD
https://whatsapp.com/channel/0029VaOt5lTLSmbgZx6tEH3S`

await conn.sendFile(m.chat, pp, 'gata.mp4', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
