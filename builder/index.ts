
import { LandingPageBuilder } from './landing-page/concrete/landing-page-buider';

export const main = () => {
  const landingPageBuilder = new LandingPageBuilder();
  landingPageBuilder.addHero({});
  landingPageBuilder.addContactUs({});
  landingPageBuilder.addPricing({details: [], price: 20});
  landingPageBuilder.addStyle('3d');

  const landingPage = landingPageBuilder.build();
  landingPage.render();
}

main();