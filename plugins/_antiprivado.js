const comandos = /piedra|papel|tijera|estado|verificar|creador|grupos|instalarbot|términos|bots|deletebot|eliminarsesion|verify|register|registrar|reg|reg1|nombre|name|nombre2|name2|edad|age|edad2|age2|genero|género|gender|identidad|pasatiempo|hobby|identify|finalizar|pas2|pas3|pas4|pas5|registroc|deletesesion|registror/i
export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner, usedPrefix, command }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
const regex = new RegExp(`^${comandos.source}$`, 'i')
if (regex.test(m.text.toLowerCase().trim())) return !0

let chat, user, bot, mensaje
chat = global.db.data.chats[m.chat]
user = global.db.data.users[m.sender]
bot = global.db.data.settings[this.user.jid] || {}

if (bot.antiPrivate && !isOwner && !isROwner) {
if (user.counterPrivate === 0) {
//mensaje = `*@${m.sender.split`@`[0]}* 𝙀𝙎𝙏𝘼 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝘼𝙇 𝙋𝙍𝙄𝙑𝘼𝘿𝙊\n\n⚠️ \`\`\`𝖯𝖱𝖨𝖬𝖤𝖱𝖠 𝖠𝖣𝖵𝖤𝖱𝖳𝖤𝖭𝖢𝖨𝖠\`\`\` ⚠️`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] })  
  
} else if (user.counterPrivate === 1) {
let grupos = [ nn, nna2, nnnttt2, nnnttt3, nnnttt4 ].getRandom()
//mensaje = `*@${m.sender.split`@`[0]}* 𝘼𝙉𝙏𝙀𝙍𝙄𝙊𝙍𝙈𝙀𝙉𝙏𝙀 𝙎𝙀 𝙈𝙀𝙉𝘾𝙄𝙊𝙉𝙊 𝙌𝙐𝙀 𝙉𝙊 𝙎𝙀 𝙋𝙊𝘿𝙄𝘼 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝘿𝙊 𝘼𝙇 𝙋𝙍𝙄𝙑𝘼𝘿𝙊. 😑\n\n👇 𝙋𝙐𝙀𝘿𝙀 𝙐𝙉𝙄𝙍𝙎𝙀 𝘼 𝙐𝙉 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 𝙋𝘼𝙍𝘼 𝙐𝙎𝘼𝙍 𝙀𝙇 𝘽𝙊𝙏 \n${grupos}\n\n𝙎𝙄 𝙑𝙐𝙀𝙇𝙑𝙀 𝘼 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙎𝙀𝙍𝘼 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝘿𝙊(𝘼)‼️\n\n⚠️ \`\`\`𝖲𝖤𝖦𝖴𝖭𝖣𝖠 𝖠𝖣𝖵𝖤𝖱𝖳𝖤𝖭𝖢𝖨𝖠\`\`\`⚠️`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] }) 
  
} else if (user.counterPrivate === 2) {
//mensaje = `*@${m.sender.split`@`[0]}* 𝙃𝙀𝙔 𝙈𝘼𝙎𝘾𝙊𝙏𝘼 𝘼𝙃𝙊𝙍𝘼 𝙎𝙀𝙍𝘼𝙎 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝘿𝙊(𝘼).😾🫵 𝙎𝙀 𝙈𝙀𝙉𝘾𝙄𝙊𝙉𝙊 𝘼𝙉𝙏𝙀𝙍𝙄𝙊𝙍𝙈𝙀𝙉𝙏𝙀 𝙌𝙐𝙀 𝙉𝙊 𝙋𝙊𝘿𝙄𝘼 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝘼𝙇 𝙋𝙍𝙄𝙑𝘼𝘿𝙊\n\n⚠️ \`\`\`𝖳𝖤𝖱𝖢𝖤𝖱𝖠 𝖠𝖣𝖵𝖤𝖱𝖳𝖤𝖭𝖢𝖨𝖠\`\`\` ⚠️`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] }) 
  
user.counterPrivate = -1
await this.updateBlockStatus(m.sender, 'block')
}
user.counterPrivate++
}
return !1
}
