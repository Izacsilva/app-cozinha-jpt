#Contexto e Estrutura do Projeto Web App com Apps Script e React
1. Visão Geral da Arquitetura
O projeto será construído com uma arquitetura moderna e modular, dividindo as responsabilidades entre frontend e backend para garantir escalabilidade e manutenibilidade.

- Frontend (Cliente): Uma aplicação React, desenvolvida localmente. Ela será a interface do usuário (UI) e usará o conceito de SPA (Single Page Application) para proporcionar uma experiência fluida e sem recarregar a página.

- Backend (Servidor): Google Apps Script, que terá as seguintes responsabilidades:
	- Servir o arquivo HTML único que hospeda a aplicação React.

	- Atuar como uma API, expondo funções para interagir com o banco de dados.

- Banco de Dados: Google Sheets, servindo como o local de armazenamento dos dados dos pratos, ingredientes, etc.

- Ferramentas Essenciais:

- Node.js e npm: Para gerenciar o projeto e os pacotes necessários.

- esbuild (ou similar): Ferramenta para compilar e empacotar o código modular do backend em um único arquivo.

clasp: Uma interface de linha de comando que sincroniza o código local com o projeto no Google Apps Script.

2. Estrutura de Pastas e Arquivos
A estrutura de pastas foi projetada para organizar logicamente o frontend e o backend, gerenciados por um único projeto Node.js.

```

/projeto-web-app
  ├── /apps-script            // Pasta para o código do backend (Apps Script)
  │   ├── /src                // Módulos do backend em JavaScript moderno
  │   │   ├── sheets.js       // Funções de baixo nível para interagir com o Google Sheets.
  │   │   ├── pratos.js       // Lógica de negócio específica para a manipulação de pratos.
  │   │   └── main.js         // Ponto de entrada do Apps Script, expõe as APIs.
  │   └── /dist               // Pasta de saída do processo de build do Apps Script.
  │       └── Code.js         // Arquivo único compilado, pronto para o deploy.
  │   └── appsscript.json     // Manifesto de configuração do Apps Script.
  │
  ├── /frontend               // Pasta para o código do frontend (React)
  │   ├── /src                // Código-fonte da aplicação React.
  │   │   ├── /components     // Componentes React reutilizáveis.
  │   │   ├── /pages          // Componentes que representam as "páginas" da aplicação (Home, Pratos, etc.).
  │   │   ├── api.js          // Uma camada de abstração para as chamadas de API (`google.script.run`).
  │   │   └── App.jsx         // Componente principal do React.
  │   └── package.json        // Dependências e scripts de build do React.
  │
  ├── package.json            // Dependências e scripts de build globais do projeto.
  ├── clasp.json              // Arquivo de configuração do clasp para o deploy.
  └── README.md               // Documentação principal do projeto.
  ```

3. Backend (Apps Script) - Módulos e Build
O backend é modularizado para facilitar a manutenção.

Modularidade: Os arquivos sheets.js, pratos.js e main.js dividem as responsabilidades.

Processo de Build: A ferramenta esbuild lê o main.js, resolve todas as dependências (imports), transpila o código para um formato compatível com o Apps Script (ES5) e empacota tudo em um único arquivo, Code.js. Isso resolve o problema de o Apps Script não entender a sintaxe import.

O Arquivo Code.js final: É um arquivo JavaScript "plano", sem imports ou exports, contendo todas as funções do projeto em um único escopo.

4. Frontend (React) - Desenvolvimento e Comunicação
O frontend é desenvolvido de forma isolada, com foco na eficiência do desenvolvedor.

Desenvolvimento Rápido: O servidor de desenvolvimento do React (npm run start) permite visualizar a aplicação em tempo real em http://localhost:3000, com recarregamento automático a cada alteração.

Comunicação com o Backend:

Em Ambiente de Desenvolvimento: A camada de API (api.js) usa dados simulados (mocking) para que a interface possa ser construída sem a necessidade de uma conexão ativa com o Apps Script.

Em Produção (após o build e deploy): O mesmo arquivo api.js usa a API google.script.run para fazer as chamadas assíncronas para o Code.js no servidor.

5. Pontos de Conexão Críticos e Deploy
A integração entre as duas partes é essencial.

clasp.json: O rootDir neste arquivo aponta para a pasta onde o Code.js e os arquivos de build do React são gerados, garantindo que o clasp envie o conteúdo correto.

doGet() no Code.js: A função doGet() do Apps Script é o único ponto de entrada para a aplicação web. Ela serve o index.html gerado pelo build do React, que inclui o código JavaScript e CSS necessários para carregar a aplicação.

google.script.run: Esta é a API que permite ao frontend (React) chamar as funções definidas no backend (Apps Script), como getPratosData, savePrato, etc., de forma assíncrona e segura.

Fluxo de Deploy Recomendado:
Build do Frontend: Execute npm run build na pasta do React.

Build do Backend: Execute um script de build (esbuild) para gerar o Code.js na pasta dist.

Deploy com clasp: Na pasta do projeto Apps Script, execute clasp push para enviar o Code.js e o index.html compilado para o Google Apps Script.
