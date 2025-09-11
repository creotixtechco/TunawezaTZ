import React from 'react';

const Contacts = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">
                Tunaweza Mwanza,<br />
                Location: Pasiansi-Papa Street Block ‘A’#66 - Mwanza Tanzania<br />
                Address: P.O. Box 10263, Mwanza-Tanzania<br />
                Phone: +255 783386879
            </p>
            <p className="mb-4">
                Email: 
                <a href="mailto:info@tunawezatz.org" className="text-blue-500"> info@tunawezatz.org</a>, 
                <a href="mailto:tunweza.mwanza@yahoo.com" className="text-blue-500"> tunweza.mwanza@yahoo.com</a>, 
                <a href="mailto:tunaweza.mza@gmail.com" className="text-blue-500"> tunaweza.mza@gmail.com</a>
            </p>
            <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
            <p className="mb-4">
                Find us on Social Media:
            </p>
            <div className="flex space-x-4">
                <a href="https://www.facebook.com/tunaweza-mwanza-1380476892066942/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/facebook.png" alt="Facebook" className="w-10 h-10" />
                </a>
                <a href="https://www.tunawezatz.org:2096/cpsess3510174294/webmail/paper_lantern/index.html?login=1&post_login=66288587705637" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/Webmail-app.png" alt="Webmail" className="w-24 h-10" />
                </a>
            </div>
        </div>
    );
};

export default Contacts;