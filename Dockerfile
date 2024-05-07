FROM nginx:stable-alpine3.19-slim

WORKDIR /workspace

COPY . .

EXPOSE 8000



