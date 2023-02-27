/**
This code is part of a spreadsheet that estimate the cost of eletric energy. This is based in data offerd by SIDRA/UFAL.
*/

function myFunc(){ 
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Simulação'), true);
  spreadsheet.getRange('B12:D93').clear({contentsOnly: true})
  
  var predio = spreadsheet.getSheetByName('Simulação').getRange('D2').getValue()
  var hora = spreadsheet.getSheetByName('Simulação').getRange('D3').getValue()
  var dias =  spreadsheet.getSheetByName('Simulação').getRange('D4').getValue()

  if ((predio&&hora&&dias) == ''){
    texto = 'Por favor, confira as informações: “Prédio”, “Duração do evento(horas)”, “Duração do evento(dias)” .Certifique-se de que     estejam preenchidas corretamente.'
    SpreadsheetApp.getUi().alert(texto,SpreadsheetApp.getUi().ButtonSet.OK_CANCEL)
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet(); 
  const sheet = ss.getSheetByName('DATA_SUMMARY')
  const values = sheet.getDataRange().getValues();

  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Simulação'), true);
  spreadsheet.getRange('B12').activate();
  
  var circuito_campo_futebol = values[0].filter(i => i != '')
  var potencia_campo_futebol = values[1].filter(i => i != '')
  var circuito_pista_atletismo = values[2].filter(i => i != '')
  var potencia_pista_atletismo = values[3].filter(i => i != '')
  var circuito_psicina = values[4].filter(i => i != '')
  var potencia_psicina = values[5].filter(i => i != '')
  var circuito_quadra_poliesportiva = values[6].filter(i => i != '')
  var potencia_quadra_poliesportiva = values[7].filter(i => i != '')
  
  if (bloco == 'Campo de Futebol' ) {
    var circuito = circuito_campo_futebol
    var potencia = potencia_campo_futebol
  } else {
    if (bloco == 'Pista de Atletismo' ) {
      var circuito = circuito_pista_atletismo
      var potencia = potencia_pista_atletismo
    } else {
      if (bloco == 'Piscina' ) {
        var circuito = circuito_psicina
        var potencia = potencia_psicina
      } else {
        if (bloco == 'Quadra Poliesportiva' ) {
          var circuito = circuito_quadra_poliesportiva
          var potencia = potencia_quadra_poliesportiva
        }
      }
    }
  }
  
  spreadsheet.getCurrentCell().offset(0, 0, circuito.length - 2, 1).insertCheckboxes();
  spreadsheet.getRange('B11').activate();
  
  var  i = 1
  
  while ( i < circuito.length - 1){

    spreadsheet.getCurrentCell().offset(0,1).activate()
    spreadsheet.getCurrentCell().setValue(circuito[i])
    spreadsheet.getCurrentCell().offset(0,1).activate()
    spreadsheet.getCurrentCell().setValue(potencia[i])
     
    spreadsheet.getCurrentCell().offset(1,-2).activate()
    i = i + 1
  }
  depreciation()
};