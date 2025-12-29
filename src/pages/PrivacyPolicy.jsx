// src/pages/PrivacyPolicy.jsx
import React from 'react';
import SEO from '../components/SEO/SEO';

const PrivacyPolicy = () => {
  return (
    <main className="w-full font-sans">
      {/* SEO Implementation for Privacy Policy */}
      <SEO 
        title="Privacy Policy | Data IT - Data Protection & Security"
        description="Learn how Data IT collects, uses, and protects your personal information. Our Privacy Policy ensures transparency and data security for all our clients."
        keywords="Privacy Policy, Data IT Privacy, Data Protection, GDPR Compliance, User Data Security, Information Collection"
        url="/privacy-policy"
        siteName="Data IT"
        type="website"
      />

      {/* ================= HERO SECTION ================= */}
      <section className="bg-navy-dark text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/80 text-lg">
            Your privacy matters to us. Learn how Data IT collects, uses, and protects your information.
          </p>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto space-y-12 text-gray-dark text-lg leading-relaxed">

          {/* Intro */}
          <div>
            <p>
              At <span className="font-semibold text-navy">Data IT</span>, we are committed to
              protecting your privacy and personal data. This Privacy Policy explains how
              we collect, use, store, and safeguard your information when you access our
              website, products, and services.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              1. Information We Collect
            </h2>
            <p>
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal information (name, email address, phone number)</li>
              <li>Business-related details provided during inquiries or projects</li>
              <li>Technical data such as IP address, browser type, and device information</li>
              <li>Usage data related to how you interact with our website and services</li>
            </ul>
          </div>

          {/* How We Use Information */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              2. How We Use Your Information
            </h2>
            <p>
              We use collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our services</li>
              <li>Respond to inquiries and support requests</li>
              <li>Develop custom software and digital solutions</li>
              <li>Communicate updates, offers, or important notices</li>
              <li>Ensure security and prevent unauthorized access</li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              3. Data Sharing & Disclosure
            </h2>
            <p>
              Data IT does not sell or rent your personal information. We may share data
              only with trusted partners or service providers when necessary to deliver
              our services, comply with legal obligations, or protect our rights.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              4. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect
              your information against unauthorized access, loss, misuse, or alteration.
              However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              5. Cookies & Tracking Technologies
            </h2>
            <p>
              Our website may use cookies and similar technologies to enhance user
              experience, analyze usage, and improve performance. You can choose to
              disable cookies through your browser settings.
            </p>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              6. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. Data IT is not
              responsible for the privacy practices or content of external sites.
              We encourage you to review their privacy policies separately.
            </p>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              7. Data Retention
            </h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the
              purposes outlined in this policy, comply with legal obligations, and
              resolve disputes.
            </p>
          </div>

          {/* User Rights */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              8. Your Rights
            </h2>
            <p>
              You have the right to request access, correction, or deletion of your
              personal data. You may also object to or restrict certain data processing
              activities, subject to applicable laws.
            </p>
          </div>

          {/* Policy Updates */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p>
              Data IT may update this Privacy Policy from time to time. Any changes will
              be posted on this page, and continued use of our services indicates your
              acceptance of the updated policy.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              10. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or how we
              handle your data, please contact us at{" "}
              <span className="font-semibold">info@datait.com.bd</span>.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default PrivacyPolicy;