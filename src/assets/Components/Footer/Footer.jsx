import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0f172a] text-gray-400 p-10 font-sans">
            <div className="max-w-300 mx-auto">
                <div className="footer place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
                    <aside className="max-w-xs flex flex-col items-center md:items-start  text-center md:text-start">
                        <a className="text-white text-3xl font-bold mb-4" href="/index.html">DigiTools</a>
                        <p className="leading-relaxed">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title font-medium text-white opacity-100 normal-case text-lg mb-4">Product</h6>
                        <span className="mb-2 block cursor-default">Features</span>
                        <span className="mb-2 block cursor-default">Pricing</span>
                        <span className="mb-2 block cursor-default">Templates</span>
                        <span className="mb-2 block cursor-default">Integrations</span>
                    </nav>
                    <nav>
                        <h6 className="footer-title font-medium text-white opacity-100 normal-case text-lg mb-4">Company</h6>
                        <span className="mb-2 block cursor-default">About</span>
                        <span className="mb-2 block cursor-default">Blog</span>
                        <span className="mb-2 block cursor-default">Careers</span>
                        <span className="mb-2 block cursor-default">Press</span>
                    </nav>
                    <nav>
                        <h6 className="footer-title font-medium text-white opacity-100 normal-case text-lg mb-4">Resources</h6>
                        <span className="mb-2 block cursor-default">Documentation</span>
                        <span className="mb-2 block cursor-default">Help Center</span>
                        <span className="mb-2 block cursor-default">Community</span>
                        <span className="mb-2 block cursor-default">Contact</span>
                    </nav>
                    <div className="mt-6">
                        <h6 className="footer-title font-medium text-white opacity-100 normal-case text-lg mb-4">Social Links</h6>
                        <div className="flex gap-4">
                            <div className="bg-white p-2 rounded-full cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.196 4.354 2.617 6.78 6.979 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.196 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </div>
                            <div className="bg-white p-2 rounded-full cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </div>
                            <div className="bg-white p-2 rounded-full cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span className="cursor-default">Privacy Policy</span>
                        <span className="cursor-default">Terms of Service</span>
                        <span className="cursor-default">Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;