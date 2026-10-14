export const GMMP_CONTACT = {
  name: 'Get Married Matchmaking Platform',
  shortName: 'GMMP',
  phoneDisplay: '+234 903 033 2109',
  phoneRaw: '2349030332109',
  email: 'getmarriedmatchmaking@gmail.com',
  country: 'Nigeria',
  coverage: 'Nigeria (Lagos, Abuja, Port Harcourt & Nationwide) + Worldwide African Diaspora',
  operatingHours: 'Mon - Sat: 8:00 AM – 9:00 PM (WAT)',
  getWhatsAppUrl: (message?: string) => {
    const defaultMsg = 'Hello GMMP, I would like to inquire about joining the Get Married Matchmaking Platform to find a spouse.';
    const text = encodeURIComponent(message || defaultMsg);
    return `https://wa.me/2349030332109?text=${text}`;
  },
};
