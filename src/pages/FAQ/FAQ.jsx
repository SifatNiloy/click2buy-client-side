import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: 'What payment methods do you accept?',
      answer: 'We accept Visa, MasterCard, American Express, and PayPal.',
    },
    {
      id: 2,
      question: 'Can I return a product if I am not satisfied?',
      answer: 'Yes, you can return any product within 30 days for a full refund.',
    },
    {
      id: 3,
      question: 'How do I track my order?',
      answer: 'You can track your order through our website or contact our customer support.',
    },
    {
      id: 4,
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to most countries.',
    },
    {
      id: 5,
      question: 'What if my package is lost during transit?',
      answer: 'We will issue a refund or resend the package, depending on the situation.',
    },
    {
      id: 6,
      question: 'How can I contact customer support?',
      answer: 'You can contact our customer support team via email or phone. Visit our Contact Us page for more details.',
    },
    {
      id: 7,
      question: 'Can I change or cancel my order?',
      answer: 'You can change or cancel your order within 24 hours of placing it. Contact us for assistance.',
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none transition duration-300 ease-in-out transform hover:bg-gray-100"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-medium">{item.question}</span>
              {activeIndex === index ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
            </button>
            <div
              className={`px-6 py-4 ${activeIndex === index ? 'block' : 'hidden'}`}
              style={{ transition: 'max-height 0.5s ease-in-out', maxHeight: activeIndex === index ? '1000px' : '0px' }}
            >
              <p className="text-gray-700">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
