# streaming-saver

Projeto com front-end em Angular 14 com bibliotecas material angular e back-end feito em Spring Framework com Java 11

Para iniciar o projeto basta entrar na pasta "streaming-saver-service" abrir o terminal e rodar docker-compose up para subir o banco de dados em MySQL.

Abra outro o terminal rodar o comando "mvn clean package" e depois o comando "java -jar ./target/streaming-saver-0.0.1-SNAPSHOTjar". Assim o back-end estará no ar.

Depois disso abra outro terminal na pasta "streaming-saver-web" e rode o comando "npm install" e "npm run start", após finalizar abra o browser no endereço "localhost:4200" e aplicação estará funcionando.

Para conseguir levantar o projeto você terá que ter instalado o Docker, Java 11+, Node 16+, Maven e o npm (ou yarn).
