import { Integration } from "../../../abstracts/integration";

export class TikTokEventsIntegration implements Integration {
  update(newContent: any): void {
    console.log('Sending new Tiktok Events');
  }
}