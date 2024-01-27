import fetch from 'node-fetch'

let handler = async (m, { args, usedPrefix, command , text }) => {
	if (!text) throw `Texnya Mana Kak?`
	let reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ja' + '&dt=t&q=' + text)
	let res = await reis.json()
	conn.sendFile(m.chat, `https://api.xyroinee.xyz/api/others/voicevox?q=${res[0][0][0]}&apikey=${global.xyro}`, "dosa.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
}
handler.help = ['clara']
handler.tags = ['main']
handler.command = /^(clara)$/i
handler.limit = true
export default handler
