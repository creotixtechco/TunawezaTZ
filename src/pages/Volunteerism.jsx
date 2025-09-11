import React from 'react';

const Volunteerism = () => {
    return (
        <div className="volunteerism-page">
            <header className="volunteerism-header">
                <h1>Volunteerism</h1>
                <p>Join us in making a difference!</p>
            </header>
            <main className="volunteerism-content">
                <section>
                    <h2>Why Volunteer?</h2>
                    <p>
                        Volunteering is a great way to give back to the community, gain new skills, and meet new people. 
                        At Tunaweza, we believe that everyone has something valuable to contribute.
                    </p>
                </section>
                <section>
                    <h2>How You Can Help</h2>
                    <ul>
                        <li>Assist in workshops and training sessions.</li>
                        <li>Help with administrative tasks.</li>
                        <li>Participate in community outreach programs.</li>
                        <li>Support fundraising events.</li>
                    </ul>
                </section>
                <section>
                    <h2>Get Involved</h2>
                    <p>
                        If you're interested in volunteering with us, please fill out our volunteer application form 
                        or contact us for more information.
                    </p>
                </section>
            </main>
            <footer className="volunteerism-footer">
                <p>Thank you for considering volunteering with Tunaweza!</p>
            </footer>
        </div>
    );
};

export default Volunteerism;