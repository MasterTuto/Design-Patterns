export type Style = 'modern' | 'creative' | 'cute' | 'professional' | '3d';

export type Hero = {
  title?: string;
  subtitle?: string;
}

export type ContactUs = {
  showEmail?: boolean;
  showSubject?: string;
  showContent?: string;
  showPhone?: string;
  nameInput?: 'none' | 'first-last' | 'fullname';
}

export type Pricing = {
  details: string[]
  price: number;
}