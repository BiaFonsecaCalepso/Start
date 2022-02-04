"use strict";
exports.__esModule = true;
var whatsapp_web_js_1 = require("whatsapp-web.js");
var qrcode = require('qrcode-terminal');
var client = new whatsapp_web_js_1.Client({});
client.on('qr', function (qr) {
    console.log(qr);
    qrcode.generate(qr, { small: true });
});
client.on('ready', function () {
    console.log('ok');
});
client.on('message', function (msg) {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
    if (msg.body == 'oi') {
        msg.reply('opa');
    }
});
client.initialize();
