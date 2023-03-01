function limpar() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Seleção'), true);
  spreadsheet.getRange('B8:D102').clear({contentsOnly: true})
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Simulação'), true);
  spreadsheet.getRange('D8:D10').clear({contentsOnly: true})
}
