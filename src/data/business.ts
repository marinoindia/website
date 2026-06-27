// Central business / legal entity details, reused across policy pages and checkout.
export const business = {
  legalName: 'Marino Corporation Of India',
  entityType: 'Proprietorship',
  proprietor: 'Pradeep Kumar Rout',
  registeredDate: '22-08-2017',
  gstin: '19ADMPR1740H1ZA',
  address: {
    line1: '28, Orphangunj Road, Kidderpore',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700 023',
    country: 'India',
  },
  emails: ['marinocoindia@gmail.com', 'marinocorporationofindia@gmail.com'],
  phones: [
    { name: 'P. K. Rout (Binny)', number: '9831144669' },
    { name: 'P. K. Rout (Binny)', number: '8100052948' },
    { name: 'V. K. Rout (Bikku)', number: '9831327279' },
  ],
  whatsapp: '919831144669',
  grievanceOfficer: {
    name: 'Pradeep Kumar Rout',
    email: 'marinocoindia@gmail.com',
    phone: '9831144669',
  },
  website: 'https://marinoindia.co.in',
} as const;

export const fullAddress = `${business.address.line1}, ${business.address.city}, ${business.address.state} – ${business.address.pincode}, ${business.address.country}`;
