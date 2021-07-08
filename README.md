# Node-CLI
Exemplo de uma CLI em Node para busar o endereço a partir do CEP



## Instalação

Para usar localmente é necessário instalar as dependências usando o comando `npm instal`  e `npm link` para usar localmente pelo terminal.

## Uso 

o comando `cep` espera uma entrada com numero do cep ou endereço completo:

`cep -c 01001000 ` vai retornar 

```
            cep: 01001-000
            logradouro: Praça da Sé
            complemento: lado ímpar
            bairro: Sé
            localidade: São Paulo
            uf: SP
```

ou 

`cep -e Praça da Sé-São Paulo-SP`  para retornar uma lista de CEP

```
				cep: 01001-000
                logradouro: Praça da Sé
                complemento: lado ímpar
                bairro: Sé
                localidade: São Paulo
                uf: SP

                cep: 01001-001
                logradouro: Praça da Sé
                complemento: lado par
                bairro: Sé
                localidade: São Paulo
                uf: SP
					....
```

É necessário que a entrada siga o padrão Logradouro-Cidade-UF usanso o `-` como delimitador

Essa ferramenta usa o Web Service https://viacep.com.br/ para consultar o CEP 





