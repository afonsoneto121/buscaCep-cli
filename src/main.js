
import { getAddressRequest, getCepResquest } from "./util/request"

async function getAddress(cepNumber) {
    try{
        if(cepNumber.length !== 8) {
            console.log('O CEP deve ter 8 digito');
            return
        }
        if(isNaN(cepNumber)) {
            console.log('O CEP deve ter apenas numeros');
            return
        }
        const address = await getAddressRequest(cepNumber);
        if(address){
            console.log (`
            cep: ${address.cep}
            logradouro: ${address.logradouro}
            complemento: ${address.complemento}
            bairro: ${address.bairro}
            localidade: ${address.localidade}
            uf: ${address.uf}`)
        } else {
            console.log('CEP não existe')
        }
    }catch(err) {
        console.log(err)
    }
}

async function getCep(addressName) {
    try {
        if(addressName.length !== 3) {
            console.log('Use \'-\' para separar o endereço ---> Logradouro-Cidade-UF <---')
            return
        }
        const listCep = await getCepResquest(addressName)
        listCep.forEach(i => {
            console.log (`
                cep: ${i.cep}
                logradouro: ${i.logradouro}
                complemento: ${i.complemento}
                bairro: ${i.bairro}
                localidade: ${i.localidade}
                uf: ${i.uf}`)
        })
        if(listCep.length === 0)
            console.log('Endereço não encontrado')
    }    catch(err) {

    }
}

export {
    getAddress,
    getCep
}

