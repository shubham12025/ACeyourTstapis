import React, { useState } from "react";
import ConsultationForm from "./ConsultationForm";

const FAQ = () => {
  const faqs = [
    {
      question: "When should I start prep?",
      answer: (
        <>
          <p>
            Ideally, start <b>3–6 months</b> before your target exam date. This gives
            enough time to build concepts, practice, and take mock tests.
          </p>
          <p>
            At AceYourTest, we create <b>personalized study plans</b> that match
            your schedule, goals, and deadlines.
          </p>
        </>
      ),
    },
    {
      question: "What is the exam pattern?",
      answer: (
        <>
          <p>
            <b>GMAT:</b> Quantitative Reasoning, Verbal Reasoning, Integrated
            Reasoning, Analytical Writing.
          </p>
          <p>
            <b>GRE:</b> Quantitative Reasoning, Verbal Reasoning, Analytical
            Writing.
          </p>
          <p>
            <b>SAT:</b> Reading, Writing & Language, and Math (with & without
            calculator).
          </p>
          <p>
            Our <b>5,000+ practice questions</b> and study material are aligned
            with official test patterns.
          </p>
        </>
      ),
    },
    {
      question: "Exam dates?",
      answer: (
        <>
          <p>
            <b>GMAT:</b> Available year-round, book your slot online.
          </p>
          <p>
            <b>GRE:</b> Conducted multiple times a year at test centers & online.
          </p>
          <p>
            <b>SAT:</b> Typically 7 times a year (Mar, May, Jun, Aug, Oct, Nov,
            Dec).
          </p>
          <p>
            We help students <b>plan backward from their target intake</b> with
            structured weekly study plans.
          </p>
        </>
      ),
    },
    {
      question: "What are good scores for top colleges?",
      answer: (
        <>
          <p>
            <b>GMAT:</b> 700+ is highly competitive (our students average 695+).
          </p>
          <p>
            <b>GRE:</b> 325+ is a strong score for top universities.
          </p>
          <p>
            <b>SAT:</b> 1450+ gives an edge for Ivy League and top global
            colleges.
          </p>
          <p>
            Our students have secured admits at <b>Stanford, Cornell, HEC Paris,
            London Business School, IESE</b> and many more.
          </p>
        </>
      ),
    },
    {
      question: "Recommended books?",
      answer: (
        <>
          <p>
            We provide <b>elaborated notes and curated material</b> covering
            every concept and question type—resources not available elsewhere.
          </p>
          <p>
            Our library includes <b>official GMAT/GRE/SAT-style practice</b>,
            topic-wise drills, and 5,000+ high-quality questions. No need to buy
            extra prep books.
          </p>
        </>
      ),
    },
    {
      question: "How will I know I’m ready?",
      answer: (
        <>
          <p>✅ You consistently score at/above your target in mock tests.</p>
          <p>✅ Your error log shows improvement in weak areas.</p>
          <p>
            ✅ You can manage <b>speed + accuracy</b> comfortably with time
            management techniques.
          </p>
          <p>
            With <b>weekly performance check-ins</b> and <b>progress tracking</b>, we
            ensure you’re exam-ready before test day.
          </p>
        </>
      ),
    },
    {
      question: "Study plans?",
      answer: (
        <>
          <p>
            We create <b>customized study plans</b> based on your timeline:
          </p>
          <ul className="list-disc ml-6">
            <li>
              <b>6-month plan:</b> Steady prep with concept building + mocks.
            </li>
            <li>
              <b>3-month plan:</b> Intensive practice with daily assignments and
              drills.
            </li>
            <li>
              <b>1-month crash plan:</b> Focus on mock tests, error analysis, and
              revisions.
            </li>
          </ul>
          <p>
            All plans include <b>live classes, study material, practice tests,
            WhatsApp doubt support</b>, and expert strategy sessions.
          </p>
        </>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-[#E2E2E2] flex items-center justify-center py-12 px-4">
        <div className="max-w-6xl w-full rounded-lg flex flex-col md:flex-row md:items-start gap-8">
          {/* Left Side: FAQ Section */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg overflow-hidden"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full flex justify-between items-center px-4 py-3 font-medium text-left transition ${
                      openIndex === index
                        ? "bg-blue-900 text-white"
                        : "bg-blue-900 text-white"
                    }`}
                  >
                    {faq.question}
                    <span className="ml-2">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {/* Answer */}
                  {openIndex === index && (
                    <div className="px-4 py-3 bg-gray-50 text-sm text-gray-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="/images/Group 3397.png"
              alt="FAQ illustration"
              className="w-64 md:w-80 object-contain"
            />
          </div>
        </div>
      </div>
      <ConsultationForm />
    </>
  );
};

export default FAQ;
