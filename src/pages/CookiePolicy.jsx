

const CookiePolicy = () => {
  return (
    <main className="w-full font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-navy-dark text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cookie Policy
          </h1>
          <p className="text-white/80 text-lg">
            Learn how Data IT uses cookies to improve your experience.
          </p>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto space-y-12 text-gray-dark text-lg leading-relaxed">

          {/* Intro */}
          <div>
            <p>
              This Cookie Policy explains how{" "}
              <span className="font-semibold text-navy">Data IT</span> uses cookies and
              similar technologies when you visit our website or use our digital
              services. By continuing to use our website, you agree to the use of
              cookies as described in this policy.
            </p>
          </div>

          {/* What Are Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files that are stored on your device
              (computer, tablet, or mobile phone) when you visit a website.
              They help websites function efficiently and provide information
              to improve user experience.
            </p>
          </div>

          {/* Types of Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              2. Types of Cookies We Use
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for basic website
                functionality, security, and navigation.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us understand how
                visitors interact with our website so we can improve performance.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember user preferences
                to enhance usability and personalization.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Collect anonymous data to
                analyze traffic and usage patterns.
              </li>
            </ul>
          </div>

          {/* How We Use Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              3. How We Use Cookies
            </h2>
            <p>
              Data IT uses cookies to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ensure website security and functionality</li>
              <li>Improve website performance and speed</li>
              <li>Analyze user behavior and traffic trends</li>
              <li>Enhance user experience and usability</li>
            </ul>
          </div>

          {/* Third-Party Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              4. Third-Party Cookies
            </h2>
            <p>
              We may use trusted third-party services (such as analytics tools)
              that place cookies on your device to help us understand how our
              website is used. These third parties have their own privacy and
              cookie policies.
            </p>
          </div>

          {/* Managing Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              5. Managing & Disabling Cookies
            </h2>
            <p>
              You can control or disable cookies through your browser settings
              at any time. Please note that disabling certain cookies may affect
              the functionality and performance of our website.
            </p>
          </div>

          {/* Data Protection */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              6. Data Protection & Privacy
            </h2>
            <p>
              Any data collected through cookies is handled in accordance with
              our Privacy Policy. We do not use cookies to collect sensitive
              personal information without your consent.
            </p>
          </div>

          {/* Policy Updates */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              7. Updates to This Cookie Policy
            </h2>
            <p>
              Data IT may update this Cookie Policy from time to time to reflect
              changes in legal requirements or our practices. Updates will be
              posted on this page.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about this Cookie Policy or how cookies
              are used, please contact us at{" "}
              <span className="font-semibold">info@datait.com.bd</span>.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default CookiePolicy;
