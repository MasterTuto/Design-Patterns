import { writeFileSync } from "node:fs";
import { Writer } from "../../interface/Writer";

export class XLSXWriter implements Writer<string[][]> {
  write(path: string, content: string[][]): void {
    console.log("Saving to file: "+path);
  }
}