// src/js/fake biz data
// for rename file to biz-data for info to show in footer
export const SITE_INFO = {
  name: "Salon Lumière",
  tagline: "Luxury Nail & Beauty Studio",
  phone: "+1 (555) 234-5678",
  email: "info@salonlumiere.com",
  address: "1234 Park Avenue, Irvine, CA",
  hours: {
    mon_fri: "10:00 AM – 7:00 PM",
    sat: "9:00 AM – 6:00 PM",
    sun: "Closed",
  },
  socials: {
    instagram: "https://instagram.com/salonlumiere",
    facebook: "https://facebook.com/salonlumiere",
  },
  services: [
    { name: "Acrylic Full Set", price: 65, duration: "90 min" },
    { name: "Acrylic Refill", price: 50, duration: "75 min" },
    { name: "Gel Manicure", price: 45, duration: "60 min" },
    { name: "Spa Pedicure", price: 55, duration: "60 min" },
  ],
  booking_enabled: false, // toggle this later when live
};
