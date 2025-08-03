# 🥘 App Cozinha JPT

Bem-vindo ao **App Cozinha JPT**!  
Este projeto é uma aplicação web para organização e busca de receitas, com visual moderno e integração ao Google Apps Script, ideal para quem quer gerenciar pratos e receitas de forma prática.

## ✨ Funcionalidades

- Interface responsiva e amigável, com cabeçalho fixo e barra de busca.
- Busca rápida de pratos/receitas.
- Estilos modernos utilizando SCSS.
- Estrutura modular de componentes HTML.
- Processo de build automatizado para HTML e CSS.
- Integração com Google Apps Script para publicação e uso em ambiente Google.

## 🚀 Como rodar o projeto

### 1. Instale as dependências

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

```bash
npm install
```

### 2. Build dos arquivos

Para gerar os arquivos finais de HTML e CSS, execute:

```bash
npm run build
```

- Isso irá compilar os arquivos SCSS e montar o `index.html` final, pronto para ser usado no Google Apps Script.

### 3. Publicação (opcional)

Se você utiliza o [clasp](https://github.com/google/clasp) para publicar no Google Apps Script, use:

```bash
npm run push
```

## 🛠️ Dependências

- `fs-extra` - Manipulação de arquivos avançada.
- `glob` - Busca de arquivos com padrões.
- `sass` - Compilação de SCSS para CSS.

Instale todas as dependências com:

```bash
npm install
```

## 📁 Estrutura do Projeto

- `src/` - Código-fonte, componentes HTML e arquivos SCSS.
- `build-html.js` - Script para montar o HTML final a partir dos componentes.
- `build-styles.js` - Script para compilar SCSS em CSS embutido.
- `index.html` - Arquivo final gerado, pronto para o Google Apps Script.
- `Code.js` - Script principal para Apps Script.

## 💡 Observações

- O projeto foi pensado para ser facilmente customizável e expansível.
- O visual é totalmente customizado via SCSS, facilitando alterações de tema.
- A integração com Google Apps Script permite publicar e rodar a aplicação diretamente no ambiente Google.

---

Se quiser personalizar ou expandir, basta editar os componentes em `src/styles/components` e os estilos em `src/styles/`.

Se precisar de mais detalhes ou exemplos, posso complementar!