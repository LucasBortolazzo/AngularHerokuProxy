# Proxy

Proxy alternativo para resolver erros de Cross-Origin Resource Sharing (CORS) - O cabeçalho CORS 'Access-Control-Allow-Origin' não está presente, sem a necessidade de alterar a API back-end.

# Features
1. Intercepta as chamadas da API back-end e adiciona o cabeçalho "Access-Control-Allow-Origin". 

# Demonstration
API: https://damp-tor-97294.herokuapp.com
Proxy: https://testeproxyangular.herokuapp.com

Exemplo de chamada utilizando o proxy:
https://testeproxyangular.herokuapp.com/api/produto

## Running Locally

```sh
$ git clone
$ npm install
$ npm run start
```
