import { Writer } from "../../interface/Writer";
import { WriterFactory } from "../../interface/WriterFactory";
import { XLSXWriter } from "../writer/XLSXWriter";

export class XLSXWriterFactory extends WriterFactory<string[][]> {
  createWriter(): Writer<string[][]> {
      return new XLSXWriter();
  }
}