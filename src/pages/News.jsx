import React from 'react';

const News = () => {
    return (
        <div className="news-page">
            <h1 className="text-3xl font-bold mb-4">Latest News</h1>
            <div className="news-list">
                <article className="news-item mb-4">
                    <h2 className="text-2xl font-semibold">News Title 1</h2>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" className="text-blue-500 hover:underline">Read more</a>
                </article>
                <article className="news-item mb-4">
                    <h2 className="text-2xl font-semibold">News Title 2</h2>
                    <p className="text-gray-700">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="#" className="text-blue-500 hover:underline">Read more</a>
                </article>
                <article className="news-item mb-4">
                    <h2 className="text-2xl font-semibold">News Title 3</h2>
                    <p className="text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <a href="#" className="text-blue-500 hover:underline">Read more</a>
                </article>
            </div>
        </div>
    );
};

export default News;