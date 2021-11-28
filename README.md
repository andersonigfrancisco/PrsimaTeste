Criar configuração de projeto :

Como primeiro passo, crie um diretório de projetos e navegue nele:

1. mkdir hello-prisma
2. cd hello-prisma

Em seguida, inicialize um projeto TypeScript e adicione o Prisma CLI como uma dependência de desenvolvimento a ele:

1. yarn init -y
2. yarn add prisma typescript ts-node @types/node --save-dev


Em seguida, crie um arquivo e adicione a seguinte configuração a ele:tsconfig.json

{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}

Agora você pode invocar o Prisma CLI prefixando-o com:npx

npx prisma
npx prisma init

https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres

yarn add ts-node-dev -D