import React from 'react';

const Services = () => {
    return (
        <div className="page services">
            <div className="container">
                <h1>Ministry Activities & Schedules</h1>
                <p>Join us in our weekly and daily spiritual exercises.</p>

                <section className="schedule-section">
                    <h2 className="text-red">1st Week of Activities</h2>
                    <div className="schedule-grid">
                        <div className="schedule-card special">
                            <h4>Tuesday</h4>
                            <p className="activity">Awaiting Mothers</p>
                        </div>
                        <div className="schedule-card special">
                            <h4>Wednesday</h4>
                            <p className="activity">Heaven</p>
                        </div>
                        <div className="schedule-card special">
                            <h4>Thursday</h4>
                            <p className="activity">Deliverance</p>
                        </div>
                        <div className="schedule-card special">
                            <h4>Friday</h4>
                            <p className="activity">Vigil Night</p>
                        </div>
                    </div>
                </section>

                <section className="schedule-section">
                    <h2 className="text-red">Special Programs</h2>
                    <div className="schedule-grid">
                        <div className="schedule-card special" style={{ borderLeftWidth: '8px' }}>
                            <span className="time">Monthly</span>
                            <h4>Cross Over Night Vigil</h4>
                            <p className="activity">Held every last day of the month to usher in the new month with power.</p>
                        </div>
                        <div className="schedule-card special" style={{ borderLeftWidth: '8px' }}>
                            <span className="time">Every Sunday Night</span>
                            <h4>Praise & Deliverance</h4>
                            <p className="activity">Join us at the Parish for an intense night of praise and spiritual deliverance.</p>
                        </div>
                    </div>
                </section>

                <section className="container" style={{ marginTop: '4rem' }}>
                    <div className="media-placeholder video-frame" style={{ minHeight: '400px' }}>
                        {/* Highlights of previous Deliverance session */}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;
