import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="page contact">
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>Connect With Us</h1>
                <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem' }}>
                    Join our spiritual family across all platforms or reach out to us directly.
                </p>

                <div className="grid-2" style={{ marginBottom: '4rem' }}>
                    <div className="card-premium">
                        <h2 className="text-red">Contact Information</h2>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                            <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                                <strong>Phone:</strong> <a href="tel:07018733337" style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>07018733337</a>
                            </li>
                            <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                                <strong>Email:</strong> <a href="mailto:info@ebubemuonso.org" style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>info@ebubemuonso.org</a>
                            </li>
                            <li style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                                <strong>Address:</strong> Blessed Iwene Tansi Parish, Umudioka / Holy Ghost Fraternity, Uke, Anambra.
                            </li>
                        </ul>
                    </div>

                    <div className="card-premium">
                        <h2 className="text-red">Send a Message</h2>
                        <form className="contact-form" onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>
                </div>

                <div className="social-hub">
                    <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Social Channels</h2>
                    <div className="schedule-grid">
                        <div className="schedule-card" style={{ textAlign: 'center' }}>
                            <h4>WhatsApp</h4>
                            <p>@Fada Ebube Mounso</p>
                        </div>
                        <div className="schedule-card" style={{ textAlign: 'center' }}>
                            <h4>Facebook</h4>
                            <p>@Fada Ebube Mounso</p>
                            <p style={{ fontSize: '0.8rem' }}>@Holy Ghost Adoration Ministry</p>
                        </div>
                        <div className="schedule-card" style={{ textAlign: 'center' }}>
                            <h4>YouTube</h4>
                            <p>@Fada Ebube Mounso</p>
                        </div>
                        <div className="schedule-card" style={{ textAlign: 'center' }}>
                            <h4>TikTok</h4>
                            <p>@Fada Ebube Mounso</p>
                            <p style={{ fontSize: '0.8rem' }}>@Holy ghost Fraternity Miracle Tv</p>
                        </div>
                        <div className="schedule-card" style={{ textAlign: 'center' }}>
                            <h4>Instagram</h4>
                            <p>@Fada Ebube Mounso</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
