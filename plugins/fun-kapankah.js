let handler = async (m, { conn }) => conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${(10).getRandom()} ${['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekade', 'abad'].getRandom()} lagi ...
  `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
} : {})

handler.help = ['', 'kah'].map(v => 'kapan')
handler.tags = ['kerang', 'fun']
handler.limit = true
handler.command = /^kapan(kah)?$/i

export default handler
