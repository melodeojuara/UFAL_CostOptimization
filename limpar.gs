function limpar() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Simulação'), true);
  spreadsheet.getRange('B12:D93').clear({contentsOnly: true})
}
