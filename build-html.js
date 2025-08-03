import fs from 'fs-extra';
import path from 'path';

const componentsDir = 'src/styles/components';
const baseHtmlPath = 'src/index.html';
const outputHtmlPath = 'index.html'; // esse vai pro GAS

const placeholderRegex = /<!--\s*include:\s*(.*?)\s*-->/g;

const buildHtml = () => {
  let baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

  baseHtml = baseHtml.replace(placeholderRegex, (_, filename) => {
    const filePath = path.join(componentsDir, filename);
    return fs.readFileSync(filePath, 'utf8');
  });

  fs.writeFileSync(outputHtmlPath, baseHtml);
  console.log('✅ index.html gerado com sucesso!');
};

buildHtml();
