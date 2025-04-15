FROM node:16

WORKDIR /app

# Install dependencies needed for zk-SNARKs libraries
RUN apt-get update && apt-get install -y \
    git \
    python3 \
    make \
    g++ \
    curl

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Create directory for trusted setup if it doesn't exist
RUN mkdir -p /app/trusted_setup

EXPOSE 8080

# Start the service
CMD ["npm", "start"] 