FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all backend source code
COPY . .

# Expose API port
EXPOSE 5000

# Start backend server
CMD ["npm", "start"]
