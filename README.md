# Como Fazer Deploy de um projeto Next na AWS/Vercel

Insira o seguinte código abaixo:
```js 
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' })
}
```

## Serverless

Instale a biblioteca pelo guia: https://www.serverless.com/framework/docs/getting-started/

Com o comando abaixo:
```bash
npm install -g serverless
```

Depois crie uma conta na AWS com o plano básico e vá em credentials e crie uma key e uma secret, após isso
vá até o guia de referência https://www.serverless.com/framework/docs/providers/aws/cli-reference/config-credentials/

Rode o comando:
```bash
serverless config credentials --provider provider --key key --secret secret
```

Substitua o provider pelo 'aws', e tanto o key quanto o secret pelas credentials obtidas

## Serverless Plugin Nextjs

Crie o arquivo serverless.yml na raiz do projeto, e siga as instruções do guia https://www.serverless.com/plugins/serverless-nextjs-plugin

Depois insira o seguinte código no arquivo criado:
```yml

myNextApplication:
  component: "@sls-next/serverless-component"
```

## Deploy

Por fim, para realizar o deploy na AWS, basta rodar o comando:
```bash
serverless
```

## Vercel
Para realizar a configuração com o ambiente da Vercel, basta instalar a CLI da Vercel com:
```bash
npm i -g vercel
```

rodar este seguinte comando no projeto para realizar as configurações com a plataforma:
```bash
vercel
```

e por fim para colocar em ambiente de desenvolvimento basta rodar:
```bash
vercel --prod
```