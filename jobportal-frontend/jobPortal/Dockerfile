FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install React dependencies
RUN npm install

# Copy React project files
COPY . .

# Expose frontend port
EXPOSE 3000

# Start React development server
CMD ["npm", "start"]
