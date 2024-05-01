import { Integration } from "../../../abstracts/integration";

export class TwitchOverlayIntegration implements Integration {
  update(newContent: any): void {
    console.log('Sending new Twitch Overlay');
  }
}