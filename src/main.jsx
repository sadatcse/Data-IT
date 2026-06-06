import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { HelmetProvider } from 'react-helmet-async'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// Layout & Error
import Root from './pages/default/Root'
const Error404 = lazy(() => import('./pages/default/Error404'))

// Common Pages
const Home = lazy(() => import('./pages/Home'))
const Portfolios = lazy(() => import('./pages/Portfolios'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogDetails = lazy(() => import('./pages/BlogDetails'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Careers = lazy(() => import('./pages/Careers'))
const Project = lazy(() => import('./pages/Project'))
const TechnologyTransformation = lazy(() => import('./pages/BusinessTransformation'))

// Legal Pages
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'))

// 🔹 Services → Branding
const CorporateBranding = lazy(() => import('./pages/Services/Branding/CorporateBranding'))
const PersonalBranding = lazy(() => import('./pages/Services/Branding/PersonalBranding'))
const ReBranding = lazy(() => import('./pages/Services/Branding/ReBranding'))

// 🔹 Services → Design
const GraphicDesign = lazy(() => import('./pages/Services/Design/GraphicDesign'))
const UiUxDesign = lazy(() => import('./pages/Services/Design/UI_UX_Design'))

// 🔹 Services → Organic Growth (SEO)
const SeoEcommerce = lazy(() => import('./pages/Services/Organic Growth/SEO_Ecommerce'))
const SeoGarments = lazy(() => import('./pages/Services/Organic Growth/SEO_Garments'))
const SeoLocal = lazy(() => import('./pages/Services/Organic Growth/SEO_Local'))
const SeoProfessional = lazy(() => import('./pages/Services/Organic Growth/SEO_Professional'))
const SeoTravelAgents = lazy(() => import('./pages/Services/Organic Growth/SEO_TravelAgents'))

// 🔹 Services → Others
const PrAgency = lazy(() => import('./pages/Services/Others/PRAgency'))
const VideoProduction = lazy(() => import('./pages/Services/Others/VideoProduction'))

// 🔹 Services → SMM
const SocialMediaMarketing = lazy(() => import('./pages/Services/SMM/SocialMediaMarketing'))

// 🔹 Services → Software
const GymManagementSystem = lazy(() => import('./pages/Services/Software/GymManagementSystem'))
const RestaurantManagementSystem = lazy(() => import('./pages/Services/Software/RestaurantManagementSystem'))
const RiceMillManagementSystem = lazy(() => import('./pages/Services/Software/RiceMillManagementSystem'))

// 🔹 Services → Website & Content
const WebDesignAndDevelopment = lazy(() => import('./pages/Services/Website and Content/WebDesignAndDevelopment'))
const EcommerceWebsite = lazy(() => import('./pages/Services/Website and Content/EcommerceWebsite'))
const WebsiteMaintenance = lazy(() => import('./pages/Services/Website and Content/WebsiteMaintenance'))
const CustomWebApplicationDevelopment = lazy(() => import('./pages/Services/Website and Content/CustomWebApplicationDevelopment'))

// Slider CSS
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const Team = lazy(() => import('./pages/Services/Team'))

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
      { path: 'team', element: <Team /> },

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

