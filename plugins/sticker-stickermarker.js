import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let MessageType = (await import(global.baileys)).default
const effects = ['jail', 'gay', 'glass', 'wasted' ,'triggered', 'lolice', 'simpcard', 'horny'] 

let handler = async (m, { conn, usedPrefix, command, text }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `
${mg𝑫𝑬𝑩𝑬 𝑼𝑺𝑨𝑹 𝑬𝑳 𝑪𝑶𝑴𝑨𝑵𝑫𝑶 𝑫𝑬 𝑳𝑨 𝑺𝑰𝑮𝑼𝑰𝑬𝑵𝑻𝑬 𝑭𝑶𝑹𝑴𝑨
𝒀𝑶𝑼 𝑴𝑼𝑺𝑻 𝑼𝑺𝑬 𝑻𝑯𝑬 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 𝑨𝑺 𝑭𝑶𝑳𝑳𝑶𝑾𝑺
*${usedPrefix + command} efecto*

♦️ 𝐄𝐍𝐕𝐈́𝐀 𝐔𝐍𝐀 𝐈𝐌𝐀𝐆𝐄𝐍 𝐎 𝐕𝐈́𝐃𝐄𝐎 𝐂𝐎𝐍 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐏𝐀𝐑𝐀 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐑𝐋𝐎 𝐄𝐍 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 || ♦️ 𝐒𝐄𝐍𝐃 𝐀𝐍 𝐈𝐌𝐀𝐆𝐄 𝐎𝐑 𝐕𝐈𝐃𝐄𝐎 𝐖𝐈𝐓𝐇 𝐓𝐇𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐓𝐎 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐈𝐓 𝐈𝐍𝐓𝐎 𝐀 𝐒𝐓𝐈𝐂𝐊𝐄𝐑
*${usedPrefix + command} simpcard*
 
𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀𝙎
𝘼𝙑𝘼𝙄𝙇𝘼𝘽𝙇𝙀 𝙀𝙁𝙁𝙀𝘾𝙏𝙎
${effects.map(effect => `_» ${effect}_`).join('\n')}
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `${fg}𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉, 𝙍𝙀𝘾𝙐𝙀𝙍𝘿𝙀 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀𝙍 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉\n\n𝙉𝙊 𝙄𝙈𝘼𝙂𝙀 𝙁𝙊𝙐𝙉𝘿, 𝙍𝙀𝙈𝙀𝙈𝘽𝙀𝙍 𝙏𝙊 𝙍𝙀𝙋𝙇𝙔 𝙏𝙊 𝘼𝙉 𝙄𝙈𝘼𝙂𝙀`
if (!/image\/(jpe?g|png)/.test(mime)) throw `${ag}𝙀𝙇 𝙁𝙊𝙍𝙈𝘼𝙏𝙊 𝘿𝙀𝘽𝙀 𝘿𝙀 𝙎𝙀𝙍 *jpg o jpeg* 𝙔 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀𝙍 𝘼 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉\n\n𝙏𝙃𝙀 𝙁𝙊𝙍𝙈𝘼𝙏 𝙈𝙐𝙎𝙏 𝘽𝙀 *jpg or jpeg* 𝘼𝙉𝘿 𝙍𝙀𝙎𝙋𝙊𝙉𝘿 𝙏𝙊 𝙏𝙃𝙀 𝙄𝙈𝘼𝙂𝙀`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) {
m.reply(`${fg}𝙉𝙊 𝙎𝙀 𝙋𝙐𝘿𝙊 𝙃𝘼𝘾𝙀𝙍 𝙇𝘼 𝘾𝙊𝙉𝙑𝙀𝙍𝙎𝙄𝙊𝙉 𝘼 𝙎𝙏𝙄𝘾𝙆𝙀𝙍, 𝙀𝙉 𝙎𝙐 𝙇𝙐𝙂𝘼𝙍 𝙀𝙉𝙑𝙄𝘼𝙍 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉\n\n𝙏𝙃𝙀 𝘾𝙊𝙉𝙑𝙀𝙍𝙎𝙄𝙊𝙉 𝘾𝙊𝙐𝙇𝘿 𝙉𝙊𝙏 𝘽𝙀 𝘿𝙊𝙉𝙀 𝙏𝙊 𝙎𝙏𝙄𝘾𝙆𝙀𝙍, 𝙎𝙀𝙉𝘿 𝘼𝙉 𝙄𝙈𝘼𝙂𝙀 𝙄𝙉𝙎𝙏𝙀𝘼𝘿`)
await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
}}
handler.help = ['stickmaker (caption|reply media)']
handler.tags = ['General']
handler.command = /^(stickmaker|stickermaker|stickermarker|cs)$/i
export default handler
