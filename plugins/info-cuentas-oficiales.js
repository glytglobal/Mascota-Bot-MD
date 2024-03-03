let media = 'https://telegra.ph/file/138331960b1309d86f9d3.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `🌟 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼 𝙇𝘼𝙎 𝘾𝙐𝙀𝙉𝙏𝘼𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎 𝘿𝙀 𝙈𝘼𝙎𝘾𝙊𝙏𝘼-𝘽𝙊𝙏-𝙈𝘿
😼 𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙏𝙃𝙀 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘼𝘾𝘾𝙊𝙐𝙉𝙏𝙎 𝙊𝙁 𝙈𝘼𝙎𝘾𝙊𝙏𝘼-𝘽𝙊𝙏-𝙈𝘿
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
» 𝖦𝖨𝖳𝖧𝖴𝖡 - 𝖱𝖤𝖯𝖮𝖲𝖨𝖳𝖮𝖱𝖨𝖮
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
» *INSTAGRAM - ASISTENCIA*
*${ig}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
» *YOUTUBE*
*${yt}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *FACEBOOK*
*${fb}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
» 𝖢𝖱𝖤𝖠𝖣𝖮𝖱 - 𝖢𝖱𝖤𝖠𝖳𝖮𝖱
*${undetable}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
» 𝖦𝖨𝖳𝖧𝖴𝖡 - 𝖢𝖱𝖤𝖠𝖳𝖮𝖱
*${developer}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Si tienen dudas, sugerencias, o preguntas solo escriban por Instagram.*\n
*If you have doubts, suggestions or questions just write on Instagram.*`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
/*conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^cuentasoficiales|mascotaig|cuentasmc|cuentamascota|accounts|mcaccounts|account|imascota|cuentasdemascotas|cuentasdemc|cuentasmascota|cuentasmascotabot$/i
handler.exp = 35
export default handler
