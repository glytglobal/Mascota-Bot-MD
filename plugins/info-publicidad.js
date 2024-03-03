var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = gataImg.getRandom()	
const cat = `
┏◥ ▬▬▬▬▬▬ ◆ ▬▬▬▬▬▬ ◤┓
┃
┃ ✿ 𝙋𝙐𝘽𝙇𝙄𝘾𝙄𝘿𝘼𝘿 - 𝘼𝘿𝙑𝙀𝙍𝙏𝙄𝙎𝙄𝙉𝙂
┃ ┗━ 𝙈𝘼𝙎𝘾𝙊𝙏𝘼-𝘽𝙊𝙏-𝙈𝘿 😼
┃
┃ ✿ 𝘼𝙕𝘼𝙈𝙄𝙅𝙎 - 𝘾𝙐𝙍𝙄𝙊𝙎𝙄𝙏𝙔𝘽𝙊𝙏-𝙈𝘿
┃ ┗━ {curiosity}
┃
┃ ✿ 𝘿𝘼𝙉𝙄𝙀𝙇𝘿𝙄𝙊𝘿 - 𝙎𝙃𝘼𝙉𝘼𝘽𝙊𝙏-𝙈𝘿
┃ ┗━ {shana}
┃ 
┃ ✿ 𝙆𝘼𝙏𝘼𝙎𝙃𝙄 𝙁𝙐𝙆𝙐𝙎𝙃𝙄𝙈𝘼 - 𝙆𝘼𝙏𝘼𝙎𝙃𝙄𝘽𝙊𝙏-𝙈𝘿
┃ ┗━ {katashibot}
┃
┗◥ ▬▬▬▬▬▬ ◆ ▬▬▬▬▬▬ ◤┛`

await conn.sendFile(m.chat, pp, 'gata.mp4', cat, fkontak)
}
handler.help = ['publicidad', 'publicity']
handler.tags = ['info']
handler.command = /^(pbmc|publicity|publicidadmascota|publicidadmd|publicitymascota|publicitymd|propietaria|dueño|publicidadmc|publicidad)$/i

export default handler
