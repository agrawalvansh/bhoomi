import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiHelpCircle } from 'react-icons/fi';

const FAQPage = () => {
  const colors = {
    primary: '#2d5a27',
    secondary: '#D4B982', 
    tertiary: '#2d5a27',
    background: '#f5f5f0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB',
    warm: '#E6BAA3'
  };

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Garden Design & Planning",
      questions: [
        {
          q: "How does your 3D garden design service work?",
          a: "Our expert visits your space, scans it with our app to create a 3D model, and helps you visualize your dream garden. You can customize plants, layouts, and decorative elements in real-time. After the visit, you can continue tweaking the design through our app until you're ready to order."
        },
        {
          q: "How do you ensure plants will suit my space?",
          a: "We analyze multiple factors including available sunlight, space dimensions, and local climate. Our app filters plant options based on these parameters, ensuring you only see plants that will thrive in your specific conditions."
        },
        {
          q: "Can I modify my garden design after the consultation?",
          a: "Yes! You have access to your 3D design through our app and can make adjustments until you confirm your order."
        }
      ]
    },
    {
      category: "Plant Quality & Guarantees",
      questions: [
        {
          q: "What sets your plants apart from local nurseries?",
          a: "We source exclusively from certified greenhouses that follow chemical-free cultivation practices. Each plant comes with a 30-day survival guarantee - if it dies within a month, we'll replace it free of charge."
        },
        {
          q: "How do you ensure plant health during delivery?",
          a: "Plants are stored in urban 'dark stores' and transported in climate-controlled containers to maintain optimal conditions. Our dedicated setup team handles installation within 1-2 days of order confirmation."
        },
        {
          q: "Do you use growth stimulants or artificial chemicals?",
          a: "No. We maintain strict partnerships with greenhouses that practice chemical-free cultivation. Our focus is on long-term plant health rather than temporary aesthetic appeal."
        }
      ]
    },
    {
      category: "Maintenance & Services",
      questions: [
        {
          q: "What maintenance services do you offer?",
          a: "We provide flexible gardener bookings for both residential and commercial spaces. Services include regular maintenance, fertilization, pest control, and plant health monitoring. All tools and supplies are provided by our team."
        },
        {
          q: "How often should I schedule maintenance visits?",
          a: "For residential spaces, we recommend weekly or bi-weekly visits. Commercial spaces may require custom schedules. Our app helps track maintenance logs and plant health reports."
        },
        {
          q: "What if I need emergency plant care?",
          a: "Our app provides instant access to pest and disease management support. You can request emergency visits through our customer service team."
        }
      ]
    },
    {
      category: "Commercial Solutions",
      questions: [
        {
          q: "Do you handle large commercial spaces?",
          a: "Yes! We offer tailored solutions for offices, hotels, and other commercial spaces. This includes scaled teams, bulk subscriptions, and designs that align with your brand aesthetics."
        },
        {
          q: "Can maintenance be scheduled outside business hours?",
          a: "Absolutely. We can arrange maintenance visits during off-hours to minimize disruption to your business operations."
        }
      ]
    },
    {
      category: "Products & DIY Options",
      questions: [
        {
          q: "Do you sell individual plants and supplies?",
          a: "Yes! You can purchase individual plants, pots, and gardening tools through our app. We also offer monthly DIY kits with seasonal seeds, organic fertilizers, and care guides."
        },
        {
          q: "What's included in your monthly DIY kits?",
          a: "Each kit contains seasonal seeds, organic fertilizers, and detailed care guides. You can add optional items like premium pots or decorative stones."
        }
      ]
    }
  ];

  const FAQ = ({ category, questions, categoryIndex }) => {
    return (
      <motion.div 
        className="mb-6 md:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: categoryIndex * 0.1 }}
      >
        <h2 className="text-lg sm:text-xl font-bold mb-3 md:mb-4" style={{ color: colors.deep }}>
          {category}
        </h2>
        <div className="space-y-3 md:space-y-4">
          {questions.map((faq, index) => {
            const isOpen = openIndex === `${categoryIndex}-${index}`;
            return (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden shadow-sm"
                style={{ backgroundColor: colors.background, border: `1px solid ${colors.accent}` }}
                initial={false}
              >
                <button
                  className="w-full p-3 sm:p-4 text-left flex items-center justify-between text-sm sm:text-base"
                  onClick={() => setOpenIndex(isOpen ? null : `${categoryIndex}-${index}`)}
                  style={{ color: colors.deep }}
                >
                  <span className="font-medium pr-2">{faq.q}</span>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <FiMinus className="text-sm sm:text-base" />
                    ) : (
                      <FiPlus className="text-sm sm:text-base" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div 
                        className="p-3 sm:p-4 border-t text-sm sm:text-base"
                        style={{ 
                          borderColor: colors.accent,
                          backgroundColor: colors.highlight,
                          color: colors.primary
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen px-3 py-6 sm:p-4 md:p-6 lg:p-8" style={{ backgroundColor: colors.background }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4" style={{ color: colors.deep }}>
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg" style={{ color: colors.tertiary }}>
            Find answers to common questions about our services and solutions
          </p>
        </div>
        
        <div className="max-w-full overflow-hidden">
          {faqs.map((section, index) => (
            <FAQ 
              key={index} 
              category={section.category} 
              questions={section.questions} 
              categoryIndex={index}
            />
          ))}
        </div>
        
        {/* Additional Help Section - Responsive */}
        <div className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-6 rounded-lg text-center" style={{ backgroundColor: colors.accent + '30' }}>
          <div className="flex flex-col items-center">
            <FiHelpCircle className="text-2xl sm:text-3xl mb-2 sm:mb-3" style={{ color: colors.deep }} />
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2" style={{ color: colors.deep }}>
              Need more help?
            </h3>
            <p className="text-sm sm:text-base mb-3 sm:mb-4" style={{ color: colors.tertiary }}>
              Our customer support team is available 7 days a week
            </p>
            <button 
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors"
              style={{ 
                backgroundColor: colors.deep,
                color: 'white'
              }}
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;