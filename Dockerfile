FROM node:10-slim
WORKDIR /app
COPY package.json /all
RUN npm install
COPY . /app
CMD ["npm", "start"]