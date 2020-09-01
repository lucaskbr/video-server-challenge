

<p align="center">
  <img src="https://user-images.githubusercontent.com/39783638/91785954-e117fe80-ebdc-11ea-8ef5-e6f6b454e30b.png" height="250">
</p>

# Welcome to Video Server Challenge :wave:

## ℹ️ How To Use

```sh
git clone https://github.com/lucaskbr/video-server-challenge
cd video-server-challenge
# create a mongodb
# edit .env variables
# tip: use the postman collection in attachment to make calls
npm i
ts-node src/index.ts  

```

## ✈️ Routes

| METHOD | URI | DESCRIPTION |
| ------ | ------ | ------ |
| GET | **/rooms/:id** | find a room by id |
| PATCH | **/rooms** | join or leave a room |
| POST | **/rooms** | create a room|
| - | - | - |
| GET | **/users** | find all users |
| GET | **/users/:username** | find a user by username |
| POST | **/users** | create a user |
| - | - | - |
| POST | **/auth/login** | sigin a user |

## 🏢 Architecture

<p align="center">
  <img src="https://user-images.githubusercontent.com/39783638/91785851-a44c0780-ebdc-11ea-885c-4590d13a4e6d.png" height="300">
</p>

The hexagonal architecture, or ports and adapters architecture, is an architectural pattern used in software design. 

It aims at creating loosely coupled application components that can be easily connected to their software environment by means of ports and adapters. 

This makes components exchangeable at any level and facilitates test automation.

## 📕 References


* Reflectoring: (https://reflectoring.io/spring-hexagonal/)
* GeeksForGeeks: (https://www.geeksforgeeks.org/hexagonal-architecture-in-java/)
* RefactoringGuru: (https://refactoring.guru/pt-br)
* SourceMaking: (https://sourcemaking.com/design_patterns)


## :rocket: Libs

* [Typescript](https://www.typescriptlang.org/)
* [Express](https://www.npmjs.com/package/express)
* [Mongoose](https://www.npmjs.com/package/mongoose)
* [BCrypt](https://www.npmjs.com/package/bcrypt)
* [Json Web Token](https://www.npmjs.com/package/jsonwebtoken)
* [DotEnv](https://www.npmjs.com/package/dotenv)
* [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)



## 🔨 To improve
- **TDD** - Tests coverage at least 80%
- **Docker** - Create docker-compose file
- **Conventional commits** - Split commits in minor parts - (I didn't do it because I was improving my knowledge in hexagonal arch)

## 🧔 Author

* Github: [@lucaskbr](https://github.com/lucaskbr)
* Linkedin: [@lucaskbr](https://www.linkedin.com/in/lucas-klasa-13891414b/)

License
----

MIT

**Free Software, Hell Yeah!**
