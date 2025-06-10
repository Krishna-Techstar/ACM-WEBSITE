import { PageLayout } from '../components/PageLayout';

const AcmW = () => {
  const initiatives = [
    {
      title: "Mentorship Program",
      description: "Connect with industry professionals and senior students for career guidance.",
      icon: "🤝"
    },
    {
      title: "Technical Workshops",
      description: "Hands-on workshops covering various programming languages and technologies.",
      icon: "💻"
    },
    {
      title: "Leadership Development",
      description: "Build leadership skills through organizing events and leading projects.",
      icon: "👑"
    },
    {
      title: "Networking Events",
      description: "Connect with women in tech from academia and industry.",
      icon: "🌐"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      quote: "ACM-W helped me build confidence and connect with amazing women in tech."
    },
    {
      name: "Ananya Patel",
      role: "Data Scientist at Microsoft",
      quote: "The mentorship program was instrumental in shaping my career path."
    }
  ];

  return (
    <PageLayout 
      title="ACM-W" 
      subtitle="Empowering women in computing and technology"
    >
      <div className="space-y-12">
        {/* About Section */}
        <div className="tech-glass rounded-xl p-8 scan-effect">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6">
            About ACM-W
          </h2>
          <p className="text-slate-600 dark:text-muted-foreground text-lg leading-relaxed mb-6">
            ACM-W (Association for Computing Machinery - Women) is a global organization that supports, 
            celebrates, and advocates for the full engagement of women in all aspects of the computing field. 
            Our local chapter at BVDU aims to create an inclusive environment where women can thrive in technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-tech-glass/50 rounded-lg p-4 border border-tech-blue/20">
                <div className="text-3xl mb-3">{initiative.icon}</div>
                <h3 className="font-bold text-slate-800 dark:text-white mb-2">{initiative.title}</h3>
                <p className="text-sm text-slate-600 dark:text-muted-foreground">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="tech-glass rounded-xl p-8 scan-effect">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6">
            Upcoming ACM-W Events
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-tech-cyan pl-4">
              <h3 className="font-bold text-slate-800 dark:text-white">Women in AI Workshop</h3>
              <p className="text-slate-600 dark:text-muted-foreground">March 25, 2024 | 2:00 PM - 5:00 PM</p>
            </div>
            <div className="border-l-4 border-tech-cyan pl-4">
              <h3 className="font-bold text-slate-800 dark:text-white">Career Panel Discussion</h3>
              <p className="text-slate-600 dark:text-muted-foreground">April 8, 2024 | 11:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="tech-glass rounded-xl p-8 scan-effect">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-tech-glass/50 rounded-lg p-6 border border-tech-blue/20">
                <p className="text-slate-600 dark:text-muted-foreground italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-tech-blue">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Section */}
        <div className="tech-glass rounded-xl p-8 scan-effect text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">
            Join ACM-W Today
          </h2>
          <p className="text-slate-600 dark:text-muted-foreground mb-6">
            Be part of a supportive community that empowers women in technology.
          </p>
          <button className="holo-button px-8 py-3 text-lg">
            Become a Member
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default AcmW;
