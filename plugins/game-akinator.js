import { Aki } from 'aki-api';
import fs from 'fs';

let handler = async (m, { conn, usedPrefix, command, args, isPrems }) => {
    conn.akinator = conn.akinator ? conn.akinator : {};

    switch (args[0]) {
        case 'end':
            if (!(m.sender in conn.akinator)) return m.reply('Anda tidak sedang dalam sesi Akinator');
            delete conn.akinator[m.sender];
            m.reply('Berhasil keluar dari sesi Akinator.');
            break;

        case 'start':
            if (m.sender in conn.akinator) return m.reply('Anda masih berada dalam sesi Akinator');

            try {
                conn.akinator[m.sender] = new Aki({ region: 'id' });
                await conn.akinator[m.sender].start();
                let { question } = conn.akinator[m.sender];
                let txt = `🎮 *Akinator* 🎮\n\n@${m.sender.split('@')[0]}\n${question}\n\n`;
                txt += '🎮 _*Silahkan Jawab Dengan Cara:*_\n';
                txt += `_*Ya* - ${usedPrefix}answer 0_\n`;
                txt += `_*Tidak* - ${usedPrefix}answer 1_\n`;
                txt += `_*Saya Tidak Tahu* - ${usedPrefix}answer 2_\n`;
                txt += `_*Mungkin* - ${usedPrefix}answer 3_\n`;
                txt += `_*Mungkin Tidak* - ${usedPrefix}answer 4_\n\n`;
                txt += `*${usedPrefix + command} end* untuk keluar dari sesi Akinator`;

                // Gunakan m.reply untuk mengirim pesan
                conn.akinator[m.sender].chat = await m.reply(txt, { mentions: [m.sender] });
                conn.akinator[m.sender].waktu = setTimeout(() => {
                    m.reply('Waktu Memilih Akinator Habis', conn.akinator[m.sender].chat);
                    delete conn.akinator[m.sender];
                }, 60000);
            } catch (error) {
                console.error(error);
                m.reply('Terjadi kesalahan saat memulai sesi Akinator');
            }
            break;

        default:
            let cap = 'Akinator adalah sebuah permainan dan aplikasi perangkat bergerak yang berupaya menebak secara rinci dan pasti isi pikiran pengguna permainan ini melalui serentetan pertanyaan.\n\n';
            cap += '🎮 _*Cara Bermain:*_\n';
            cap += `${usedPrefix + command} start ~ Untuk Memulai Permainan\n`;
            cap += `${usedPrefix + command} end ~ Untuk Menghapus Sesi Permainan\n`;
            cap += `${usedPrefix}answer ~ Untuk Menjawab Pertanyaan`;

            // Gunakan m.reply untuk mengirim pesan
            m.reply(conn.adReply(cap, m.sender in conn.akinator ? 'Kamu Masih Berada Didalam Sesi Akinator' : '', '', fs.readFileSync('./media/akinator.jpg')));
    }
};

handler.help = ['akinator'];
handler.tags = ['unknown'];
handler.command = /^(akinator)$/i;
handler.limit = true;
handler.premium = true;
handler.game = true;

export default handler;
