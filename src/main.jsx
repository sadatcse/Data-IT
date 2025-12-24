import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { HelmetProvider } from 'react-helmet-async'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// Layout & Error
import Root from './pages/default/Root'
import Error404 from './pages/default/Error404'

// Common Pages
import Home from './pages/Home'
import Portfolios from './pages/Portfolios'
import ContactUs from './pages/ContactUs'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import AboutUs from './pages/AboutUs'
import Careers from './pages/Careers'
import Project from './pages/Project'
import TechnologyTransformation from './pages/BusinessTransformation'

// Legal Pages
import TermsOfUse from './pages/TermsOfUse'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import RefundPolicy from './pages/RefundPolicy'

// 🔹 Services → Branding
import CorporateBranding from './pages/Services/Branding/CorporateBranding'
import PersonalBranding from './pages/Services/Branding/PersonalBranding'
import ReBranding from './pages/Services/Branding/ReBranding'

// 🔹 Services → Design
import GraphicDesign from './pages/Services/Design/GraphicDesign'
import UiUxDesign from './pages/Services/Design/UI_UX_Design'

// 🔹 Services → Organic Growth (SEO)
import SeoEcommerce from './pages/Services/Organic Growth/SEO_Ecommerce'
import SeoGarments from './pages/Services/Organic Growth/SEO_Garments'
import SeoLocal from './pages/Services/Organic Growth/SEO_Local'
import SeoProfessional from './pages/Services/Organic Growth/SEO_Professional'
import SeoTravelAgents from './pages/Services/Organic Growth/SEO_TravelAgents'

// 🔹 Services → Others
import PrAgency from './pages/Services/Others/PRAgency'
import VideoProduction from './pages/Services/Others/VideoProduction'

// 🔹 Services → SMM
import SocialMediaMarketing from './pages/Services/SMM/SocialMediaMarketing'

// 🔹 Services → Software
import GymManagementSystem from './pages/Services/Software/GymManagementSystem'
import RestaurantManagementSystem from './pages/Services/Software/RestaurantManagementSystem'
import RiceMillManagementSystem from './pages/Services/Software/RiceMillManagementSystem'

// 🔹 Services → Website & Content
import WebDesignAndDevelopment from './pages/Services/Website and Content/WebDesignAndDevelopment'
import EcommerceWebsite from './pages/Services/Website and Content/EcommerceWebsite'
import WebsiteMaintenance from './pages/Services/Website and Content/WebsiteMaintenance'
import CustomWebApplicationDevelopment from './pages/Services/Website and Content/CustomWebApplicationDevelopment'

// Slider CSS
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error404 />,
    children: [

      // 🔹 Core Pages
      { path: '/', element: <Home /> },
      { path: 'portfolios', element: <Portfolios /> },
      { path: 'contact', element: <ContactUs /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:id', element: <BlogDetails /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'careers', element: <Careers /> },
      { path: 'project/:id', element: <Project /> },
      { path: 'technology-transformation', element: <TechnologyTransformation /> },

      // 🔹 Legal
      { path: 'terms-of-use', element: <TermsOfUse /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'cookie-policy', element: <CookiePolicy /> },
      { path: 'refund-policy', element: <RefundPolicy /> },

      // 🔹 Services → Others
      { path: 'pr-agency', element: <PrAgency /> },
      { path: 'video-production', element: <VideoProduction /> },

      // 🔹 Services → Design
      { path: 'graphic-design', element: <GraphicDesign /> },
      { path: 'ui-ux', element: <UiUxDesign /> },

      // 🔹 Services → Branding
      { path: 'corporate-branding', element: <CorporateBranding /> },
      { path: 'personal-branding', element: <PersonalBranding /> },
      { path: 're-branding', element: <ReBranding /> },

      // 🔹 Services → Software
      { path: 'rms', element: <RestaurantManagementSystem /> },
      { path: 'gms', element: <GymManagementSystem /> },
      { path: 'ricemms', element: <RiceMillManagementSystem /> },

      // 🔹 Services → Website & Content
      { path: 'web-dev', element: <WebDesignAndDevelopment /> },
      { path: 'ecommerce-website', element: <EcommerceWebsite /> },
      { path: 'website-maintenance', element: <WebsiteMaintenance /> },
      { path: 'custom-web-app', element: <CustomWebApplicationDevelopment /> },

      // 🔹 Services → SEO
      { path: 'seo-ecommerce', element: <SeoEcommerce /> },
      { path: 'seo-garments', element: <SeoGarments /> },
      { path: 'seo-local', element: <SeoLocal /> },
      { path: 'seo-professional', element: <SeoProfessional /> },
      { path: 'seo-travel', element: <SeoTravelAgents /> },

      // 🔹 Services → SMM
      { path: 'social-media-marketing', element: <SocialMediaMarketing /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
)
