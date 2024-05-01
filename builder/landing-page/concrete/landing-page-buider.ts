import { Builder } from "../interfaces/buider";
import { ContactUs, Hero, Pricing, Style } from "../interfaces/landing-page-details";
import { LandingPage } from "./langing-page";

export class LandingPageBuilder implements Builder<LandingPage> {
  hero?: Hero;
  contactUs?: ContactUs;
  pricing?: Pricing;
  style?: Style;

  addHero(details: Hero) {
    this.hero = details;
  }

  addContactUs(details: ContactUs) {
    this.contactUs = details;
  }

  addPricing(details: Pricing) {
    this.pricing = details;
  }

  addStyle(details: Style) {
    this.style = details;
  }

  build(): LandingPage {
    return new LandingPage(this.style, this.hero, this.contactUs, this.pricing);
  }
}