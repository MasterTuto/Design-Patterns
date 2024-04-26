import { writeFileSync } from "node:fs";
import { Writer } from "../../interface/Writer";

export class CSVWriter implements Writer<string[][]> {
  write(path: string, content: string[][]): void {
    const writableContent = content
      .map((line) => line.map(cell => `"${cell.replace(/\,/g, '\\,')}"`).join(','))
      .join("\n");
    
    writeFileSync(path, writableContent);
  }
}