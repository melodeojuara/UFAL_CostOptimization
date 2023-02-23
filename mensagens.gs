function ajuda() {
  var texto1 = 'Bem vindo ao gerador de cartas!\nAs próximas mensagens contém orientações de como utilizar o sistema, a ordem dos botões e células que não devem ser alteradas.\nDeseja continuar? '
  var texto2 = "Em primeiro momento deve-se selecionar prédio na célula 'D2'\n Depois disso, defina a quantidade de horas diárias e a duração em dias do evento nas células 'D3' e 'D4'"
  var texto3 = "Selecione o botão 'Inserir' para trazer a lista das instalações elétricas disponíveis na unidade com as potências relacionadas.\n E nas caixas de seleção, marque as instalações que serão utilizadas durante o evento."
  var texto4 = "As celulas de 'G2' à 'G6' contém informações a respeito dos custos de execução do evento"
  var texto5 = "Caso qualquer informação do cabeçalho mude, selecione o botão 'atualizar' para ajustar as informações de custo." 
  var texto6 = "Selecione o botão 'limpar' para retirar a lista de instalações elétricas da tela."

  var resultado = SpreadsheetApp.getUi().alert(texto1,SpreadsheetApp.getUi().ButtonSet.OK_CANCEL)

  var mensagens = [texto2,texto3,texto4,texto5,texto6]
  for (var counter = 0; counter <= 4; counter = counter + 1) {
    var mensagem = SpreadsheetApp.getUi().alert(mensagens[counter],SpreadsheetApp.getUi().ButtonSet.YES_NO)
  }   
}

/** This script was made on a rainy day. */
