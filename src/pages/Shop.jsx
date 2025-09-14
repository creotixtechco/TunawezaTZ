import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Textiles', 'Jewelry', 'Home Decor', 'Garden Products', 'Paper Crafts'];

    const products = [
        {
            id: 1,
            name: "Handwoven Batik Scarf",
            price: 25,
            category: "Textiles",
            image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Beautiful traditional batik scarf made by our textile students using authentic wax-resist techniques.",
            inStock: true,
            featured: true
        },
        {
            id: 2,
            name: "Beaded Necklace Set",
            price: 18,
            category: "Jewelry",
            image: "https://images.pexels.com/photos/6195127/pexels-photo-6195127.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Elegant beaded necklace and earring set crafted by our jewelry making students.",
            inStock: true,
            featured: false
        },
        {
            id: 3,
            name: "Custom Tailored Dress",
            price: 45,
            category: "Textiles",
            image: "https://images.pexels.com/photos/6195126/pexels-photo-6195126.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Custom-made dress showcasing the skills of our tailoring program graduates.",
            inStock: true,
            featured: true
        },
        {
            id: 4,
            name: "Medicinal Plant Starter Kit",
            price: 15,
            category: "Garden Products",
            image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Collection of medicinal plant seedlings grown in our ecological garden program.",
            inStock: true,
            featured: false
        },
        {
            id: 5,
            name: "Recycled Paper Notebook",
            price: 8,
            category: "Paper Crafts",
            image: "https://images.pexels.com/photos/6195128/pexels-photo-6195128.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Eco-friendly notebook made from recycled paper by our paper crafts workshop.",
            inStock: true,
            featured: false
        },
        {
            id: 6,
            name: "Woven Table Runner",
            price: 22,
            category: "Home Decor",
            image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Colorful table runner featuring traditional patterns and modern design elements.",
            inStock: false,
            featured: false
        },
        {
            id: 7,
            name: "Silver Wire Bracelet",
            price: 12,
            category: "Jewelry",
            image: "https://images.pexels.com/photos/6195127/pexels-photo-6195127.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Delicate silver wire bracelet with intricate patterns, handcrafted with precision.",
            inStock: true,
            featured: false
        },
        {
            id: 8,
            name: "Organic Herb Collection",
            price: 20,
            category: "Garden Products",
            image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Dried organic herbs grown and processed by our ecological gardening students.",
            inStock: true,
            featured: false
        }
    ];

    const filteredProducts = selectedCategory === 'All' 
        ? products 
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="pt-16 lg:pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 to-blue-50 section-padding">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">Tunaweza Shop</h1>
                        <p className="text-body">
                            Support our students by purchasing beautiful, handcrafted products made with skill, 
                            care, and pride. Every purchase directly supports our training programs and helps 
                            students build sustainable livelihoods.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Featured Products</h2>
                        <p className="text-body max-w-2xl mx-auto">
                            Discover our most popular items, showcasing the exceptional skills 
                            and creativity of our students.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        {products.filter(product => product.featured).map(product => (
                            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                                            {product.category}
                                        </span>
                                        <span className="bg-orange-100 text-orange-800 text-xs font-bold px-2 py-1 rounded">
                                            FEATURED
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                                    <p className="text-gray-600 mb-4">{product.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-green-600">${product.price}</span>
                                        <button 
                                            className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                                                product.inStock
                                                    ? 'bg-green-600 hover:bg-green-700 text-white'
                                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                            disabled={!product.inStock}
                                        >
                                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="bg-gray-50 py-8">
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                                    selectedCategory === category
                                        ? 'bg-green-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.filter(product => !product.featured).map(product => (
                            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                                            {product.category}
                                        </span>
                                        {!product.inStock && (
                                            <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                                                Out of Stock
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-green-600">${product.price}</span>
                                        <button 
                                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                                                product.inStock
                                                    ? 'bg-green-600 hover:bg-green-700 text-white'
                                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                            disabled={!product.inStock}
                                        >
                                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Message */}
            <section className="section-padding bg-green-600 text-white">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="heading-lg mb-4">Your Purchase Makes a Difference</h2>
                        <p className="text-xl mb-8 opacity-90">
                            When you buy from our shop, you're not just getting a beautiful, handcrafted product – 
                            you're directly supporting our students' education and helping them build sustainable careers.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-2">100%</div>
                                <div className="text-sm opacity-90">of profits support our programs</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-2">50+</div>
                                <div className="text-sm opacity-90">students benefit from shop sales</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-2">Fair</div>
                                <div className="text-sm opacity-90">wages paid to all student artisans</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Orders */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="heading-lg mb-6">Custom Orders</h2>
                            <p className="text-body mb-6">
                                Looking for something specific? Our talented students can create custom pieces 
                                tailored to your needs. From personalized textiles to unique jewelry designs, 
                                we're here to bring your vision to life.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Personalized Designs</h4>
                                        <p className="text-gray-600">Work directly with our students to create unique pieces</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Bulk Orders</h4>
                                        <p className="text-gray-600">Special pricing available for large quantity orders</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Corporate Gifts</h4>
                                        <p className="text-gray-600">Meaningful corporate gifts that support our mission</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/contact" className="btn-primary">
                                Request Custom Order
                            </Link>
                        </div>
                        <div className="relative">
                            <img 
                                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800" 
                                alt="Students working on custom orders"
                                className="rounded-2xl shadow-lg w-full h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Shipping & Returns */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Shipping & Returns</h2>
                        <p className="text-body max-w-2xl mx-auto">
                            We want you to love your purchase. Here's everything you need to know 
                            about shipping and our return policy.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="text-4xl mb-4">🚚</div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Shipping</h3>
                            <p className="text-gray-600 mb-4">
                                Free shipping within Tanzania. International shipping available with rates calculated at checkout.
                            </p>
                            <p className="text-sm text-gray-500">Delivery: 3-7 business days locally</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="text-4xl mb-4">↩️</div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Returns</h3>
                            <p className="text-gray-600 mb-4">
                                30-day return policy for unused items in original condition. Custom orders are final sale.
                            </p>
                            <p className="text-sm text-gray-500">Return shipping costs apply</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="text-4xl mb-4">💳</div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Payment</h3>
                            <p className="text-gray-600 mb-4">
                                We accept major credit cards, PayPal, and mobile money payments for your convenience.
                            </p>
                            <p className="text-sm text-gray-500">Secure checkout guaranteed</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section-padding bg-blue-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="heading-lg mb-4">Questions About Our Products?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Our team is here to help you find the perfect item or answer any questions 
                        about our handcrafted products.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                            Contact Us
                        </Link>
                        <a 
                            href="mailto:shop@tunawezatz.org" 
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                        >
                            Email Shop
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Shop;