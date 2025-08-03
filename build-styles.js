import { createRequire } from 'node:module';
import fs from 'fs-extra';
import * as sass from 'sass';

const require = createRequire(import.meta.url);
const glob = require('glob');

const stylesDir = 'src/styles';
const outputFile = 'src/styles/components/style.html';

async function build() {
  try {
    const files = await glob.glob(`${stylesDir}/**/*.scss`);
    const combinedScss = files.map(file => fs.readFileSync(file, 'utf8')).join('\n');
    const compiledCss = sass.compileString(combinedScss).css;

    const output = `<style>\n${compiledCss}\n</style>`;
    fs.writeFileSync(outputFile, output);
    console.log('✅ style.html gerado com sucesso!');
  } catch (err) {
    console.error('❌ Erro ao gerar style.html:', err);
  }
}

build();