const fetch = require('node-fetch')

const apiUrl = 'https://viacep.com.br/ws/';

async function getAddress(cep) {
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

