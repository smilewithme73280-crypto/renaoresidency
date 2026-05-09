import { useEffect, useMemo, useState } from "react";

const formatCurrency = (value) => `₹${value.toLocaleString("en-IN")}`;

const emptyData = {
    eligibility: [],
    rooms: [],
    amenities: [],
    visitingCard: {},
    billingNote: "",
    electricityRatePerUnit: 0,
};

export default function App() {
    const [data, setData] = useState(emptyData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const load = async () => {
            try {
                const response = await fetch("/api/pg");
                if (!response.ok) {
                    throw new Error(`Request failed: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError("Unable to load PG details. Please try again shortly.");
            } finally {
                setLoading(false);
            }
        };

        load();
    }, []);

    const {
        eligibility,
        rooms,
        amenities,
        visitingCard,
        billingNote,
        electricityRatePerUnit,
        locationNote,
        buildings,
        mapLink
    } = data;

    const billingText = useMemo(() => {
        if (rooms.length < 2) {
            return "";
        }
        return `Small 1RK: ${formatCurrency(rooms[0].maintenanceCharge)} | Big 1RK: ${formatCurrency(
            rooms[1].maintenanceCharge
        )}`;
    }, [rooms]);

    return (
        <>
            <header className="hero">
                <nav className="nav">
                    <div className="logo">Modern PG Stay</div>
                    <a className="nav-cta" href="#pricing">
                        View Rooms
                    </a>
                </nav>
                <div className="hero-grid">
                    <div className="hero-text">
                        <p className="badge">Fully Furnished • Dedicated Kitchen</p>
                        <h1>Modern, safe, and spacious PG living</h1>
                        <p className="subtitle">
                            Premium 1RK rooms with prepaid electricity billing, modern interiors, and a
                            welcoming community for everyone.
                        </p>
                        <div className="hero-actions">
                            <a className="primary" href="#visiting-card">
                                Get Visiting Card
                            </a>
                            <a className="secondary" href="#amenities">
                                Explore Amenities
                            </a>
                        </div>
                        <div className="hero-highlights" id="eligibility">
                            {eligibility.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="/hero.svg" alt="Modern PG building" />
                    </div>
                </div>
            </header>

            <main>
                <section className="section" id="pricing">
                    <div className="section-title">
                        <span className="eyebrow">Rooms & Pricing</span>
                        <h2>Choose a room that fits your vibe</h2>
                        <p className="muted">Rent includes maintenance. Electricity billed separately.</p>
                    </div>
                    {loading && <p className="muted">Loading room details…</p>}
                    {error && <p className="muted">{error}</p>}
                    <div className="cards" id="room-cards">
                        {rooms.map((room) => (
                            <article className="card" key={room.name}>
                                <img src={room.image} alt={room.name} />
                                <div>
                                    <h3>{room.name}</h3>
                                    <p className="muted">{room.sizeNote}</p>
                                </div>
                                <div>
                                    <div className="price">
                                        {formatCurrency(room.rentPerMonth)}<span>/month</span>
                                    </div>
                                    <p className="muted">Maintenance: {formatCurrency(room.maintenanceCharge)}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="billing-card" id="billing">
                        <div>
                            <strong>Electricity: {billingNote}</strong>
                            <p>Rate: ₹{electricityRatePerUnit.toFixed(2)} per unit</p>
                        </div>
                        <div>
                            <strong>Maintenance included in rent</strong>
                            <p>{billingText}</p>
                        </div>
                    </div>
                </section>

                <section className="section alt" id="amenities">
                    <div className="section-title">
                        <span className="eyebrow">Amenities</span>
                        <h2>Fully furnished with every essential</h2>
                    </div>
                    <div className="amenities-grid" id="amenities-list">
                        {amenities.map((item) => (
                            <div className="amenity" key={item}>
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section" id="visiting-card">
                    <div className="section-title">
                        <span className="eyebrow">Visiting Card</span>
                        <h2>Everything you need, at a glance</h2>
                    </div>
                    <div className="visiting-wrapper">
                        <div className="visiting-card" id="visiting">
                            <h3>{visitingCard.title}</h3>
                            <p>
                                <strong>{visitingCard.contactName}</strong>
                            </p>
                            <p>{visitingCard.phone}</p>
                            <p>{visitingCard.email}</p>
                            <p>{visitingCard.hours}</p>
                            <p>{visitingCard.notes}</p>
                        </div>
                        <div className="visiting-details">
                            <h3>Who can stay?</h3>
                            <ul id="eligibility-list">
                                {eligibility.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <div className="location-block">
                                <h4>Location</h4>
                                <p className="muted">{locationNote}</p>
                                {mapLink && (
                                    <a className="location-link" href={mapLink} target="_blank" rel="noreferrer">
                                        Open in Google Maps
                                    </a>
                                )}
                            </div>
                            <div className="location-block">
                                <h4>Buildings</h4>
                                <p className="muted">{buildings?.join(" • ")}</p>
                            </div>
                            <p className="muted">
                                All rooms are fully furnished with fridge, oven, kettle, almirah, mattress,
                                TV, table, and chair. Every room includes a balcony and a dedicated kitchen
                                area.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section alt" id="gallery">
                    <div className="section-title">
                        <span className="eyebrow">Spaces</span>
                        <h2>Designed for comfort</h2>
                    </div>
                    <div className="gallery">
                        <img src="/room-small.svg" alt="Small 1RK room" />
                        <img src="/room-big.svg" alt="Big 1RK room" />
                        <img src="/kitchen.svg" alt="Dedicated kitchen area" />
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div>
                    <h4>Modern PG Stay</h4>
                    <p className="muted">Comfort, safety, and community in one place.</p>
                </div>
                <div>
                    <p className="muted">Electricity billed via prepaid meter at ₹8.68 per unit.</p>
                </div>
            </footer>
        </>
    );
}
