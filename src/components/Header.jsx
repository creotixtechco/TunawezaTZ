import React from 'react';
import './Header.css'; // Assuming you want to add specific styles for the header

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Tunaweza Mwanza</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/pages/home.html">Home</a></li>
                    <li><a href="/pages/about-us.html">About Us</a></li>
                    <li><a href="#">News</a>
                        <ul>
                            <li><a href="/pages/news/newsletter.html">Newsletter</a></li>
                            <li><a href="/pages/news/events.html">Events</a></li>
                            <li><a href="/pages/news/reports.html">Reports</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Partners</a>
                        <ul>
                            <li><a href="/pages/partners/local-cooperation.html">Local Cooperation</a></li>
                            <li><a href="/pages/partners/international-cooperation.html">International Cooperation</a></li>
                        </ul>
                    </li>
                    <li><a href="/pages/contacts.html">Contacts</a></li>
                    <li><a href="/pages/donation-and-support.html">Donation and Support</a></li>
                    <li><a href="/pages/shop.html">Shop</a></li>
                    <li><a href="/pages/volunteerism.html">Volunteerism</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;