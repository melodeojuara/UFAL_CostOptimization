/**
This code is part of a spreadsheet that estimate the cost of eletric energy. This is based in data offerd by SIDRA/UFAL.
*/

function eletric_cost() {

  nome_predio = 'D8'
  duracao_horas = 'D9'
  duracao_dias = 'D10'
  
  custo_manutencao = 'D14'
  custo_energia = 'D15'
  custo_higienizacao = 'D16'
  custo_seguranca = 'D17'
  custo_total_evento = 'D18'

  dados = 'B21'
  
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Simulação'), true);
  spreadsheet.getRange('B21:D102').clear({contentsOnly: true})
  
  var predio = spreadsheet.getSheetByName('Simulação').getRange(nome_predio).getValue()
  var hora = spreadsheet.getSheetByName('Simulação').getRange(duracao_horas).getValue()
  var dias =  spreadsheet.getSheetByName('Simulação').getRange(duracao_dias).getValue()

  if ((predio&&hora&&dias) == ''){
    texto = 'Por favor, confira as informações: “Prédio”, “Duração do evento(horas)”, “Duração do evento(dias)” .Certifique-se de que     estejam preenchidas corretamente.'
    SpreadsheetApp.getUi().alert(texto,SpreadsheetApp.getUi().ButtonSet.OK_CANCEL)
    return
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet(); 
  const sheet = ss.getSheetByName('DATA_SUMMARY')
  const values = sheet.getDataRange().getValues();

  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Simulação'), true);
  spreadsheet.getRange(dados).activate();

  var circuito_campo_futebol = values[0].filter(i => i != '')
  var potencia_campo_futebol = values[1].filter(i => i != '')
  var circuito_pista_atletismo = values[2].filter(i => i != '')
  var potencia_pista_atletismo = values[3].filter(i => i != '')
  var circuito_psicina = values[4].filter(i => i != '')
  var potencia_psicina = values[5].filter(i => i != '')
  var circuito_quadra_poliesportiva = values[6].filter(i => i != '')
  var potencia_quadra_poliesportiva = values[7].filter(i => i != '')

  if (predio == 'Campo de Futebol' ) {
    var circuito = circuito_campo_futebol
    var potencia = potencia_campo_futebol
  } else {
    if (predio == 'Pista de Atletismo' ) {
      var circuito = circuito_pista_atletismo
      var potencia = potencia_pista_atletismo
    } else {
      if (predio == 'Piscina' ) {
        var circuito = circuito_psicina
        var potencia = potencia_psicina
      } else {
        if (predio == 'Quadra Poliesportiva' ) {
          var circuito = circuito_quadra_poliesportiva
          var potencia = potencia_quadra_poliesportiva
        }
      }
    }
  }

  spreadsheet.getCurrentCell().offset(0, 0, circuito.length - 2, 1).insertCheckboxes();
  
  spreadsheet.getRange(dados).activate();

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
