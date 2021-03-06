const { program } = require('commander')

import { getAddress,getCep }from './main'

import {version} from '../package.json'

export function init(args) {
    program
        .version(version, '-v', 'Mostra a versão da ferramenta')        
        .option('-c, --cep <cep>','Valor numérico do CEP')
        .option('-e, --address <address...>','Endereço no formato ---> Logradouro-Cidade-UF <--')        
        .action( async (cep, address) => {
            console.log('Buscando ...')
            if (program.opts().cep) {
                getAddress(program.opts().cep);
            }else if(program.opts().address) {
                getCep(program.opts().address.join(' ').split('-'));
                //console.log(program.opts().address.join(' ').split('-'))
            }
            
        })
    program.parse(args)

}
