FROM node:14.16.0-alpine3.13

# Set working directory
WORKDIR /app

# Add app user and group
RUN addgroup app && adduser -S -G app app

# Switch to app user
USER app

# Copy application code (this will respect .dockerignore)
COPY --chown=app:app . .

RUN npm install

EXPOSE 3000

CMD npm start