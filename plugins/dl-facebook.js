
import fg from 'api-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {
 
 if (!args[0]) throw `✳️ Mengirim tautan ke video Facebook\n\n📌 Contoh :\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`
    m.react(rwait)
   try {
    let result = await fg.fbdl(args[0]);
    let tex = `
┌─⊷ *FB DL*
▢ *Titel :* ${result.title}
└───────────`;
    conn.sendFile(m.chat, result.videoUrl, 'fb.mp4', tex, m);
    m.react(done);
  } catch (error) {
 	m.reply('Error: Intente de nuevo con otro link')
 	} 
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.limit = true

export default handler
