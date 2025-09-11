import React from 'react';

const Partners = () => {
    return (
        <div className="partners-page">
            <h1 className="text-3xl font-bold mb-4">Our Partners</h1>
            <p className="mb-6">
                We are proud to collaborate with various organizations and individuals who share our vision of empowering young people with disabilities. Together, we strive to create opportunities and foster inclusivity in our community.
            </p>
            <div className="partners-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="partner-item p-4 border rounded shadow">
                    <img src="/assets/images/partner1.jpg" alt="Partner 1" className="w-full h-32 object-cover mb-2" />
                    <h2 className="font-semibold">Partner 1</h2>
                    <p>Description of Partner 1's contributions and collaboration.</p>
                </div>
                <div className="partner-item p-4 border rounded shadow">
                    <img src="/assets/images/partner2.jpg" alt="Partner 2" className="w-full h-32 object-cover mb-2" />
                    <h2 className="font-semibold">Partner 2</h2>
                    <p>Description of Partner 2's contributions and collaboration.</p>
                </div>
                <div className="partner-item p-4 border rounded shadow">
                    <img src="/assets/images/partner3.jpg" alt="Partner 3" className="w-full h-32 object-cover mb-2" />
                    <h2 className="font-semibold">Partner 3</h2>
                    <p>Description of Partner 3's contributions and collaboration.</p>
                </div>
                {/* Add more partner items as needed */}
            </div>
        </div>
    );
};

export default Partners;