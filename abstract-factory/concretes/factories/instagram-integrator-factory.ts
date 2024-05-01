import { Integration } from '../../abstracts/integration';
import { InstagramEventsIntegration } from '../integrations/instagram/instagram-events-integrator';
import { InstagramOverlayIntegration } from '../integrations/instagram/instagram-overlay-integrator';
import { IntegratorFactory } from './../../abstracts/integrator-factory';

export class InstagramIntegratorFactory implements IntegratorFactory {
  integrateEvents(): Integration {
    return new InstagramEventsIntegration();
  }

  integrateOverlay(): Integration {
    return new InstagramOverlayIntegration();
  }
}