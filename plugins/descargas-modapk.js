import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `${lenguajeGB['smsAvisoMG']()} *ESCRIBA EL NOMBRE DEL APK*`;
  try {    
const searchA = await search(text);
const data5 = await download(searchA[0].id);
let response = `${eg}┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃◈ 𝗡𝗢𝗠𝗕𝗥𝗘: ${data5.name}\n┃📦 𝗣𝗔𝗖𝗞𝗔𝗚𝗘: ${data5.package}\n┃🕒 𝗨𝗟𝗧𝗜𝗠𝗔 𝗔𝗖𝗧𝗨𝗔𝗟𝗜𝗭𝗔𝗖𝗜𝗢𝗡: ${data5.lastup}\n┃🜲 𝗣𝗘𝗦𝗢 | 𝗦𝗜𝗭𝗘: ${data5.size}\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗡𝗗𝗢 𝗔𝗣𝗞 🚀🚀🚀`
await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await conn.sendMessage(m.chat, {text: '*EL APK ES MUY PESADO.*'}, {quoted: m})}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
} catch {
throw `${lenguajeGB['smsAvisoFG']()} *NO HAY RESULTADOS DE LO QUE SOLICITA*`;
}};
handler.command = /^(apkmod|apk|modapk|dapk2|aptoide|aptoidedl)$/i;
handler.register = true
handler.limit = 2
export default handler;
