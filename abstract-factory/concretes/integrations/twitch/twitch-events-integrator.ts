import { Integration } from "../../../abstracts/integration";

export class TwitchEventsIntegration implements Integration {
  update(newContent: any): void {
    console.log('Sending new Twitch Events');
  }
}