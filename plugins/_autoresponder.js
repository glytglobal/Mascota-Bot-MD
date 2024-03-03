import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(tagmd, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝙈𝙔𝙇𝙄𝙉𝙂𝘽𝙊𝙏-𝙈𝘿', body: '𝙎𝙏𝙄𝘾𝙆𝙀𝙍 - 𝙊𝙁𝘾', sourceUrl: `https://github.com/WilsonOFC/MylingBot-MD`, thumbnail: tagmd}}})}
    
return !0 }
export default handler
