# Nod-dock
Dockerizing a node app

Docker is a containerization plateofrm helping to packege the application with all its dependecies.
Docker stands on 3 concepts:

- Docker file
- DockerImages &
- Docker container

## Getting Started

The project is public

## Built With

- NodeJS
- express
- Docker
 
 ## Ressources

- [Docker Tutorial](https://www.docker.com/101-tutorial)
- [Nodejs Docker webapp](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

## How it works

- Create the repository and initialise it with ````npm init```
- install the express dependencies by executing the command ```npm i --save express```
- Create the express server and configure it to listen from http request

- go on [DockerHub](https://hub.docker.com/) and create an account to get the ID
- go on Explore and select the Node image
- If you scrol by reading you may find the **How to use this image**

- Create a Dockerfile (without extension), in the project and write some commands. 
(Follow the link for updates [Node for Docker](https://hub.docker.com/_/node))

```
FROM node:10-slim
WORKDIR /app
COPY package.json /all
RUN npm install
COPY . /app
CMD ["npm", "start"]
#EXPOSE 3000
```

- to build the image we execute the command: ```$ docker build -t nod-dock-app .```

- this will make it pull from the node library some dependencies

- to run the image we execute the command: ```$ docker run -it -p 9000:3000 nod-dock-app```

- to run a docker container in background we execute the command: ```docker run -d -p 9000:3000 nod-dock-app```

- to see the image which are running, we execute ```docker ps```


It's also possible to add nodemon in the container so that it can load all the changes automaically by installing the nodemon dependancy ```$ npm i --save nodemon```

- then build again the image by using : ```$ docker build -t nod-dock-app .```

- to run the image we will use : ```$ docker run -it -p 9001:3000 -v $(pwd):/app nod-dock-app``` to specify the volume

- we can decide to run the docker container in the background once more again ```docker run -d -p 9000:3000 nod-dock-app```


## Author

👤 Venceslas Burongu

- Github: @bvenceslas [@bvenceslas](https://github.com/bvenceslas)
- Twitter: [@bvenceslas](https://twitter.com/bvenceslas)
- Linkedin: [Venceslas Burongu](https://www.linkedin.com/in/venceslas-burongu-8271b519a/)

## 🤝Contributing

Contributions, issues and feature requests are welcome!!!

## Show your support

Give a ⭐️ if you like this project!

