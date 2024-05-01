import { Integration } from "../../abstracts/integration";
import { IntegratorFactory } from "../../abstracts/integrator-factory";
import { TelegramEventsIntegrator } from "../integrations/telegram/telegram-events-integrator";
import { TelegramOverlayIntegrator } from "../integrations/telegram/telegram-overlay-integrator";

export class TelegramIntegratorFactory implements IntegratorFactory {
  integrateEvents(): Integration {
    return new TelegramEventsIntegrator();
  }

  integrateOverlay(): Integration {
      return new TelegramOverlayIntegrator();
  }
}