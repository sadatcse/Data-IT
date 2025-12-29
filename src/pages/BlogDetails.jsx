// src/pages/BlogDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag, ArrowRight } from 'lucide-react';
import useBlogData from '../hooks/useBlogData';
import SEO from '../components/SEO/SEO';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: blogs, loading } = useBlogData();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        // Scroll to top whenever the ID changes (new post loaded)
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (!loading && blogs.length > 0) {
            const currentId = parseInt(id) || id;
            
            // 1. Find the current post
           const foundPost = blogs.find((blog) => blog.id === parseInt(id) || blog.id === id);
            
            if (foundPost) {
                setPost(foundPost);

                // 2. Find Related Posts (Logic: Same Category, exclude current, max 3)
                let related = blogs.filter(b => b.category === foundPost.category && b.id !== currentId);
                
                if (related.length < 3) {
                    const others = blogs.filter(b => b.category !== foundPost.category && b.id !== currentId);
                    related = [...related, ...others];
                }

                setRelatedPosts(related.slice(0, 3));

            } else {
                // navigate('/blog'); // Optional redirect
            }
        }
    }, [id, blogs, loading, navigate]);

    if (loading) return <div className="h-screen flex justify-center items-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>;
    
    if (!post) return (
        <div className="text-center py-20">
            {/* SEO for 404 / Post Not Found */}
            <SEO 
                title="Article Not Found" 
                description="The article you are looking for does not exist." 
                siteName="Data IT"
            />
            Post not found.
        </div>
    );

    return (
        <div className="bg-white min-h-screen">
            {/* SEO Implementation for Single Blog Post */}
            <SEO 
                title={post.title}
                description={post.summary}
                keywords={`Data IT Blog, ${post.category}, ${post.title}, Technology Insights`}
                image={post.image_url}
                url={`/blog/${post.id}`}
                type="article"
                author={post.author_name}
                publishedTime={post.publish_date}
                siteName="Data IT"
            />

            {/* 1. Hero Image Section */}
            <div className="w-full h-[400px] relative">
                <img 
                    src={post.image_url} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white container mx-auto">
                    <span className="bg-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block shadow-sm">
                        {post.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-md">
                        {post.title}
                    </h1>
                    <div className="flex items-center space-x-6 text-sm text-gray-200">
                        <div className="flex items-center space-x-2">
                            <User className="h-4 w-4" />
                            <span>{post.author_name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>{post.publish_date}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Content Section */}
            <div className="container mx-auto px-4 max-w-4xl -mt-10 relative z-10 pb-20">
                <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
                    {/* Back Button */}
                    <Link to="/blog" className="inline-flex items-center text-primary hover:text-indigo-800 font-medium mb-8 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to All Articles
                    </Link>

                    {/* Summary Quote */}
                    <div className="border-l-4 border-indigo-500 pl-6 py-4 italic text-gray-600 text-lg mb-10 bg-gray-50 rounded-r-lg">
                        {post.summary}
                    </div>

                    {/* Full Article */}
                    <article className="prose prose-lg text-gray-700 max-w-none leading-relaxed whitespace-pre-line">
                        {post.full_article}
                    </article>

                    {/* Tags Footer */}
                    <div className="mt-12 pt-8 border-t border-gray-100 flex items-center text-gray-500 text-sm">
                        <Tag className="h-4 w-4 mr-2" />
                        <span>Category: <strong className="text-gray-700">{post.category}</strong></span>
                    </div>
                </div>
            </div>

            {/* 3. Recommended For You Section */}
            {relatedPosts.length > 0 && (
                <div className="bg-gray-50 py-16 border-t border-gray-200">
                    <div className="container mx-auto px-4">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center md:text-left">Recommended For You</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((related) => (
                                <Link 
                                    to={`/blog/${related.id}`} 
                                    key={related.id} 
                                    className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col h-full border border-gray-100"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img 
                                            src={related.image_url} 
                                            alt={related.title} 
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded shadow">
                                            {related.category}
                                        </span>
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {related.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
                                            {related.summary}
                                        </p>
                                        <div className="flex items-center text-primary font-semibold text-sm mt-auto">
                                            Read Article <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogDetails;