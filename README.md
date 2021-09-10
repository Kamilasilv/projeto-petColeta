On12- Back-end{reprograma} :purple_heart: Projeto final 🚀 Status: **em construção**  :construction:

<h1 align="center">
  <img src="img/Pet-Coleta.png" alt="logo do projeto Pet- coleta" width="500">
<p align="center"> Pet-Coleta: Uma iniciativa inspirada na (ONG) Anjos do Poço - Recife PE<p>
</h1>

  
## **Sumário**  

- [Apresentação](#apresentação)
- [Qual o objetivo?](#qual-o-objetivo?)
- [Funcionalidades](#funcionalidades)
- [Rotas](#rotas)
- [Demandas de negócio](#demandas-de-negocio)
- [Tecnologias e dependências ](#tecnologias-e-dependências)
- [Instruções para instalação e contribuições no projeto](#instruções-para-instalação-e-contribuições-no-projeto)
- [Implementações futuras](#implementações-futuras)
- [Referências](#referências)

## **Apresentação**

O "Pet- coleta"  :smiley_cat::dog: visa desenvolvimento sustentável, economia e praticidade. É o meu projeto de conclusão do bootcamp de Back-end da [{reprograma}](https://reprograma.com.br/). Essa  API  tem por objetivo agregar no organizacional de uma ONG, chamada Anjos do Poço. Para que assim, possa ampliar sua rede de apoio, entre amigos, interessados e solidários. A nossa principal bandeira é a atuação na DEFESA DOS ANIMAIS E MEIO AMBIENTE. 


## **Qual o objetivo?**

O objetivo da API é possibilitar que  pessoas de diferentes locais possam ter acesso e fazer parte dessa iniciativa. Sobretudo, pessoas em condições de vulnerabilidade, como catadores de reciclagem. Para que possam se direcionar nesses pontos de coleta e realizar a troca do seu material reciclável por ração para seu pet. 
A implementação da tecnologia nesse projeto possibilita a **ascenção** dessa iniciativa, além de abrenger a sua **utilização** por diferentes cidadãos e trazer **visibilidade** para a ONG Anjos do Poço, que conta com outras iniciativas incríveis além da coleta seletiva. 
Como: 
	-  adoção de animais;
	- consultas veterinárias gratuitas através de multirão;
	-  campanhas educativas na área do direito dos animais, entre outras. 
Como mencionado, a nossa principal abordagem é na luta em prol dos animais e meio ambiente. 

## **Funcionalidades**

  
- [X] Cadastro de usuários no ponto de coleta de sua proximidade. 
- [X] Lista de todos os pontos de coleta reciclável espalhados pela Zona norte do Recife.
- [X] Atualização de cadastro dos usuários inseridos no Projeto. 
- [X] Atualização dos respectivos pontos de coleta. 

## **Rotas**

  
Esta API está sendo executada na `porta 8080` e para que todas as rotas possam ser acessadas localmente é necessário usar `http://localhost:8080/` antes dos endpoints de requisição.

  
| **_{GET}_** | Retorna |
| ------------------- | :-------------------: |
| /coletas/todos | Lista todos os pontos de coleta existentes.|
| /coletas/:id | Lista o ponto de coleta do id requisitado. |
| /usuarios/todos/ | Lista todos os usuários cadastrados no projeto.
| /usuarios/coleta | Lista todos os usuários cadastrados naquele ponto de coleta. |

| **_{POST}_** | Retorna |
| ------------------- | :-------------------: |
| /coletas/create | Recebe um novo ponto de Coleta, adiciona ao banco e retorna o que foi criado |
| /usuarios/cadastroColeta | Recebe um novo usuário em um ponto de coleta existente |
| /adm/criar | Recebe um novo usuário administrador |
| /adm/login | Faz login do usuário cadastrado |

| **_{PATCH}_** | Retorna |
| ------------------- | :-------------------: |
| /usuarios/atualizarnome/:id | Atualiza o parâmetro nome do usuário e retorna o item atualizado |

| **_{PUT}_** | Retorna |
| ------------------- | :-------------------: |
| /coletas/atualizar/:id | Atualiza qualquer parâmetro do ponto de Coleta e retorna o item atualizado |
| /usuarios/atualizatudo/:id | Atualiza qualquer parâmetro do usuário cadastrado e retorna o item atualizado |

| **_{DELETE}_** | Retorna |
| ------------------- | :-------------------: |
| /coletas/delete/:id | Deletar um ponto de coleta (necessita autenticação) |
| /usuarios/deletar/:id | Deleta um usuário cadastrado através do seu id |

## Demandas de negócio

- Não poderá criar um ponto de coleta com o mesmo nome, devem ser nomes diferentes pois são em locais distintos;

- Somente o adm poderá criar um ponto de coleta, assim como deletar e atualizar;

- O usuário apenas visualiza os pontos de coleta;

- Para cadastrar um usuário ele deverá se vincular a um ponto de coleta existente no momento do cadastro através do id. 

## **Tecnologias e dependências**

 
<p  align="left">
<a>
<a  href="https://git-scm.com/"><img  alt="Git version"  src="https://img.shields.io/badge/Git/GitHub-yellow">
<a  href="https://nodejs.org/pt-br/"><img  alt="Node version"  src="https://img.shields.io/badge/NodeJS-yellow">
<a  href="https://www.mongodb.com/cloud/atlas"><img  alt="Node version"  src="https://img.shields.io/badge/MongoDB%20Atlas-yellow">
<a  href="https://herokuapp.com/"><img  alt="Deploy on Heroku"  src="https://img.shields.io/badge/Heroku-yellow">
<br/>
<a  href="https://www.npmjs.com/"><img  alt="npm version"  src="https://img.shields.io/badge/npm-6.14.6-yellow">
<a  href="https://expressjs.com/pt-br/"><img  alt="Express version"  src="https://img.shields.io/badge/express-4.17.1-yellow">
<a  href="https://mongoosejs.com/"><img  alt="Mongoose version"  src="https://img.shields.io/badge/mongoose-5.10.17-yellow">
<a  href="https://www.npmjs.com/package/dotenv-safe"><img  alt="Dotenv-safe version"  src="https://img.shields.io/badge/dotenv-8.2.0-yellow">
<a  href="https://www.npmjs.com/package/bcryptjs"><img  alt="Bcrypt version"  src="https://img.shields.io/badge/bcrypt-5.0.0-yellow">
<a  href="https://www.npmjs.com/package/jsonwebtoken"><img  alt="Jsonwebtoken version"  src="https://img.shields.io/badge/jsonwebtoken-8.5.1-yellow">
<a  href="https://www.npmjs.com/package/nodemon"><img  alt="Nodemon version"  src="https://img.shields.io/badge/nodemon-2.0.6-yellow">
</a>
</p>


## **Instruções para instalação e contribuições no projeto**

Antes de tudo você deve ter o Visual Studio Code, após isso: 
- Faça um fork e clone o projeto em sua máquina: 

		 git clone: https://github.com/Kamilasilv/projeto-petColeta
- Entre na pasta do projeto:

		PROJETOFINAL
- Instale as dependências: 

		npm install 
- Consulte as modificações e testes através da rota principal e inclua os endpoints de requisição:

		https://projetofinal-petcoleta.herokuapp.com/ > Através do heroku
		http://localhost:8080/ > Localmente (npm start)
	

- Crie uma branch para realizar suas alterações:

		 git checkout -b feature/nome-da-sua-branch;

 - Realize o push das suas alterações e abra uma solicitação de  pull request.


## **Implementações futuras**
- Adicionar a API outro(s) banco(s) de dados com as demais ações realizadas na ONG anjos do poço. 
- Integrar com o front-end. 

## **Referências**

[Anjos do Poço](http://www.anjosdopoco.org/)

[Como escrever um README.md sensacional no Github](https://dev.to/reginadiana/como-escrever-um-readme-md-sensacional-no-github-4509#o-que-%C3%A9-o-readme)

[Emojis em markdown](https://gist.github.com/tgmarinho/6cf35ac45644a0b68a45069d23c2e4b6)

<hr>

  

Criado  por **Kamila Silva** e o apoio de todes que fazem a reprograma acontecer. :purple_heart:
#### Entre em contato comigo por:
[![Linkedin Badge](https://img.shields.io/badge/-Kamila%20Silva-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/kamila-silva/) 
[![Gmail Badge](https://img.shields.io/badge/-kamillasilva140@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:olga.mahin@gmail.com)](mailto:kamillasilva140@gmail.com)

