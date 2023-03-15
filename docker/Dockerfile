# LABEL repository="https://github.com/sk0x0y/kurlyapp"
# LABEL maintainer="sk0x0y <seokyeong.yang@kakao.com>"

FROM node:lts-alpine

# ARG DB_PASSWORD

WORKDIR /app

COPY .. .

RUN npm install
# RUN yarn nextjs:build

EXPOSE 5000

CMD ["npm", "start"]
