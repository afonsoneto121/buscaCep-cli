const fetch = require('node-fetch')

const apiUrl = 'https://viacep.com.br/ws/';

async function getAddressRequest(cep) {
    try {
        const responseAddress = await fetch(`${apiUrl}${cep}/json`);
        const addressJSON = await responseAddress.json();
        
        if(!addressJSON) {
            throw new Error('Request erro');
        }
        return addressJSON;

    } catch(err) { 

    } 
}

async function getCepResquest(address) {
    try {
        const [logradouro,cidade,uf] = address;
        const responseCep = await fetch(`${apiUrl}${uf}/${encodeURI(cidade)}/${encodeURI(logradouro)}/json/unicode`, {'content-type':'application/json; charset=utf-8'});
        
        if(responseCep.status !== 200) return []
        
        const cepJSON = await responseCep.json();
        
        if(!cepJSON) {
            throw new Error('Resquest erro')
        }

        return cepJSON;
    }catch(err) {
    }
}
export {
    getAddressRequest,
    getCepResquest
}

