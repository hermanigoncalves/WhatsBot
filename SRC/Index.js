const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect.create({
    session: 'bot',
    autoClose: false,
    puppeteerOptions: { args: ['--no-sandbox'] }
})
.then((client) =>
client.onMessage(async (message) => {
    console.log(message);
    if(message.isGroupMsg == false)
    await client
    .sendText(message.from , '👋 Hello from wppconnect!')
    

})
);