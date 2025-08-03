const DB_COZINHA_JPT = '1WTTBKMQbp_3U6F3W-jM0jGohx_jHgE1twanPcJs601E';

// function include(filename) {
//     return HtmlService.createHtmlOutputFromFile(filename).getContent();
//   }
  

  function doGet() {
    return HtmlService.createTemplateFromFile('index').evaluate();
  }
  
function getNomePrato() {

  // pego a planilha pelo ID, usando a variável que está no início do script.
  const db_cozinha = SpreadsheetApp.openById(DB_COZINHA_JPT);
  // agora vou selecionar e buscar dados da aba desejada.
  const abaPratos = db_cozinha.getSheetByName("pratos");

  // aqui vou pegar as colunas, um intervalo entre as colunas.
  const intervaloNomes = abaPratos.getRange("B2:B");

  // vou pegar os valores contido nas colunas, no intervalo de colunas.
  const valores = intervaloNomes.getValues();


  const listaDeNomes = valores.map(linha => linha[0]).filter(nome => nome);

  return listaDeNomes;
}