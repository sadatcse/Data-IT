import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import useBlogData from '../hooks/useBlogData';
import { Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';

const Blog = () => {
    const { data: blogs, loading, error } = useBlogData();

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(blogs.length / postsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) return <div className="flex justify-center items-center h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div></div>;
    if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-800">Our Latest Insights</h1>
                    <p className="text-sm text-gray-500 mt-2">Home • Blog</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentPosts.map((post) => (
                        <Link 
                            to={`/blog/${post.id}`} // Helper: Links to /blog/1, /blog/2 etc.
                            key={post.id} 
                            className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 group"
                        >
                            <div className="relative overflow-hidden h-52">
                                <img 
                                    src={post.image_url} // Updated Key
                                    alt={post.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                                />
                                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                                    {post.category} {/* Updated Key */}
                                </span>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors mb-3 line-clamp-2">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
                                    {post.summary} {/* Updated Key */}
                                </p>

                                <div className="border-t border-gray-100 my-4"></div>

                                <div className="flex justify-between items-center text-xs text-gray-400">
                                    <div className="flex items-center space-x-2">
                                        <User className="h-4 w-4 text-primary" />
                                        <span>{post.author_name}</span> {/* Updated Key */}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="h-4 w-4 text-gray-400" />
                                        <span>{post.publish_date}</span> {/* Updated Key */}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Pagination (Keep your existing pagination code here) */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-16 space-x-2">
                         {/* ... reuse the pagination buttons from previous response ... */}
                         <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"><ChevronLeft className="h-5 w-5"/></button>
                         <span className="px-4 text-gray-600">Page {currentPage} of {totalPages}</span>
                         <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"><ChevronRight className="h-5 w-5"/></button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;