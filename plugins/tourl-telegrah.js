import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '✳🙂 يرجى الرد على صوره او فيدبو'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`▢ ${media.length} Byte(s) 

▢ ${isTele ? '(No expiry date)' : '(Your given file link)'} 
▢ *URL :* ${link}
  `)
}
handler.help = ['tourlg']
handler.tags = ['tools']
handler.command = ['upload1', 'تليجراف']

export default handler
