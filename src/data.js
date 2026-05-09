const pgData = {
    name: "Modern PG Stay",
    tagline: "Fully furnished 1RK rooms with a dedicated kitchen area.",
    locationNote: "Safe, clean, and comfortable living with a modern vibe.",
    eligibility: ["Indians allowed", "Nigerians allowed", "Boys allowed", "Girls allowed"],
    electricityRatePerUnit: 8.68,
    billingNote: "Electricity billed on prepaid meter. Pay via app.",
    rooms: [
        {
            id: "small-1rk",
            name: "Small Room 1RK",
            rentPerMonth: 12000,
            maintenanceCharge: 2700,
            sizeNote: "Cozy setup ideal for solo living",
            image: "/images/room-small.svg"
        },
        {
            id: "big-1rk",
            name: "Big Room 1RK",
            rentPerMonth: 15000,
            maintenanceCharge: 3600,
            sizeNote: "Extra space with a bright balcony",
            image: "/images/room-big.svg"
        }
    ],
    amenities: [
        "Fully furnished rooms",
        "Fridge, oven, and kettle",
        "Almirah and mattress",
        "Balcony",
        "TV, table, and chair",
        "Dedicated kitchen area"
    ],
    visitingCard: {
        title: "PG Visiting Card",
        contactName: "PG Care Desk",
        phone: "+91 90000 00000",
        email: "info@modernpg.example",
        hours: "Daily: 9:00 AM – 8:00 PM",
        notes: "Walk-ins welcome. ID verification required for all residents."
    }
};

export default pgData;
