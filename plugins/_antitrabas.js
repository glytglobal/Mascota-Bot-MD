//
//By @NeKosmic || https://github.com/NeKosmic/
//

import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
  if (m.isBaileys && m.fromMe)
       return !0
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let delet = m.key.participant
  let bang = m.key.id
  let name = await conn.getName(m.sender)
  let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": 'MylingBot-MD', 'jpegThumbnail': null}}}
   if (chat.antiTraba && m.text.length > 2000) { //Cantidad máxima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, { text: `${lenguajeGB['smsEnlaceWat']()}𝙀𝙇 𝘼𝘿𝙈𝙄𝙉𝙄𝙎𝙏𝙍𝘼𝘿𝙊𝙍 @${m.sender.split("@")[0]} 𝘼𝘾𝘼𝘽𝘼 𝘿𝙀 𝙀𝙉𝙑𝙄𝘼𝙍 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝘾𝙊𝙉 𝙈𝙐𝘾𝙃𝙊𝙎 𝘾𝙃𝘼𝙍𝘼𝘾𝙏𝙀𝙍𝙎 -.- `, mentions: [m.sender] }, { quoted: fakemek })
    conn.sendMessage(m.chat, `*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : 'No soy administrador, no puedo hacer nada :/'}`, m)
    //await conn.sendButton(m.chat, `*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : 'No soy administrador, no puedo hacer nada :/'}`, author, ['[ ᴅᴇsᴀᴄᴛɪᴠᴀ ᴀɴᴛɪᴛʀᴀʙᴀ ]', usedPrefix+'apagar antitraba'], fakemek )
        if (isBotAdmin) {
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `𝙈𝘼𝙍𝘾𝘼 𝙀𝙇 𝘾𝙃𝘼𝙏 𝘾𝙊𝙈𝙊 𝙇𝙀𝙄𝘿𝙊 ✓\n${"\n".repeat(400)}\n• 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊: wa.me/${m.sender.split("@")[0]}\n• 𝘼𝙇𝙄𝘼𝙎: ${name}\n 𝘼𝘾𝘼𝘽𝘼 𝘿𝙀 𝙀𝙉𝙑𝙄𝘼𝙍 𝙐𝙉 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘾𝙊𝙉 𝙈𝙐𝘾𝙃𝙊𝙎 𝘾𝘼𝙍𝘼𝘾𝙏𝙀𝙍𝙀𝙎 𝙔 𝙋𝙐𝙀𝘿𝙀 𝙊𝘾𝘼𝙎𝙄𝙊𝙉𝘼𝙍 𝙁𝘼𝙇𝙇𝙊𝙎 𝙀𝙉 𝘿𝙄𝙎𝙋𝙊𝙎𝙄𝙏𝙄𝙑𝙊𝙎`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply(`${lenguajeGB['smsSoloOwner']()}`)
    }
    return !0
} 
