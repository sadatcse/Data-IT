// src/pages/Project.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import usePortfolioData from '../hooks/usePortfolio'; 
import SEO from '../components/SEO/SEO';

const Project = () => {
    // 1. Get the URL slug
    const { id } = useParams();

    // 2. Fetch all portfolio data
    const { data, loading, error } = usePortfolioData();

    // --- Loading State ---
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    // --- Error State ---
    if (error) {
        return (
            <div className="flex justify-center items-center h-screen text-red-500">
                <p>Error loading portfolio data: {error}</p>
            </div>
        );
    }

    // 3. Find the project
    const project = data.find(item => item.url_title === id);

    // --- Not Found State ---
    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-center px-4">
                {/* SEO for 404/Not Found */}
                <SEO 
                    title="Project Not Found"
                    description="The portfolio project you are looking for does not exist or has been moved."
                    url={`/portfolio/${id}`}
                    siteName="Data IT"
                />
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h2>
                <p className="text-gray-600">We could not find a project matching: <span className="font-mono text-primary">{id}</span></p>
            </div>
        );
    }

    // --- Render Single Project Details ---
    return (
        <section className="py-16 md:py-24 bg-white">
            {/* SEO for Dynamic Project Page */}
            <SEO 
                title={`${project.name} - Case Study`}
                description={project.description ? project.description.substring(0, 160) : `View the case study for ${project.name}, developed by Data IT.`}
                keywords={`${project.name}, Case Study, Software Development, Data IT Portfolio, Web Application`}
                image={project.image_url}
                url={`/portfolio/${project.url_title}`}
                type="article"
                siteName="Data IT"
            />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 1. Feature Image */}
                <div className="w-full mb-16">
                    <img 
                        src={project.image_url}
                        alt={`${project.name} - Project Screenshot`} 
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    /> 
                </div>
                <div></div>

                {/* 2. Text Content */}
                <div className="text-center max-w-4xl mx-auto">
                    
                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                        {project.name}
                    </h1>

                    {/* The Blue Double-Dash Divider */}
                    <div className="flex justify-center gap-2 mb-8">
                        <div className="h-1 w-8 bg-primary rounded-full"></div>
                        <div className="h-1 w-8 bg-primary rounded-full"></div>
                    </div>

                    {/* Description */}
                    <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
                        <p>
                            {project.description}
                        </p>
                    </div>

                </div>
            </div> 
        </section>
    );
};

export default Project;