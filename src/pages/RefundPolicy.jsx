

const RefundPolicy = () => {
  return (
    <main className="w-full font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-navy-dark text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Refund Policy
          </h1>
          <p className="text-white/80 text-lg">
            Clear, transparent, and fair refund guidelines for Data IT services.
          </p>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto space-y-12 text-gray-dark text-lg leading-relaxed">

          {/* Intro */}
          <div>
            <p>
              At <span className="font-semibold text-navy">Data IT</span>, we value
              transparency and customer satisfaction. This Refund Policy explains
              the conditions under which refunds may be issued for our services.
              By engaging with our services, you agree to the terms outlined below.
            </p>
          </div>

          {/* General Policy */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              1. General Refund Policy
            </h2>
            <p>
              Data IT primarily provides customized digital services, including
              software development, web applications, and automation solutions.
              Due to the customized nature of our services, refunds are generally
              limited and subject to the conditions described in this policy.
            </p>
          </div>

          {/* Eligibility */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              2. Eligibility for Refunds
            </h2>
            <p>
              Refunds may be considered only under the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Failure to initiate the project after payment due to Data IT’s fault</li>
              <li>Duplicate or incorrect payment made by the client</li>
              <li>Service cancellation before any development or work has started</li>
            </ul>
          </div>

          {/* Non-Refundable */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              3. Non-Refundable Services
            </h2>
            <p>
              The following services and situations are non-refundable:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Completed or partially completed custom development work</li>
              <li>Delays caused by client-side changes or lack of communication</li>
              <li>Third-party services, licenses, hosting, or tools purchased on behalf of the client</li>
              <li>Change of mind after project approval or milestone completion</li>
            </ul>
          </div>

          {/* Milestone Payments */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              4. Milestone-Based Projects
            </h2>
            <p>
              For projects divided into milestones, payments made for completed
              milestones are non-refundable. Any remaining unpaid milestones may
              be canceled if the project is discontinued.
            </p>
          </div>

          {/* Subscription */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              5. Subscription & Maintenance Services
            </h2>
            <p>
              Fees for subscription-based services, support, maintenance, or
              recurring plans are non-refundable once the billing cycle has
              started, unless explicitly stated in a separate agreement.
            </p>
          </div>

          {/* Request Process */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              6. Refund Request Process
            </h2>
            <p>
              To request a refund, clients must submit a written request via email
              to <span className="font-semibold">info@datait.com.bd</span> within
              7 days of payment. Requests must include payment details and the
              reason for the refund request.
            </p>
          </div>

          {/* Review */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              7. Review & Processing
            </h2>
            <p>
              All refund requests are reviewed on a case-by-case basis. If approved,
              refunds will be processed within 7–14 business days using the
              original payment method where possible.
            </p>
          </div>

          {/* Policy Updates */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              8. Changes to This Refund Policy
            </h2>
            <p>
              Data IT reserves the right to update or modify this Refund Policy at
              any time. Any changes will be posted on this page and will take
              effect immediately.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              9. Contact Us
            </h2>
            <p>
              If you have any questions regarding this Refund Policy, please
              contact us at{" "}
              <span className="font-semibold">info@datait.com.bd</span>.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default RefundPolicy;
