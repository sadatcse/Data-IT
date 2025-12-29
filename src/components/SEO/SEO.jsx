// src/components/SEO/SEO.jsx
// Updated to handle external image URLs (e.g., S3/CDN links)
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
    title, 
    description, 
    keywords, 
    image, 
    url, 
    type = 'website', 
    siteName = 'Data IT', 
    twitterHandle = '@datait_bd',
    author = 'Data IT Team',
    language = 'en',
    publishedTime,
    modifiedTime
}) => {
    const baseUrl = 'https://datait.com.bd';
    const finalUrl = url ? `${baseUrl}${url}` : baseUrl;
    
    // Logic to handle local images vs absolute URLs (S3/CDN)
    const finalImage = image && (image.startsWith('http') || image.startsWith('https')) 
        ? image 
        : image ? `${baseUrl}${image}` : `${baseUrl}/og-datait.jpg`;

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Data IT",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "sameAs": [
            "https://www.facebook.com/dataitbd",
            "https://www.linkedin.com/company/datait"
        ]
    };

    return (
        <Helmet>
            <title>{title} | {siteName}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <link rel="canonical" href={finalUrl} />
            <html lang={language} />

            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:site_name" content={siteName} />
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterHandle} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={finalImage} />

            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
    siteName: PropTypes.string,
    twitterHandle: PropTypes.string,
    author: PropTypes.string,
    language: PropTypes.string,
    publishedTime: PropTypes.string,
    modifiedTime: PropTypes.string,
};

export default SEO;