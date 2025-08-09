# Tutorial: Instalando e Configurando o `vite-plugin-singlefile`

Este documento descreve o passo a passo para configurar o projeto Vite para gerar um único arquivo HTML no build, contendo todo o CSS e JavaScript embutido. Isso é ideal para simplificar o deploy em plataformas como o Google Apps Script.

## Passo 1: Instalação do Plugin

O primeiro passo é instalar o `vite-plugin-singlefile` como uma dependência de desenvolvimento. Para isso, navegue até a pasta do frontend e execute o seguinte comando:

```bash
npm install -D vite-plugin-singlefile
```

## Passo 2: Configuração no `vite.config.js`

Após a instalação, precisamos informar ao Vite para usar o plugin durante o processo de build.

1.  **Abra o arquivo `frontend/vite.config.js`**. O conteúdo atual dele deve ser parecido com este:

    ```javascript
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vite.dev/config/
    export default defineConfig({
      plugins: [
        react({
          jsxImportSource: '@emotion/react',
          babel: {
            plugins: ['@emotion/babel-plugin'],
          },
        }),
      ],
    })
    ```

2.  **Importe o plugin** adicionando a linha `import { viteSingleFile } from 'vite-plugin-singlefile'` no topo do arquivo.

3.  **Adicione o plugin** `viteSingleFile()` ao array de `plugins`.

O arquivo `vite.config.js` modificado ficará assim:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    viteSingleFile(),
  ],
})
```

Com essas alterações, ao executar `npm run build` na pasta `frontend`, o Vite irá gerar um único arquivo `index.html` na pasta `dist`, com todo o código necessário embutido.
