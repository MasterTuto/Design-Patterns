import { Integration } from "../../../abstracts/integration";

export class InstagramOverlayIntegration implements Integration {
  update(newContent: any): void {
    console.log('Sending new Instagram Overlay');
  }
}