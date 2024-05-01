import { Integration } from "../../../abstracts/integration";

export class InstagramEventsIntegration implements Integration {
  update(newContent: any): void {
    console.log('Sending new Instagram Events');
  }
}