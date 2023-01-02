# Use the official Node.js 18.12 image and alpine version
FROM node:18.12-alpine

# Create a working directory for the application
WORKDIR /app

# Copy the application files to the working directory
COPY . /app

# Delete the node_modules folder if it exists
RUN rm -rf node_modules

# Delete dist and server folders if they exist
RUN rm -rf dist server

# Install the dependencies
RUN npm install

# Build the application
RUN npm run build

# Set the port that the application will run on
EXPOSE 3000

# Start the application
CMD ["node", "server/entry.express"]