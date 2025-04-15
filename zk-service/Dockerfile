FROM node:18-alpine

WORKDIR /app

# Install dependencies including those needed for zk-SNARKs libraries
RUN apk add --no-cache --virtual .build-deps \
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