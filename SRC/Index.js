const wppconnect = require('@wppconnect-team/wppconnect');

const now = new Date(); // adicionado



stamp = new Date();
hours = stamp.getHours();
if (hours >= 18 && hours < 24) {
    time = "boa noite"
} else if (hours >= 12 && hours < 18) {
    time = "boa tarde"
} else if (hours >= 0 && hours < 12) {
    time = "bom dia"
};

wppconnect.create({
    session: 'bot',
    autoClose: false,
    puppeteerOptions: { args: ['--no-sandbox'] }
})
.then((client) =>
client.onMessage(async (message) => {
  await client.startTyping(message.from, 1200);
  if (message.isGroupMsg == false && message.body != '🗣Falar comigo' && message.body != '📝Ver os meu catalogos') {
    client.sendText(message.from, `❣💞QuE  BoM vOCê PoR aQui!Como posso te ajudar?\n⏰HORÁRIO DE ATENDIMENTO⏰
      》》》08:30as 11:30《《《
      》》》13:30 as 19:00《《《\n\🌞👙🍻SABADO DOMINGO E FERIADO FOLGA P DESCANSO`, {
      useTemplateButtons: true,
      buttons: [
        {
          url: 'https://www.instagram.com/michellepresentesgv?r=nameta',
          text: '🎯Me siga no insta'
        },
        {
          id: 'Falar com atendente',
          text: '🗣Falar comigo'
        },
        {
          id: '',
          text: '📝Ver os meu catalogos'
        },
      ],
      title: `👋Ola ${message.notifyName}, ${time}!`,
      footer: 'Meu Pix do Nu Bank\n33988144646\nMichelle Cristina da C Tavares'
    });
  }
},
 client.onMessage((message) => {
  if(message.body == '🗣Falar comigo'){
    let alreadySent = false;

if (!alreadySent && now.getDay() >= 1 && now.getDay() <= 5 // Verificar se é segunda a sexta
        && (
          (now.getHours() === 8 && now.getMinutes() >= 30) // Verificar se é 8:30 ou mais tarde
          || (now.getHours() > 8 && now.getHours() < 11) // Verificar se está entre 9h e 11h
          || (now.getHours() === 11 && now.getMinutes() <= 30) // Verificar se é 11:30 ou mais cedo
          || (now.getHours() === 13 && now.getMinutes() >= 30) // Verificar se é 13:30 ou mais tarde
          || (now.getHours() > 13 && now.getHours() < 19) // Verificar se está entre 14h e 18h
          || (now.getHours() === 19 && now.getMinutes() === 0) // Verificar se é 19:00 em ponto
        )
        && message.fromMe === false // Ignorar mensagens enviadas pelo próprio número
      ) {
        client.sendText(message.from,'👩‍🦰Já já irei responder com maior carinho e profissionalismo!Mas poderia me adiantar o assunto para agiligar o atendimento');
        alreadySent = true;

  }else {
        
    client.sendText(message.from, 'Desculpe, não estou disponível para responder mensagens no momento. Por favor, tente novamente em outro horário.')
    client.close();
        }  
  }else if(message.body == '📝Ver os meu catalogos'){
client.sendListMessage(message.from, {
            buttonText: 'Click Aqui',
            description: 'Escolha qual lista que ver pedir',
            sections: [
              {
                title: '',
                rows: [
                  {
                    
                    rowId: 'my_custom_id',
                    title: '🧴  Boticario',
                    description: '',
                  },
                  {
                    rowId: '',
                    title: '🧼 Natura',
                    description: '',
                  },
                  {
                    rowId: '',
                    title: '💄Avon Cosmesticos',
                    description: '',
                  },
                  {
                    rowId: '',
                    title: '🍴Avon Casa e Estilo',
                    description: '',
                  },
                ],
              },
            ],
          });  
          console.log(message.body)
  }
 
})
)
)
    