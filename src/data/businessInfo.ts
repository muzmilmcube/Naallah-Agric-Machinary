import type { BusinessInfo } from '../types';

export const INITIAL_BUSINESS_INFO: BusinessInfo = {
  name: 'NAALLAH GENERATORS AND AGRIC MACHINERIES',
  regNumber: '7805170',
  country: 'Nigeria',
  address: 'No. 7 Khairat Plaza, Along Sabonline Street, Gombe, Gombe State.',
  city: 'Gombe',
  state: 'Gombe State',
  regDate: '7 August 2024',
  activities: [
    'Poultry Farming',
    'Fish Farming',
    'Sale of Agricultural Machineries'
  ],
  // Official Business Telephone & WhatsApp Number
  phone: '08037086302',
  whatsappNumber: '08037086302',
  email: 'info@naallahmachineries.com.ng',
  workingHours: 'Monday – Saturday: 8:00 AM – 6:00 PM',
  socialLinks: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com'
  }
};

const STORAGE_KEY = 'naallah_business_contact_config';

export function formatWhatsAppNumber(phoneStr: string): string {
  const digits = phoneStr.replace(/[^0-9]/g, '');
  if (digits.startsWith('0')) {
    return '234' + digits.slice(1);
  }
  if (!digits.startsWith('234') && digits.length === 10) {
    return '234' + digits;
  }
  return digits || '2348037086302';
}

export function getStoredBusinessInfo(): BusinessInfo {
  if (typeof window === 'undefined') return INITIAL_BUSINESS_INFO;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      const isDummyPhone = parsed.phone === '+234 800 000 0000' || !parsed.phone;
      const isDummyWa = parsed.whatsappNumber === '+234 800 000 0000' || !parsed.whatsappNumber;

      return {
        ...INITIAL_BUSINESS_INFO,
        phone: isDummyPhone ? INITIAL_BUSINESS_INFO.phone : parsed.phone,
        whatsappNumber: isDummyWa ? INITIAL_BUSINESS_INFO.whatsappNumber : parsed.whatsappNumber,
        email: parsed.email || INITIAL_BUSINESS_INFO.email,
        socialLinks: {
          ...INITIAL_BUSINESS_INFO.socialLinks,
          ...(parsed.socialLinks || {})
        }
      };
    }
  } catch (e) {
    console.error('Error reading business info from localStorage', e);
  }
  return INITIAL_BUSINESS_INFO;
}

export function saveBusinessInfoConfig(updated: Partial<BusinessInfo>): BusinessInfo {
  const current = getStoredBusinessInfo();
  const merged = {
    ...current,
    ...updated,
    socialLinks: {
      ...current.socialLinks,
      ...(updated.socialLinks || {})
    }
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch (e) {
    console.error('Error saving business info to localStorage', e);
  }
  return merged;
}
