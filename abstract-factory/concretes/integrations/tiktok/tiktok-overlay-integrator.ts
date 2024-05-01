import { Integration } from "../../../abstracts/integration";

export class TikTokOverlayIntegration implements Integration {
  update(newContent: any): void {
    console.log('Sending new TikTok Overlay');
  }
}