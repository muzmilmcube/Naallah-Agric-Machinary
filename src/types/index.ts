export interface BusinessInfo {
  name: string;
  regNumber: string;
  country: string;
  address: string;
  city: string;
  state: string;
  regDate: string;
  activities: string[];
  phone: string;
  whatsappNumber: string;
  email: string;
  workingHours: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

export type MachineryCategory =
  | 'all'
  | 'tractors'
  | 'generators'
  | 'irrigation'
  | 'poultry'
  | 'fish'
  | 'processing';

export interface MachineryItem {
  id: string;
  name: string;
  category: Exclude<MachineryCategory, 'all'>;
  categoryLabel: string;
  description: string;
  keySpecs: string[];
  application: string;
  imageUrl: string;
  badge?: string;
}

export type GalleryCategory =
  | 'all'
  | 'machinery'
  | 'generators'
  | 'tractors'
  | 'poultry'
  | 'fish'
  | 'irrigation';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'all'>;
  categoryLabel: string;
  imageUrl: string;
  caption: string;
}

export interface ActivityDivision {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  keyHighlights: string[];
  features: {
    iconName: string;
    title: string;
    description: string;
  }[];
}

export interface EnquiryFormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  serviceInterest: string;
  message: string;
}

