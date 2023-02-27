function ajuda() {
  var linha1 = "Seja bem-vindo a planilha de orçamento!"
  var linha2 = "\n"
  var linha3 = "Essa planilha tem como objetivo realizar um calculo para definir o custo mínimo de um evento no complexo esportivo."
  var linha4 = "Com as informações a respeito do local do evento, sua duração e quais os postos de energia elétrica que precisarão estar disponíveis."
  var linha5 = "\n"
  var linha6 = "Os seguintes passos são necessários para utilizar a planilha:"
  var linha7 = "1 - Defina o nome do prédio (Célula 'D2')"
  var linha8 = "2 - Defina a duração do evento em horas (Célula 'D3')"
  var linha9 = "3 - Defina a duração do evento em dias (Célula 'D4')"
  var linha10 = "4 - Clique em inserir"
  var linha11 = "\n"
  var linha12 = "Ao clicar em inserir os dados a respeito das instalações elétricas disponíveis no prédio serão exibidos na tela, e também os valores dos custos nas células em amarelo."
  var linha13 = "(Atenção! As células em amarelo não devem ser modificadas.)"
  var linha14 = "\n"
  var linha15 = "Com os dados em exibição na tela, selecione as instalações que serão utilizadas (Marque na coluna 'B'). O custo total do evento será exibido na célula 'G6'."
  var linha16 = "\n" 
  var linha17 = "Lembre-se de atualizar as informações na planilha regularmente para garantir que as estimativas de custo sejam precisas e atualizadas."
  var linha18 = "Esperamos que esta planilha seja útil para você estimar o custo de funcionamento do seu complexo esportivo. Se tiver alguma dúvida, entre em contato conosco para obter assistência adicional."

  var quebra = "\n"

  texto = linha1+linha2+quebra+linha3+quebra+linha4+linha5+quebra+linha6+quebra+linha7+quebra+linha8+quebra+linha9+quebra+linha10+linha11+quebra+linha12+quebra+linha13+quebra+linha14+linha15+quebra+linha16+linha17+quebra+linha18
  var resultado = SpreadsheetApp.getUi().alert(texto,SpreadsheetApp.getUi().ButtonSet.OK_CANCEL)
}

/** This script was made on a rainy day. */
