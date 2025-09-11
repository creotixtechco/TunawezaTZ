import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="art-nav">
            <ul className="art-hmenu">
                <li><Link to="/home" className="active">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li>
                    <Link to="#">News</Link>
                    <ul>
                        <li><Link to="/news/newsletter">Newsletter</Link></li>
                        <li><Link to="/news/events">Events</Link></li>
                        <li><Link to="/news/reports">Reports</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="#">Partners</Link>
                    <ul>
                        <li><Link to="/partners/local-cooperation">Local Cooperation</Link></li>
                        <li><Link to="/partners/international-cooperation">International Cooperation</Link></li>
                    </ul>
                </li>
                <li><Link to="/contacts">Contacts</Link></li>
                <li><Link to="/donation-and-support">Donation and Support</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/volunteerism">Volunteerism</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;