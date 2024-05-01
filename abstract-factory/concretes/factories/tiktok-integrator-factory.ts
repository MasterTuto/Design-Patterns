import { Integration } from '../../abstracts/integration';
import { TikTokEventsIntegration } from '../integrations/tiktok/tiktok-events-integrator';
import { TikTokOverlayIntegration } from '../integrations/tiktok/tiktok-overlay-integrator';
import { IntegratorFactory } from '../../abstracts/integrator-factory';

export class TikTokIntegratorFactory implements IntegratorFactory {
  integrateEvents(): Integration {
    return new TikTokEventsIntegration();
  }

  integrateOverlay(): Integration {
    return new TikTokOverlayIntegration();
  }
}