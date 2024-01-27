import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper-sosmed'

let limit = 320

let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  
    if (!text) {
        m.reply(`✳️ Masukkan judul lagu\n\n📌Contoh *${usedPrefix + command}* Cupid`)
        return
    }

    let chat = global.db.data.chats[m.chat]

    let res = await yts(text)

    let vid = res.videos[0]

    if (!vid) {
        m.reply(`✳️ Video/Audio Tidak Ditemukan`)
        return
    }

    let isVideo = /vid$/.test(command)

    m.react('🎧') 
  
    try {
        let q = isVideo ? '360p' : '128kbps' 

        let v = vid.url

        let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))

        let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())

        let title = await yt.title

        let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)

        let play = `
	≡ *PLAY MUSIC*
┌──────────────
▢ 📌 *Titel* : ${vid.title}
▢ 📆 *Diterbitkan:* ${vid.ago}
▢ ⌚ *Durasi:* ${vid.timestamp}
▢ 👀 *Dilihat:* ${vid.views}
└──────────────

_Mengirim..._`

        conn.sendMessage(m.chat, {
            text: play,
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: '',
                    thumbnailUrl: vid.thumbnail,
                    sourceUrl: '',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        })

        let sizeNum = parseFloat(size.replace(/[^0-9.]/g, ''))

        let sizeUnit = size.replace(/[0-9.]/g, '').toUpperCase()

        if (sizeUnit == 'MB' && sizeNum >= limit) {
            m.reply(` ≡  *PLAY YTDL*\n\n▢ *⚖️Size* : ${size}\n▢ *🎞️Kualitas* : ${q}\n\n▢ _File melebihi batas unduhan_ *+${limit} MB*`)
            return
        }

        if (sizeUnit == 'GB') {
            m.reply(` ≡  *PLAY YTDL*\n\n▢ *⚖️Size* : ${size}\n▢ *🎞️Kualitas* : ${q}\n\n▢ _File melebihi batas unduhan_ *+${limit} MB*`)
            return
        }

        conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /vid$/.test(command)), `
 ≡  *PLAY YTDL*
  
▢ *📌Titel* : ${title}
▢ *🎞️Kualitas* : ${q}
▢ *⚖️Size* : ${size}
`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: chat.useDocument })

        m.react('✅') 
    } catch (err) {
        m.reply(`Kesalahan: ${err.message}`)
    }

}

handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']
handler.limit = true

export default handler
