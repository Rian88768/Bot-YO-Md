
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
JANGAN LUPA DONATE GWEJH😡😡

▢ *DANA*
• *Nomor :* 083179956449

▢ *SUBSCRIBE*
• _Dengan subscribe dan tonton video saya, sudah cukup membantu berdonasi, Terima kasih_
`
let img = 'https://telegra.ph/file/23725c41336747ace1ae9.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
