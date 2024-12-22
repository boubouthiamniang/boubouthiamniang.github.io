import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';

const Home = () => {
  console.log('Home component rendered'); // Debugging log

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="neon-title">Welcome to My Lab</h1>
          <p className="neon-text">
            🚀 Pushing the boundaries of AI and distributed systems. Let’s bridge the gap between research and real-world impact.
          </p>
          <Link to="/about" className="btn-primary glow">Dive In</Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <div className="highlight-card">
          <h2>👨‍🔬 About Me</h2>
          <p>Learn about my journey from academia to industry.</p>
          <Link to="/about" className="btn-secondary">Explore</Link>
        </div>
        <div className="highlight-card">
          <h2>📚 Research</h2>
          <p>Dive into my publications and research projects.</p>
          <Link to="/research" className="btn-secondary">Discover</Link>
        </div>
        <div className="highlight-card">
          <h2>🧑‍🏫 Teaching</h2>
          <p>Access curated educational resources and course materials.</p>
          <Link to="/teaching" className="btn-secondary">Learn</Link>
        </div>
        <div className="highlight-card">
          <h2>🎓 Education</h2>
          <p>Trace my academic roots and certifications.</p>
          <Link to="/education" className="btn-secondary">Check It Out</Link>
        </div>
        <div className="highlight-card">
          <h2>🔬 Projects</h2>
          <p>Explore cutting-edge projects I’ve contributed to.</p>
          <Link to="/projects" className="btn-secondary">See More</Link>
        </div>
        <div className="highlight-card">
          <h2>✍️ Blog</h2>
          <p>Geek out with my thoughts on tech, research, and trends.</p>
          <Link to="/blog" className="btn-secondary">Read</Link>
        </div>
      </section>

      {/* Extras Section */}
      <section className="extras">
        <h2 className="section-title">🔧 Tools I Love</h2>
        <div className="tools-grid">
          <div className="tool-item">🖥️ Python</div>
          <div className="tool-item">⚙️ TensorFlow</div>
          <div className="tool-item">🌐 React</div>
          <div className="tool-item">📊 Jupyter</div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2 className="neon-title">Let's be interoperable!</h2>
        <p>
          Got a challenging project or idea? I'm always ready to collaborate on innovative projects.
        </p>
        <Link to="/contact" className="btn-primary glow">Reach Out</Link>
      </section>
    </div>
  );
};

export default Home;
