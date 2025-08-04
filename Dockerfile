# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json card.js ./

RUN npm install --production

LABEL name="anuragxo-card" \
      maintainer="Anurag Kumar <anuragxo.dev@gmail.com>" \
      version="1.0.2" \
      description="Interactive terminal portfolio card"

ENTRYPOINT ["node", "card.js"]
