const pgData = {
    name: "Renao Residency",
    tagline: "Fully furnished rooms with AC and complete facilities.",
    locationNote: "Habitech Crystal Mall, Knowledge Park 3, Greater Noida (U.P.) 201306.",
    buildings: ["Qube", "Clubhouse"],
    mapLink:
        "https://www.google.com/maps/search/?api=1&query=Habitech%20Crystal%20Mall%2C%20Knowledge%20Park%203%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201306",
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
        "Proper society with security",
        "Security cameras on every floor",
        "Blinkit store inside the society",
        "Fridge, oven, and kettle",
        "Almirah and mattress",
        "Balcony",
        "TV, table, and chair",
        "Dedicated kitchen area"
    ],
    visitingCard: {
        title: "Renao Residency (Fully Furnished with AC)",
        contactName: "Anil Kumar",
        phone: "+91 7428694669",
        email: "renaoresidency@gmail.com",
        hours: "Daily: 9:00 AM – 8:00 PM",
        notes: "Individual rooms with complete facility."
    }
};

export default pgData;
