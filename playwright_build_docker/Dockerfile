FROM mcr.microsoft.com/playwright:v1.43.1-jammy

# Set working directory
WORKDIR /app

# hadolint ignore=DL3008,DL4006,DL3016,DL3009,DL3015
RUN apt-get update && \
    curl -sL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm cache clean --force && \
    npx create-playwright --quiet --lang=js --install-deps
