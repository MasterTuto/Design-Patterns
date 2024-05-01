import { ContactUs, Hero, Pricing, Style } from "../interfaces/landing-page-details";

export class LandingPage {
  hero?: Hero;
  contactUs?: ContactUs;
  pricing?: Pricing;
  style?: Style;

  constructor(style?: Style, hero?: Hero, contactUs?: ContactUs, pricing?: Pricing) {
    this.hero = hero;
    this.style = style;
    this.contactUs = contactUs;
    this.pricing = pricing;
  }

  render() {
    console.log('Rendering Landing Page');
  }
}