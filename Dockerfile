FROM node:14-alpine as builder

LABEL maintainer="Jeferson C. Grandi"

ENV NODE_ENV build

WORKDIR /app

COPY . /app

RUN yarn \
    && yarn build

# ---

FROM node:14-alpine

ENV NODE_ENV production

WORKDIR /app

COPY --from=builder /app/package*.json /app/
COPY --from=builder /app/dist/ /app/dist/

EXPOSE 3000

RUN yarn

CMD ["yarn", "start:prod"]