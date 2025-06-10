import { PageLayout } from '../components/PageLayout';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      date: "March 15, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "BVDU Auditorium",
      description: "Join us for a day of cutting-edge technology discussions and innovation showcase.",
      type: "Conference"
    },
    {
      id: 2,
      title: "ACM-W Women in Tech Workshop",
      date: "March 22, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab A",
      description: "Empowering women in technology through hands-on workshops and networking.",
      type: "Workshop"
    },
    {
      id: 3,
      title: "Coding Competition 2024",
      date: "April 5, 2024",
      time: "9:00 AM - 1:00 PM",
      location: "Main Computer Center",
      description: "Test your programming skills in this exciting coding challenge.",
      type: "Competition"
    },
    {
      id: 4,
      title: "AI & Machine Learning Seminar",
      date: "April 12, 2024",
      time: "11:00 AM - 4:00 PM",
      location: "Seminar Hall",
      description: "Explore the latest trends in artificial intelligence and machine learning.",
      type: "Seminar"
    }
  ];

  return (
    <PageLayout 
      title="Events" 
      subtitle="Stay updated with our latest tech events and workshops"
    >
      <div className="grid gap-6 md:gap-8">
        {events.map((event) => (
          <div key={event.id} className="tech-glass rounded-xl p-6 scan-effect hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="px-3 py-1 bg-tech-blue/20 text-tech-blue rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                    {event.title}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-muted-foreground mb-2">
                  {event.description}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-tech-blue">📅</span>
                <span className="text-slate-700 dark:text-muted-foreground">{event.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-tech-blue">🕒</span>
                <span className="text-slate-700 dark:text-muted-foreground">{event.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-tech-blue">📍</span>
                <span className="text-slate-700 dark:text-muted-foreground">{event.location}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-tech-blue/20">
              <button className="holo-button px-4 py-2 text-sm">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Events;
