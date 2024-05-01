import { IntegratorFactory } from "./abstracts/integrator-factory";
import { InstagramIntegratorFactory } from "./concretes/factories/instagram-integrator-factory";
import { TelegramIntegratorFactory } from "./concretes/factories/telegram-integrator-factory";
import { TikTokIntegratorFactory } from "./concretes/factories/tiktok-integrator-factory";
import { TwitchIntegratorFactory } from "./concretes/factories/twitch-integrator-factory";

const integratorFactory = (which: 'instagram'|'tiktok'|'twitch'|'telegram'): IntegratorFactory => {
  switch (which) {
    case 'instagram':
      return new InstagramIntegratorFactory();
    case 'tiktok':
      return new TikTokIntegratorFactory();
    case 'twitch':
      return new TwitchIntegratorFactory();
    case 'telegram':
      return new TelegramIntegratorFactory();
  }
}

const main = () => {
  const instagramFactory = integratorFactory('instagram');
  const instagramOverlayIntegrator = instagramFactory.integrateOverlay();
  const instagramEventsIntegrator = instagramFactory.integrateEvents();

  const tiktokFactory = integratorFactory('tiktok');
  const tiktokOverlayIntegrator = tiktokFactory.integrateOverlay();
  const tiktokEventsIntegrator = tiktokFactory.integrateEvents();

  const twitchFactory = integratorFactory('twitch');
  const twitchOverlayIntegrator = twitchFactory.integrateOverlay();
  const twitchEventsIntegrator = twitchFactory.integrateEvents();

  const telegramFactory = integratorFactory('telegram');
  const telegramOverlayIntegrator = telegramFactory.integrateOverlay();
  const telegramEventsIntegrator = telegramFactory.integrateEvents();

  instagramOverlayIntegrator.update(0);
  instagramEventsIntegrator.update(0);

  console.log("-------------------------");

  tiktokOverlayIntegrator.update(0);
  tiktokEventsIntegrator.update(0);

  console.log("-------------------------");

  twitchOverlayIntegrator.update(0);
  twitchEventsIntegrator.update(0);

  console.log("-------------------------");

  telegramOverlayIntegrator.update(0);
  telegramEventsIntegrator.update(0);
}

main();