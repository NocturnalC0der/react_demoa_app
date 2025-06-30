FROM python:3.10-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    postgresql-client \
    python3-dev

# Add app user and group
RUN groupadd app && useradd -g app -m app

# Copy UV configuration files
COPY pyproject.toml uv.lock ./

# Install UV
RUN pip install uv

# Install dependencies using UV (as root, then change ownership)
RUN uv sync --frozen && chown -R app:app /app

# Copy the wait-for-it.sh script and make it executable
COPY wait-for-it.sh ./
RUN chmod +x /app/wait-for-it.sh


# Switch to app user
USER app

# Copy application code (this will respect .dockerignore)
COPY --chown=app:app . .

# Set environment variables
ENV PYTHONPATH=/app

# Command to run the application
CMD ["uv", "run", "python", "main.py"]
