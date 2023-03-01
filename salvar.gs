function salvar() {

  var spreadsheet = SpreadsheetApp.getActive()
  var ss1 = spreadsheet.getSheetByName('Simulação')
  var ss2 = spreadsheet.getSheetByName('Histórico')

  var intervalo1 =['D8','D9','D10','D14','D15','D16','D17','D18']
  var valores = []
  for (var i = 0; i < intervalo1.length; i++){
    valores.push(ss1.getRange(intervalo1[i]).getValue())
  }
  
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  var data = today.toLocaleDateString() 

  var values = ss2.getDataRange().getValues()
  ss2.getRange(values.length + 1,1).setValue(data)
  for (var i = 0; i < valores.length; i++){
    ss2.getRange(values.length + 1, 2+i).setValue(valores[i])
  }

}
