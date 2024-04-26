import { CSVWriterFactory } from "./implementation/factory/CSVWriterFactory";

function main() {
  const csvWriterFactory = new CSVWriterFactory();
  csvWriterFactory.writeContent('./out.csv', [
    ['First Name', 'Last Name', 'Age'],
    ['Breno', 'da Silva', '23']
  ]);

  console.log(csvWriterFactory.history[0]);
}

main();