var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = gataImg.getRandom()	
const cat = `
┏◥ ▬▬▬▬▬▬ ◆ ▬▬▬▬▬▬ ◤┓
┃
┃ ✿ 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 - 𝘾𝙍𝙀𝘼𝙏𝙊𝙍
┃ ┗━ {asistencia}
┃
┃ ✿ 𝘾𝙊𝙇𝘼𝘽𝙊𝙍𝘼𝘿𝙊𝙍 - 𝘾𝙊𝙇𝘼𝘽𝙊𝙍𝘼𝙏𝙊𝙍
┃ ┗━ {asistencia3}
┃
┃ ◉ 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙄𝙊 - 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙔
┃ ┗━ {md}
┃ 
┗◥ ▬▬▬▬▬▬ ◆ ▬▬▬▬▬▬ ◤┛`

await conn.sendFile(m.chat, pp, 'gata.mp4', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
