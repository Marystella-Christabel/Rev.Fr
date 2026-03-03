import React from 'react';

const Home = () => {
    return (
        <div className="page home">
            <section className="hero">
                <div className="container">
                    <div className="grid-2">
                        <div style={{ textAlign: 'left' }}>
                            <h1 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>Rev. Fr Emmanuel Chibuzor Obimma</h1>
                            <div className="text-red" style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.2' }}>Ebube Muonso</div>
                            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>A beacon of hope, deliverance, and spiritual growth in the Onitsha Archdiocese, Anambra State.</p>
                            <a href="/services" className="btn btn-primary">View Ministry Schedule</a>
                        </div>
                        <div className="media-placeholder video-frame">
                            {/* Placeholder for Ebube Muonso introduction video */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="highlights container" style={{ marginTop: '-4rem' }}>
                <div className="highlight-card">
                    <h3>Parish Priest</h3>
                    <p>Faithfully serving as the Parish Priest of <strong>Blessed Iwene Tansi Parish, Umudioka</strong>.</p>
                    <div className="media-placeholder photo-frame" style={{ marginTop: '1.5rem', minHeight: '150px' }}></div>
                </div>
                <div className="highlight-card">
                    <h3>The Ministry</h3>
                    <p>Founder of <strong>Holy Ghost Fraternity</strong>, a global adoration ministry in Uke, Anambra.</p>
                    <div className="media-placeholder photo-frame" style={{ marginTop: '1.5rem', minHeight: '150px' }}></div>
                </div>
                <div className="highlight-card">
                    <h3>14+ Years of Grace</h3>
                    <p>Over 14 years of transformative ministry since 2011, touching lives through the power of the Holy Spirit.</p>
                    <div className="media-placeholder photo-frame" style={{ marginTop: '1.5rem', minHeight: '150px' }}></div>
                </div>
            </section>

            <section className="container" style={{ padding: '4rem 0' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ministry in Action</h2>
                <div className="grid-2">
                    <div className="media-placeholder video-frame"></div>
                    <div className="media-placeholder photo-frame"></div>
                </div>
            </section>
        </div>
    );
};

export default Home;
