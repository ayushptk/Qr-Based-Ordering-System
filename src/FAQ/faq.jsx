import React, { useState } from 'react';
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const faqs = [
  {
    question: 'What is QR based Ordering System?',
    answer:
      'QR based Ordering System allows customers to scan a QR code to view the menu and place orders directly from their mobile devices.',
  },
  {
    question: 'Do you provide installation services?',
    answer:
      'Yes, we provide full installation services to help you set up the QR based Ordering System at your restaurant.',
  },
  {
    question: 'What kind of support do you offer after installation?',
    answer:
      'We offer 24/7 customer support and maintenance services to ensure your system runs smoothly.',
  },
  {
    question: 'What are the features of QR based Ordering System?',
    answer:
      'Features include contactless ordering, real-time menu updates, order tracking, and secure payment options.',
  },
  {
    question: 'How secure is my restaurant data in QR based Ordering System?',
    answer:
      'We use industry-standard encryption and security protocols to protect your restaurant data.',
  },
];

const FAQsection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col">
        <button className="border border-[#F15A29] text-[#F15A29] rounded-full px-6 py-2 text-sm font-semibold mb-10 mx-auto item-center flex justify-center ">
          FAQ
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2  mx">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-8 text-center sm:text-left">
          Take a quick look through the questions our users commonly ask!
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#F15A29] rounded-lg p-4 cursor-pointer w-[800px] mx-auto"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-gray-700 font-medium">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-gray-700 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-[#F15A29] rounded-3xl py-10 px-8 max-w-6xl mx-auto text-center text-white">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          Still Have Questions?
        </h3>
        <p className="text-sm sm:text-[14px] mb-6 max-w-lg mx-auto">
          Our team is ready to help you find the perfect resturatant managemenet for your business.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-[#F15A29] rounded-md px-5 py-2 flex items-center gap-2 font-md hover:bg-gray-100 transition">
            <IoIosCall  fontSize={20}/>
            Call Us
          </button>
          <button className="border border-white rounded-md px-5 py-2 flex items-center gap-2 font-md hover:bg-white hover:text-[#F15A29] transition">
           <MdOutlineEmail  fontSize={20}/>
            Email Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQsection;
