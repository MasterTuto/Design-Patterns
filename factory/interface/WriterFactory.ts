import { Writer } from "./Writer";

export abstract class WriterFactory<Content> {
  private _history: {path: string, content: Content}[] = [];

  protected abstract createWriter(): Writer<Content>;

  writeContent(path: string, content: Content) {
    const writer = this.createWriter();
    writer.write(path, content);
    this._history.push({path, content});
  }

  get history(): readonly {path: string, content: Content}[] {
    return this._history;
  }
}