import { Integration } from "../../../abstracts/integration";

export class TelegramEventsIntegrator implements Integration {
  update(newContent: any): void {
    console.log("Sending new Telegram Events");
  }
}