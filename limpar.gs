function limpar() {
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Seleção'), true);
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('B8:D102').clear({contentsOnly: true})
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Simulação'), true);
}
