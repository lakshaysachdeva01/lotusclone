const icons = {
  PEOPLE: "flaticon-group",
  WIFI: "flaticon-wifi",
  SOFA: "img/icons/BANQUET.png",
  DINING: "flaticon-dining",
  LOCKER: "flaticon-clock-1",
  AC: "flaticon-group",
  BATHROOM: "img/icons/shower.jpeg",
  KEYS: "flaticon-group",
  BREAKFAST: "flaticon-breakfast",
  TOILET_KIT: "flaticon-group",
};

const roomServiceTypes = {
  DELUX_ROOMS: "DELUX_ROOMS",
  SUPER_DELUX_ROOMS: "SUPER_DELUX_ROOMS",
  SUITE_ROOMS: "SUITE_ROOMS",
  SEMI_GRAND_DELUXE: "SEMI_GRAND_DELUXE",
  GRAND_DELUXE: "GRAND_DELUXE",
};

const roomDetailsData = [
  {
    title: "Deluxe Rooms",
    imageName: "deluxe1.jpeg",
    type: roomServiceTypes.DELUX_ROOMS,
    description:
      "Immerse yourself in comfort and contemporary elegance at Lotus Resort Raipur's Deluxe Rooms. Designed for both business and leisure travelers, these spacious Rooms (16 in total) offer a perfect blend of functionality and modern amenities. Each room comfortably accommodates two adults and one child, making it ideal for families and small groups. <br/> Stay entertained with the latest shows and movies on our Smart TVs, and enjoy peace of mind with secure storage options in your room's digital locker. Additionally, attached dressing areas are available in each room for your convenience. <br/> Maintain your preferred temperature year-round with our centralized air conditioning system, and unwind in the pristine comfort of our spotless washrooms. Book your Deluxe Room today and experience the perfect blend of comfort, convenience, and style at Lotus Resort Raipur.",
    amenities: [
      {
        name: "2 + 2 Occupancy",
        icon: icons.PEOPLE,
      },
      {
        name: "Digi Locker",
        icon: icons.LOCKER,
      },
      {
        name: "Centralised AC",
        icon: icons.AC,
      },
      {
        name: "01 Bathroom",
        icon: icons.BATHROOM,
        type: "image",
      },
      {
        name: "Wifi",
        icon: icons.WIFI,
      },
      {
        name: "E. Key Cards",
        icon: icons.KEYS,
      },
      {
        name: "Hot Tea & Coffee Cattle",
        icon: icons.BREAKFAST,
      },
      {
        name: "Toiletry Kit",
        icon: icons.TOILET_KIT,
      },
    ],
  },
  {
    title: "Super Deluxe Rooms",
    imageName: "super-deluxe1.jpeg",
    type: roomServiceTypes.SUPER_DELUX_ROOMS,
    description:
      "Enhance your Raipur getaway experience with our lavish Super Deluxe Rooms. With 24 spacious accommodations available, each designed to comfortably host 4+2( optional) Occupancy, rest assured of a tranquil stay for all. <br/> Benefit from the modern convenience of keyless entry using E-key cards and complimentary Wi-Fi access. Indulge in the luxury of double bathrooms for utmost privacy with digi locker and separate dressing room. <br/> While 8 of our Super Deluxe Rooms feature two washrooms, the remaining accommodations provide a single washroom for your convenience. Kickstart your day rejuvenated with a freshly brewed hot beverage from our complimentary tea & coffee amenities. Reserve your Super Deluxe Room now to revel in the pinnacle of opulence and relaxation at Lotus Resort Raipur.",
    amenities: [
      {
        name: "4 + 2 (Optional) Occupancy",
        icon: icons.PEOPLE,
      },
      {
        name: "Digi Locker",
        icon: icons.LOCKER,
      },
      {
        name: "Centralised AC",
        icon: icons.AC,
      },
      {
        name: "02 Bathroom",
        icon: icons.BATHROOM,
        type: "image",
      },
      {
        name: "Wifi",
        icon: icons.WIFI,
      },
      {
        name: "E. Key Cards",
        icon: icons.KEYS,
      },
      {
        name: "Hot Tea & Coffee Cattle",
        icon: icons.BREAKFAST,
      },
      {
        name: "Toiletry Kit",
        icon: icons.TOILET_KIT,
      },
    ],
  },
  {
    title: "Suite Rooms",
    imageName: "suite1.jpeg",
    type: roomServiceTypes.SUITE_ROOMS,
    description:
      "Immerse yourself in the pinnacle of luxury at Lotus Resort Raipur with our opulent Suite Rooms. Offering 04 super luxury rooms, each accommodates 2+2 occupancy providing ample space for families or groups seeking an exceptional experience.<br/>Unwind in sophisticated comfort with separate seating and dining areas, perfect for both relaxation and entertainment. Maintain connectivity with complimentary Wi-Fi access, and utilize the in-room digital locker for added security. Indulge in the ultimate pampering with double bathrooms, and relish a refreshing cup of tea or coffee brewed in the provided hot tea & coffee cattle. <br/>Elevate your Raipur stay and book your Suite Room today - a Room of unparalleled comfort, luxury, and convenience awaits.",
    amenities: [
      {
        name: "2 + 2 Occupancy",
        icon: icons.PEOPLE,
      },
      {
        name: "Digi Locker",
        icon: icons.LOCKER,
      },
      {
        name: "Centralised AC",
        icon: icons.AC,
      },
      {
        name: "02 Bathroom",
        icon: icons.BATHROOM,
        type: "image",
      },
      {
        name: "Dining Area",
        icon: icons.BREAKFAST,
      },
      {
        name: "Sofas & Separate Seatings Area",
        icon: icons.SOFA,
        type: "image",
      },
      {
        name: "Wifi",
        icon: icons.WIFI,
      },
      {
        name: "E. Key Cards",
        icon: icons.KEYS,
      },
      {
        name: "Hot Tea & Coffee Cattle",
        icon: icons.BREAKFAST,
      },
      {
        name: "Toiletry Kit",
        icon: icons.TOILET_KIT,
      },
    ],
  },
  {
    title: "Semi Grand Deluxe",
    imageName: "semi-grand-deluxe1.jpeg",
    type: roomServiceTypes.SEMI_GRAND_DELUXE,
    description:
      "Immerse yourself in spacious luxury at Lotus Resort Raipur with our Semi-Grand Deluxe Rooms. Offering 4 exquisite rooms, each comfortably accommodating 6 guests, these provide ample space for families or groups seeking an extraordinary experience. <br/> Stay connected with complimentary Wi-Fi and indulge in the ultimate pampering with double bathrooms. Savor a refreshing cup of tea or coffee brewed in the provided hot tea & coffee set. <br/> Elevate your Raipur retreat by booking your Semi-Grand Deluxe Room today - a sanctuary of unmatched comfort, luxury, and convenience awaits.",
    amenities: [
      {
        name: "6 Occupancy",
        icon: icons.PEOPLE,
      },
      {
        name: "Centralised AC",
        icon: icons.AC,
      },
      {
        name: "02 Bathroom",
        icon: icons.BATHROOM,
        type: "image",
      },
      {
        name: "Wifi",
        icon: icons.WIFI,
      },
      {
        name: "E. Key Cards",
        icon: icons.KEYS,
      },
      {
        name: "Hot Tea & Coffee Cattle",
        icon: icons.BREAKFAST,
      },
      {
        name: "Toiletry Kit",
        icon: icons.TOILET_KIT,
      },
    ],
  },
  {
    title: "Grand Deluxe",
    imageName: "grand-deluxe1.jpeg",
    type: roomServiceTypes.GRAND_DELUXE,
    description:
      "Immerse yourself in spacious luxury at Lotus Resort Raipur with our Grand Deluxe Room. Offering a single large room, comfortably accommodating 30 guests, it provides ample space for families or groups seeking an extraordinary experience. <br/> Enjoy the convenience of complimentary Wi-Fi and indulge in the ultimate pampering with double bathrooms. <br/> Elevate your Raipur retreat by booking your Grand Deluxe Room today - a sanctuary of unmatched comfort, luxury, and convenience awaits.",
    amenities: [
      {
        name: "30 Occupancy",
        icon: icons.PEOPLE,
      },
      {
        name: "Centralised AC",
        icon: icons.AC,
      },
      {
        name: "02 Bathroom",
        icon: icons.BATHROOM,
        type: "image",
      },
      {
        name: "Wifi",
        icon: icons.WIFI,
      },
      {
        name: "Toiletry Kit",
        icon: icons.TOILET_KIT,
      },
    ],
  },
];
