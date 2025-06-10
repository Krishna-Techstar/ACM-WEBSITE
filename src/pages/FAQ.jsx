import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is ACM Student Chapter?",
      answer: "ACM Student Chapter is a local student organization affiliated with the Association for Computing Machinery (ACM), the world's largest educational and scientific computing society. We provide opportunities for students to enhance their knowledge, skills, and careers in computing and information technology."
    },
    {
      question: "Who can join the ACM Student Chapter?",
      answer: "Any student enrolled at BVDU with an interest in computing, technology, or related fields can join our chapter. We welcome students from all academic levels and backgrounds, regardless of their current skill level or experience."
    },
    {
      question: "What are the benefits of joining ACM?",
      answer: "Members enjoy access to ACM Digital Library, networking opportunities, career development resources, technical workshops, coding competitions, research opportunities, and connections with industry professionals and alumni."
    },
    {
      question: "Are there any membership fees?",
      answer: "Yes, there is a nominal annual membership fee that covers local chapter activities and events. ACM also offers student membership rates that provide access to additional resources and benefits."
    },
    {
      question: "What types of events do you organize?",
      answer: "We organize technical workshops, coding competitions, guest lectures by industry experts, hackathons, career fairs, networking events, study groups, and social activities to build community among members."
    },
    {
      question: "How can I get involved in organizing events?",
      answer: "We encourage active participation from all members. You can join our organizing committees, volunteer for events, propose new event ideas, or take leadership roles in different initiatives. Contact our executive team to learn about current opportunities."
    },
    {
      question: "Do you offer mentorship programs?",
      answer: "Yes, we have mentorship programs that connect students with senior students, alumni, and industry professionals. These programs provide guidance on academic choices, career planning, and professional development."
    },
    {
      question: "How can I stay updated with chapter activities?",
      answer: "Follow our official social media channels, join our WhatsApp/Discord groups, subscribe to our newsletter, and regularly check our website for the latest updates on events and opportunities."
    },
    {
      question: "Can I propose a new project or initiative?",
      answer: "Absolutely! We welcome innovative ideas from our members. You can present your proposal to the executive committee, and if approved, we'll provide support and resources to help you implement your project."
    },
    {
      question: "How do I contact the chapter leadership?",
      answer: "You can reach out to us through our contact page, email us directly, or approach any of our executive committee members during events. We also hold regular office hours for student consultations."
    }
  ];

  return (
    <PageLayout 
      title="Frequently Asked Questions" 
      subtitle="Get answers to common questions about our ACM Student Chapter"
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="tech-glass rounded-xl overflow-hidden scan-effect">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-tech-blue/10 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <div className={`text-tech-blue text-2xl transition-transform duration-300 ${
                  openItems.includes(index) ? 'rotate-45' : ''
                }`}>
                  +
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4 border-t border-tech-blue/20">
                  <p className="text-slate-600 dark:text-muted-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 tech-glass rounded-xl p-8 text-center scan-effect">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-slate-600 dark:text-muted-foreground mb-6">
            Don't hesitate to reach out to us. We're here to help!
          </p>
          <button className="holo-button px-6 py-3">
            Contact Us
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQ;
