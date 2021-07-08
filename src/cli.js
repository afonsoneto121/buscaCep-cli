
import {version} from '../package.json'
const { program } = require('commander')


export function init(args) {
    program
        .version(version, '-v', 'Mostra a versão da ferramenta')
        .option('-c, --cep ','Valor numérico do CEP')
        .arguments('<cep>')
        .action( async cep => {
            
        })
    program.parse(args)

}