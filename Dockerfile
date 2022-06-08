FROM node:latest as build-stage
WORKDIR /app
COPY ./ /app/

RUN npm install --no-color --no-audit 2>&1
RUN npm run build

FROM nginx:stable
COPY --from=build-stage /app/build/ /usr/share/nginx/html
EXPOSE 443
