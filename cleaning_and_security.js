function cleaning_and_security(){

  var spreadsheet = SpreadsheetApp.getActive()

  var predio = spreadsheet.getSheetByName('Simulação').getRange('D2').getValue()
  var hora = spreadsheet.getSheetByName('Simulação').getRange('D3').getValue()
  var dias =  spreadsheet.getSheetByName('Simulação').getRange('D4').getValue()

  var custos_de_limpeza = spreadsheet.getSheetByName('Simulação').getRange('G4')
  var custos_de_seguranca = spreadsheet.getSheetByName('Simulação').getRange('G5')

  vh_limpeza = (3771.05 / (30 * 24)) * (hora * dias)
  vh_seguranca = (19084.60 / (30 * 24)) * (hora * dias)

  var ordem = new Map()
  ordem.set('Campo de Futebol', 6)
  ordem.set('Pista de Atletismo', 9)
  ordem.set('Piscina', 2)
  ordem.set('Quadra Poliesportiva', 1)

  custo_de_limpeza.setValue(valor_limpeza*ordem.get(predio))
  custo_de_seguranca.setValue(valor_seguranca)
}
