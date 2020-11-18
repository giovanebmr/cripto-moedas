const myHttp = require('https');                                        //adicionado
const agent = new myHttp.Agent({                                        //adicionado    
    rejectUnauthorized: false
  })
const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '5000',
    'convert': 'BRL'
  },
  agent: agent,                                                         //adicionado
  headers: {
    'X-CMC_PRO_API_KEY': 'c472aa44-8b30-4d81-800d-2c44c81d775d'
  },
  json: true,
  gzip: true
};

rp(requestOptions).then(response => {
  console.log('API call response:', response);
}).catch((err) => {
  console.log('API call error:', err.message + " >> My Custon error <<");
});








//contornado o problema do certificado auto assinado conforme: https://stackoverflow.com/questions/50958516/javascript-self-signed-certificate-error-during-api-call
//npm install --save request
//npm install --save request-promise
//documentação disponível em: https://coinmarketcap.com/api/documentation/v1/#section/Quick-Start-Guide