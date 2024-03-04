
import fetch from 'node-fetch'
let handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `🌟 INGRESA EL LINK O ENLACE DE TIKTOK QUE CONTENGA IMÁGENES`
    if (!args[0].match(/tiktok/gi)) throw `❌ EL ENLACE DEBE SER DE TIKTOK POR FAVOR`

    //m.react(rwait)
    try {
        let res = await fetch(global.API('fgmods', '/api/downloader/tiktok2', { url: args[0] }, 'apikey'))
        let data = await res.json()

        let title = data.result.title
        let images = data.result.images
        let music = data.result.music.play_url

        for (let tt of images) {
            //conn.sendFile(m.chat, tt.url, null, `▢ *Descripción:* ${title}`, m)
            conn.sendMessage(m.chat, { image: { url: tt.url }, caption: `▢ *Descripción:* ${title}` }, { quoted: m })
        }
        conn.sendFile(m.chat, music, 'tiktok.mp3', '', m, null, { mimetype: 'audio/mp4' })
        //m.react(done)
        
        } catch {
    m.reply(`❎ Error intenta más tarde`)
}

}
//handler.help = ['tiktokslide']
//handler.tags = ['dl']
handler.command = ['ttimg', 'tiktokimg', 'ttslide']

export default handler
