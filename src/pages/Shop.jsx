import React from 'react';

const Shop = () => {
    return (
        <div className="shop-container">
            <h1 className="text-2xl font-bold mb-4">Shop</h1>
            <p>Welcome to our shop! Here you can find various products made by our talented individuals.</p>
            <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Example product item */}
                <div className="product-item border p-4 rounded">
                    <img src="/assets/images/example-product.jpg" alt="Example Product" className="w-full h-48 object-cover mb-2" />
                    <h2 className="text-xl font-semibold">Product Name</h2>
                    <p className="text-gray-700">Description of the product goes here.</p>
                    <span className="text-lg font-bold">$XX.XX</span>
                    <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
                </div>
                {/* More product items can be added here */}
            </div>
        </div>
    );
};

export default Shop;