import React from 'react';

const FAQ = () => {
  // Data matched exactly to your screenshot
  const faqs = [
    {
      question: "Can you handle both small and large-scale projects?",
      answer: "Absolutely! We cater to projects of all sizes. Our expertise ranges from startups to enterprise-level businesses, delivering scalable solutions tailored to specific project requirements."
    },
    {
      question: "How do you ensure the security of my project?",
      answer: "We follow strict security protocols including data encryption, secure coding practices, and regular vulnerability assessments to ensure your project's integrity and confidentiality."
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer: "Yes, we offer flexible support and maintenance packages to ensure your software remains updated, secure, and fully functional after launch."
    },
    {
      question: "Can you accommodate our specific time zone for meetings and project coordination?",
      answer: "We work with clients globally and adjust our schedules to ensure sufficient overlap for effective communication and project updates."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">
            FAQ
          </h2>
          {/* Blue Underline - Matched to image */}
          <div className="h-1 w-12 bg-primary mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Accordion Section */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              // Using DaisyUI's 'collapse' with 'collapse-plus' for the +/- icon
              // 'bg-slate-50' gives that very light grey/blue background seen in the image
              className="collapse collapse-plus bg-slate-50 rounded-sm"
            >
              {/* Radio input ensures only one stays open at a time (accordion behavior) */}
              <input type="radio" name="my-accordion-3" defaultChecked={index === 0} /> 
              
              <div className="collapse-title text-lg font-medium text-gray-900 py-4">
                {faq.question}
              </div>
              
              <div className="collapse-content text-gray-600 text-sm leading-relaxed">
                <p className="pb-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;