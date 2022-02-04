import {Client} from 'whatsapp-web.js'
var qrcode = require('qrcode-terminal')

const client = new Client({
})

client.on('qr', qr => {
    console.log(qr)
    qrcode.generate(qr,{small:true})
}) 

client.on('ready', ( ) => {
    console.log('ok')  
}) 

client.on('message', msg => {
    if(msg.body == '!ping') {
        msg.reply('pong')
    }
    
    if(msg.body == 'oi') {
        msg.reply('opa')
    }    
})

client.initialize()


