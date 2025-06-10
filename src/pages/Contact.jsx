import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      title: "Email",
      value: "acm@bvdudet.edu.in",
      icon: "📧"
    },
    {
      title: "Phone",
      value: "+91 98765 43210",
      icon: "📞"
    },
    {
      title: "Location",
      value: "BVDU DET, Navi Mumbai",
      icon: "📍"
    },
    {
      title: "Office Hours",
      value: "Mon-Fri, 9:00 AM - 5:00 PM",
      icon: "🕒"
    }
  ];

  const executives = [
    {
      name: "Arjun Sharma",
      position: "Chapter President",
      email: "president@acm-bvdu.org"
    },
    {
      name: "Sneha Patel",
      position: "Vice President",
      email: "vicepresident@acm-bvdu.org"
    },
    {
      name: "Rahul Kumar",
      position: "Technical Lead",
      email: "technical@acm-bvdu.org"
    },
    {
      name: "Priya Singh",
      position: "Events Coordinator",
      email: "events@acm-bvdu.org"
    }
  ];

  return (
    <PageLayout 
      title="Contact Us" 
      subtitle="Get in touch with our ACM Student Chapter team"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="tech-glass rounded-xl p-8 scan-effect">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
            Send us a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-muted-foreground mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-tech-glass/50 border border-tech-blue/30 text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:border-tech-cyan transition-colors"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-muted-foreground mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-tech-glass/50 border border-tech-blue/30 text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:border-tech-cyan transition-colors"
                placeholder="Enter your email address"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-muted-foreground mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-tech-glass/50 border border-tech-blue/30 text-slate-800 dark:text-white focus:outline-none focus:border-tech-cyan transition-colors"
              >
                <option value="">Select a subject</option>
                <option value="membership">Membership Inquiry</option>
                <option value="events">Event Information</option>
                <option value="collaboration">Partnership/Collaboration</option>
                <option value="technical">Technical Support</option>
                <option value="general">General Question</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-muted-foreground mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-tech-glass/50 border border-tech-blue/30 text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:border-tech-cyan transition-colors resize-vertical"
                placeholder="Enter your message here..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full holo-button py-3 text-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="space-y-8">
          {/* Contact Details */}
          <div className="tech-glass rounded-xl p-8 scan-effect">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              Contact Information
            </h2>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-white">{info.title}</h3>
                    <p className="text-slate-600 dark:text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Executive Team */}
          <div className="tech-glass rounded-xl p-8 scan-effect">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              Executive Team
            </h2>
            
            <div className="space-y-4">
              {executives.map((exec, index) => (
                <div key={index} className="bg-tech-glass/50 rounded-lg p-4 border border-tech-blue/20">
                  <h3 className="font-semibold text-slate-800 dark:text-white">{exec.name}</h3>
                  <p className="text-tech-blue text-sm">{exec.position}</p>
                  <p className="text-slate-600 dark:text-muted-foreground text-sm">{exec.email}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Social Media */}
          <div className="tech-glass rounded-xl p-8 scan-effect">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              Follow Us
            </h2>
            
            <div className="flex space-x-4">
              <button className="holo-button p-3 text-2xl">📘</button>
              <button className="holo-button p-3 text-2xl">🐦</button>
              <button className="holo-button p-3 text-2xl">📷</button>
              <button className="holo-button p-3 text-2xl">💼</button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
