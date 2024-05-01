import { Integration } from '../../abstracts/integration';
import { TwitchEventsIntegration } from '../integrations/twitch/twitch-events-integrator';
import { TwitchOverlayIntegration } from '../integrations/twitch/twitch-overlay-integrator';
import { IntegratorFactory } from '../../abstracts/integrator-factory';

export class TwitchIntegratorFactory implements IntegratorFactory {
  integrateEvents(): Integration {
    return new TwitchEventsIntegration();
  }

  integrateOverlay(): Integration {
    return new TwitchOverlayIntegration();
  }
}