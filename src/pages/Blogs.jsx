import { PageLayout } from '../components/PageLayout';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in Education",
      author: "Dr. Sarah Johnson",
      date: "March 10, 2024",
      excerpt: "Exploring how AI is revolutionizing the way we learn and teach in modern educational institutions.",
      category: "AI & Education",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with React",
      author: "Mike Chen",
      date: "March 8, 2024",
      excerpt: "A comprehensive guide to creating maintainable and scalable React applications for modern web development.",
      category: "Web Development",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Students",
      author: "Alex Rodriguez",
      date: "March 5, 2024",
      excerpt: "Essential cybersecurity tips and practices every computer science student should know.",
      category: "Cybersecurity",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Introduction to Quantum Computing",
      author: "Prof. Emily Watson",
      date: "March 3, 2024",
      excerpt: "Understanding the basics of quantum computing and its potential impact on technology.",
      category: "Quantum Computing",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Data Science Career Path Guide",
      author: "David Kumar",
      date: "March 1, 2024",
      excerpt: "A roadmap for students looking to build a successful career in data science and analytics.",
      category: "Career",
      readTime: "7 min read"
    }
  ];

  return (
    <PageLayout 
      title="Blogs" 
      subtitle="Insights and knowledge sharing from our tech community"
    >
      <div className="grid gap-6 md:gap-8">
        {blogs.map((blog) => (
          <article key={blog.id} className="tech-glass rounded-xl p-6 scan-effect hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="px-3 py-1 bg-tech-cyan/20 text-tech-cyan rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-muted-foreground">
                    {blog.readTime}
                  </span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-3 hover:text-tech-blue transition-colors cursor-pointer">
                  {blog.title}
                </h2>
                
                <p className="text-slate-600 dark:text-muted-foreground mb-4 leading-relaxed">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-muted-foreground">
                    <span className="flex items-center space-x-2">
                      <span className="text-tech-blue">👤</span>
                      <span>{blog.author}</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <span className="text-tech-blue">📅</span>
                      <span>{blog.date}</span>
                    </span>
                  </div>
                  
                  <button className="holo-button px-4 py-2 text-sm">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
};

export default Blogs;
