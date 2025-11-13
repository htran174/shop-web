export const HANDNAIL_MENU = [
  // ----- GEL / NATURAL NAILS -----
  {
    number: 1,
    name: "Gel Manicure",
    price: "$40.00",
    description: "Nail shaping, cuticle care, gel polish, and hydrating finish.",
    isActive: true,
    sortGroup: "gel",
    addons: [
      { name: "Designs" , price: "+$5 & up" },
      { name: "Gel Removal (No Service)", price: "+$10" }
    ]
  },
  {
    number: 2,
    name: "Gel Builder",
    price: "$60.00",
    description: "Builder gel overlay for added strength with a natural look.",
    isActive: true,
    sortGroup: "gel",
    addons: [
      { name: "French Tip (White or Color)", price: "+$10" },
      { name: "Designs / Diamonds", price: "+$5 & up" },
      { name: "Extra Length (M / L / XL)", price: "+$5 & up" }

    ]
  },

  // ----- ACRYLIC / FAKE NAILS -----
  {
    number: 3,
    name: "Refill",
    price: "$45.00",
    description: "Refill and rebalance for existing acrylic or gel extensions.",
    isActive: true,
    sortGroup: "acrylic",
    addons: [
      { name: "Shape Change (Coffin, Almond, Stiletto)", price: "+$5" },
      { name: "French Tip (White or Color)", price: "+$10" },
      { name: "Repairs", price: "+$5 & up" },
      { name: "Designs / Diamonds", price: "+$5 & up" }
    ]
  },
  {
    number: 4,
    name: "Full Set",
    price: "$55.00",
    description: "New acrylic or gel extensions with shaping and polish.",
    isActive: true,
    sortGroup: "acrylic",
    addons: [
      { name: "White or Color French Tip", price: "+$10" },
      { name: "Designs / Diamonds", price: "+$5 & up" },
      { name: "Extra Length (M / L / XL)", price: "+$5 & up" }
    ]
  },
  {
    number: 5,
    name: "Dipping Powder",
    price: "$50.00",
    description: "Lightweight dip system for added strength and shine.",
    isActive: true,
    sortGroup: "acrylic",
    addons: [
      { name: "Tip Extension", price: "+$10" },
      { name: "French Tip (White or Color)", price: "+$10" },
      { name: "Designs / Diamonds", price: "+$5 & up" }
    ]
  }
];
