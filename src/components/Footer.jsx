import React from 'react';

const Footer = () => {
    return (
        <footer className="art-footer">
            <div className="footer-content">
                <p>Copyright © 2018, Tunaweza Mwanza. All Rights Reserved.</p>
                <div className="social-media">
                    <a href="https://www.facebook.com/tunaweza-mwanza-1380476892066942/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/images/facebook.png" alt="Facebook" width="50" height="50" />
                    </a>
                    <a href="https://www.tunawezatz.org:2096/cpsess3510174294/webmail/paper_lantern/index.html?login=1&post_login=66288587705637" target="_blank" rel="noopener noreferrer">
                        <img src="assets/images/Webmail-app.png" alt="Webmail" width="100" height="39" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;