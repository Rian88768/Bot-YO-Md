function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:samsul\nitem1.TEL;waid=6283179956449:6283179956449\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;My Web:saweria.co/samsulid\nEMAIL;Email Owner:pemburumakanan9@gmail.com:\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler