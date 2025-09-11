import React from 'react';

const DonationSupport = () => {
    return (
        <div className="donation-support">
            <h1 className="text-3xl font-bold mb-4">Donation and Support</h1>
            <p className="mb-4">
                Your support is crucial for us to continue our mission of empowering young people with disabilities. 
                We rely on donations to provide vocational training, resources, and opportunities for self-sufficiency.
            </p>
            <h2 className="text-2xl font-semibold mb-2">How You Can Help</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Make a one-time donation</li>
                <li>Set up a recurring donation</li>
                <li>Donate supplies or materials</li>
                <li>Volunteer your time and skills</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Donation Options</h2>
            <p className="mb-4">
                We accept donations through various methods. Please choose the one that suits you best:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Bank Transfer: Account Number: 123456789</li>
                <li>PayPal: <a href="https://www.paypal.com" className="text-blue-500">Donate via PayPal</a></li>
                <li>Check: Please make checks payable to "Tunaweza Mwanza" and send to our address.</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="mb-4">
                For more information on how to donate or support our cause, please contact us at:
            </p>
            <p>Email: <a href="mailto:info@tunawezatz.org" className="text-blue-500">info@tunawezatz.org</a></p>
            <p>Phone: +255 783386879</p>
        </div>
    );
};

export default DonationSupport;