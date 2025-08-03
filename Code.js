const DB_COZINHA_JPT = '1WTTBKMQbp_3U6F3W-jM0jGohx_jHgE1twanPcJs601E';

function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
  }
  

  function doGet() {
    return HtmlService.createTemplateFromFile('index').evaluate();
  }
  