export interface Writer<Content> {
  write(path: string, content: Content): void;
}