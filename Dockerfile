FROM oven/bun:1.2.19 AS build

WORKDIR /app

COPY package.json vite.config.ts tsconfig.json ./

RUN bun install

COPY . .

EXPOSE 5173

CMD ["bun", "run", "dev", "--host"]