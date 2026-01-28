<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


## Description

Neste projeto foi desenvolvida uma API de Login e Cadastro, utilizando JWT (JSON Web Token) para autenticação, com o token armazenado em cookies para maior segurança e controle de sessão.

A aplicação segue os princípios de DDD (Domain-Driven Design), visando uma melhor organização do código, separação de responsabilidades e maior clareza no entendimento das regras de negócio.


In this project, a Login and Registration API was developed, using JWT (JSON Web Token) for authentication, with the token stored in cookies to ensure better security and session management.

The application follows DDD (Domain-Driven Design) principles, aiming to improve code organization, separation of concerns, and clarity of the business rules.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.
