# Orientações para uso de ES Modules, esbuild e Google Apps Script

O Google Apps Script **NÃO suporta** a sintaxe de `import`/`export` nativa do ES Modules nem do CommonJS. Ele espera um único arquivo `.gs` ou `.js` com todas as funções globais, sem módulos.

Por isso, usamos o **esbuild** para juntar (bundle) todos os módulos em um único arquivo compatível, removendo os `import`/`export` e deixando tudo no escopo global.

## Como fazer funcionar no Google Apps Script

1. **No seu código-fonte (`/apps-script/src/`):**  
   Use `export`/`import` normalmente para organizar o código (ES Modules).

2. **No build:**  
   O esbuild gera um único arquivo (`/apps-script/dist/code.js`) sem `import`/`export`, pronto para o Apps Script.

3. **No Apps Script:**  
   Faça o upload apenas do arquivo final (`code.js`), ou use o `clasp` para enviar.

---

### Exemplo prático

#### `/apps-script/src/pratos.js`
```js
export function listarPratos() {
  return ['Arroz', 'Feijão', 'Carne'];
}
```

#### `/apps-script/src/main.js`
```js
import { listarPratos } from './pratos.js';

function doGet() {
  return ContentService.createTextOutput(JSON.stringify(listarPratos()));
}

// Exponha as funções no escopo global para o Apps Script
global.doGet = doGet;
```

#### Resultado do bundle (`/apps-script/dist/code.js`)
O esbuild vai gerar um arquivo sem `import`/`export`, com tudo no escopo global, pronto para o Apps Script.

---

### Erro comum
```
Syntax error: SyntaxError: Cannot use import statement outside a module line: 3 file: src/main.gs
```
Isso acontece porque o Apps Script não entende `import`.  
**Nunca envie arquivos com `import`/`export` para o Apps Script!**  
Sempre envie o arquivo gerado pelo esbuild.
