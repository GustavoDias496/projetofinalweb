# Projeto QG Finanças

Este web site é projeto para controle de vendas de queijo na Fazenda Peão.
Com ele é possivel gerenciar todas as entradas e saidas financeiras em relação
a venda de queijos.

## Como iniciar o projeto 

Para iniciar o projeto basta baixa-lo e rodar o comando "npm start". 

### Tecnologias usandas nele

O site foi desenvolvido usando o React Js, as informações que ele usa
são providas por uma API que permite fazer todo o CRUD das informações
no nosso front end.

Link da API -> https://backendprojetoweb.herokuapp.com/

### Como utilizar a aplicação

É possivel ter acesso à aplicação através do link a seguir,
ao entrar no site você irá se deparar com a tela de login no
momento é possivel utilizar qualquer informação para acessar o
site, futuramente será implementado um sistema de cadastro de 
usuário e autenticação deles. 
  Após logar no site você irá se deparar com a tela Home onde
será apresentado um resumo das finanças, esse resumo será 
exbido em forma de cards. No menu da página vai constar quatro
opções que são elas: Home, Hitórico, Cadastro de Entradas e 
Cadastro de Saídas. A tela Home será o resumo já citado, na tela
de Histórico será possivel vizualizar todas as informações já 
cadastradas na plataforma de maneira mais detalhada. Também 
será possivel excluir ou editar uma dessas informações. Nas telas
de cadastro o usuário conseguirá cadastrar entradas e saídas.

Link do site -> https://projetofinalweb-gustavodias496.vercel.app/Home


### Estrutura de pastas do projeto

Todo o código está armazenado na pasta "src", dentro dela temos a pasta
"Componets" e nela tem todos os componentes usados pela aplicação, na 
pasta "pages" tem todos os arquivos das páginas do site com seus estilos,
"service" tem o arquivo com a URL base da nossa API e na pasta "img" tem
as imagens usadas na aplicação.
