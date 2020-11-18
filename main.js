const proxyurl = "https://cors-anywhere.herokuapp.com/";

//my api key
var apikey = {
    key: 'SUA API KEY AQUI'
}

var linkApi = {
    link: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='
}

//get Fetch Requisition

fetch( proxyurl + linkApi.link + apikey.key)
.then(
    (response)=>{
        if( !response.ok) throw new Error('Erro ao executar a requisição, status: ' + response.status);
        return response.json();
      }
)
.then(
    (api)=>{
        
        var texto = "";
        //get 10 coin and symbols

        for (let index = 0; index < 10; index++) {
    
            //show api information
            texto = texto + "<div class='media'>" + 
                                "<img src='coin.png' class='align-self-center mr-3' alt='coin' with='100' height='60'/>" +
                                "<div class='media-body'>" +
                                    "<h5 class='mt-2'>" + api.data[index].name + "</h5>" +
                                    "<p class='mt-2'>" + api.data[index].symbol + "</p>" +
                                    "<p class='mt-2'>" + api.data[index].first_historical_data + "</p>" +
                                "</div>" +
                            "</div>";

            document.getElementById('coins').innerHTML = texto;
        }
    }
)
.catch(
    (error)=>{
        console.log(error.message)
    }
);




//proxy CORS para driblar o erro “No Access-Control-Allow-Origin cabeçalho”
//conforme: https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe