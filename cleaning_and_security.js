function cleaning_and_security(){

  var spreadsheet = SpreadsheetApp.getActive()

  var predio = spreadsheet.getRange('D2')
  var hora = spreadsheet.getRange('D3')
  var dias =  spreadsheet.getRange('D4')

  var custos_de_limpeza = spreadsheet.getRange('G4')
  var custos_de_seguranca = spreadsheet.getRange('G5')

  vh_limpeza = (3771.05 / (12 * 24)) * (hora * dias)
  vh_seguranca = (19084.60 / (12 * 24)) * (hora * dias)

  var ordem = new Map()
  ordem.set('Campo de Futebol', 6)
  ordem.set('Pista de Atletismo', 9)
  ordem.set('Piscina', 2)
  ordem.set('Quadra Poliesportiva', 1)

  custo_de_limpeza.setValue(valor_limpeza*ordem.get(predio))
  custo_de_seguranca.setValue(valor_seguranca)

}
