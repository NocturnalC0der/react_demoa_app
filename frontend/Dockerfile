FROM alpine

# Set working directory
WORKDIR /app

# Add app user and group
RUN groupadd app && useradd -g app -m app

# Switch to app user
USER app

# Copy application code (this will respect .dockerignore)
COPY --chown=app:app . .