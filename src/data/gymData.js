// Shared data across branches
export const pricingData = [
  {
    category: "Gym Session",
    tiers: [
      { name: "Regular", price: "₱80", description: "Per session" },
      { name: "Student / Senior / PWD", price: "₱60", description: "Per session (Valid ID required)" }
    ]
  },
  {
    category: "Monthly Membership",
    tiers: [
      { name: "Regular", price: "₱900", description: "Unlimited gym access" },
      { name: "Concession", price: "₱650", description: "Student / Senior / PWD" },
      { name: "Monthly + Treadmill", price: "₱1,200", description: "Gym access with unlimited treadmill" },
      { name: "Treadmill Only", price: "₱550", description: "Treadmill access only" }
    ]
  },
  {
    category: "Dance Studio Rental",
    tiers: [
      { name: "Regular", price: "₱40", description: "Per hour (Min 5 pax)" },
      { name: "Concession", price: "₱30", description: "Per hour (Min 5 pax)" }
    ]
  }
];

export const sharedHours = [
  { day: "Monday - Saturday", time: "7:00 AM – 10:00 PM" },
  { day: "Sunday", time: "7:00 AM – 7:00 PM" }
];

export const branches = [
  {
    id: "cavite-city",
    name: "Cavite City",
    address: "Placeholder Address, Cavite City", // Placeholder
    slug: "cavite-city",
  },
  {
    id: "tarlac",
    name: "Tarlac",
    address: "Placeholder Address, Tarlac", // Placeholder
    slug: "tarlac",
  },
  {
    id: "lipa",
    name: "Lipa",
    address: "Placeholder Address, Lipa", // Placeholder
    slug: "lipa",
  }
];

export const servicesList = [
  { title: "Strength Training", description: "Build muscle and increase strength with our top-of-the-line free weights and machines.", placeholder: true },
  { title: "Circuit Training", description: "High-intensity workouts designed to burn fat and improve cardiovascular health.", placeholder: true },
  { title: "Dance & Zumba", description: "Fun, energetic group classes in our dedicated dance studio.", placeholder: true },
  { title: "Martial Arts", description: "Learn self-defense and improve discipline with our martial arts programs.", placeholder: true }
];

// NOTE: Pricing and hours are originally confirmed for Cavite City only,
// but assumed the same everywhere until told otherwise.
