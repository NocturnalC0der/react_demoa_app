FROM node:14.16.0-alpine3.13

# Set working directory
WORKDIR /app

# Copy package files first (as root)
COPY package*.json ./

# Install dependencies (as root to avoid permission issues)
RUN npm install

# Copy application code (as root)
COPY . .

# Add app user and group
RUN addgroup app && adduser -S -G app app

# Change ownership of the entire /app directory to app user
RUN chown -R app:app /app

# Switch to app user (do this LAST)
USER app

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]