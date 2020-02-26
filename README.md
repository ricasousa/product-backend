# Node App

Aplicação criada para estudo de API Rest com NodeJS.

Para esta aplicação foi utilizado mongodb por meio do docker.

Antes de rodar a aplicação, certifique-se que a imagem do mongo está em sua máquina.

docker ps

docker pull mongo

docker run --name mongodb -p 27017:27017 -d mongo

Para visualização dos registros na base e testes das APIs, utilizei os seguintes clients:

- Robo 3T
- Insomnia