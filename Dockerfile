# Use an official Node.js runtime as the base image
FROM node:lts AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install -g npm@9.6.0 --force
RUN npm install react-scripts --force

# Copy the application code to the working directory
COPY . .

# Build the Vite.js app for production
RUN npm run build

FROM nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80/tcp

CMD ["nginx", "-g", "daemon off;"]