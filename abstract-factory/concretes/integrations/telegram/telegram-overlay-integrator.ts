import { Integration } from "../../../abstracts/integration";

export class TelegramOverlayIntegrator implements Integration {
  update(newContent: any): void {
    console.log("Sending new Telegram Overlay");
  }
}