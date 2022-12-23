/** Mensal costs of maintence and clearning of building */
/** This equation was build step by step after a e-mail writing analisis, the code are a mathematic's adaptation  for JS */

/** Steps:
  1º) Set building value
  2º) Aply maintenace factor
  3º) Set numbers of cleaning workers
  4º) Multiply wokers payment by the quantity
  5º) Set the quantity of security post and multiply by 19.084,60
  */

/** Subtitles 
  1º) vtc = building value (Valor total da construção)
  2º) fm = maintenace factor (fator de manutenção)
  3º) pl = numbers of cleaning workers (postos de limpeza)
  4º) sf = wokers payment (salário dos trabalhadores)
  5º) ps = security post  (postos de segurança)
  */

function CTMan(){
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getCurrentCell().offset(0,0).activate();

  spreadsheet.getCurrentCell().offset(0,1).activate()
  var vtc = spreadsheet.getCurrentCell().getValue()

  spreadsheet.getCurrentCell().offset(0,1).activate()
  var fm = spreadsheet.getCurrentCell().getValue()

  spreadsheet.getCurrentCell().offset(0,1).activate()
  var pl = spreadsheet.getCurrentCell().getValue()

  spreadsheet.getCurrentCell().offset(0,1).activate()
  var sf = spreadsheet.getCurrentCell().getValue()

  spreadsheet.getCurrentCell().offset(0,1).activate()
  var ps = spreadsheet.getCurrentCell().getValue()

  var calc = ( ( vtc * fm ) / 12 ) + ( pl * sf ) + ( ps * 19084.60 )

  spreadsheet.getCurrentCell().setValue(calc);
  
};
