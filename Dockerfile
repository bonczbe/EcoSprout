# Use the official Node.js image with Yarn
FROM node:18-alpine

# Install dependencies required for React Native
RUN apk add --no-cache bash git openssh

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock into the container
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the project files into the container
COPY . .

# Expose the Metro bundler port (8081) for React Native
EXPOSE 8081

# Start the React Native Metro bundler
CMD ["yarn", "start"]
