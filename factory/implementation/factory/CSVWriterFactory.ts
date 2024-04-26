import { Writer } from "../../interface/Writer";
import { WriterFactory } from "../../interface/WriterFactory";
import { CSVWriter } from "../writer/CSVWriter";

export class CSVWriterFactory extends WriterFactory<string[][]> {
  protected createWriter(): Writer<string[][]> {
      return new CSVWriter();
  }
}