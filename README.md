# Node App Product

Aplicação criada para estudo de API Rest com NodeJS e MongoDB.

Esse APP consiste em um cadastro simples de produto que contém `title`, `description` e `url`.

Antes de rodar a aplicação, certifique-se que a imagem do mongo esteja em sua máquina. Para isso execute os comandos abaixo:

```bash
$ docker ps

$ docker pull mongo

$ docker run --name mongodb -p 27017:27017 -d mongo
```

Para visualização dos registros criados e testes dos endpoints, utilizei os seguintes clients:

- Robo 3T
- Insomnia