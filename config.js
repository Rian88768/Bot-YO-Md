import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6283179956449', 'Samsul', true],
  ['628xxx'], 
  ['6281290867946'],
  ['628xxx']
] // Numeros de owner 

global.mods = ['6283179956449'] 
global.prems = ['6282359168543', '628xxx', '6283179956449']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  xyro: 'https://api.xyroinee.xyz',
  fgmods: 'https://api-fgmods.ddns.net',
  lolhuman: 'https://api.lolhuman.xyz' // Tambahkan baris ini
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.xyroinee.xyz': 'rKAdHVTXCp',
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.lolhuman.xyz': 'haikalgans' // Tambahkan baris ini
}

// Sticker WM
global.packname = 'YO-Md┃ᴮᴼᵀ' 
global.author = '@samsul' 
global.fgig = '▢ Ikuti saya di Instagram' 
global.dygp = '-'
global.fgsc = '-' 
global.fgyt = '-'
global.fgpyp = 'https://saweria.co/samsulid'
global.fglog = 'https://i.ibb.co/Csp01NQ/nero-thumbnail.jpg' 

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
