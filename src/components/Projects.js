import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section
      id="projects"
      className="p-8 bg-gray-50 dark:bg-gray-900 text-black dark:text-white"
    >
      <h3 className="text-2xl font-semibold mb-4">Projects</h3>
      <ul className="space-y-4">
        <li className="border p-4 rounded shadow dark:border-gray-600">
          <h4 className="font-bold">Portfolio website</h4>
          <p>
            Responsive design for all devices. Simple and modern user interface.
            About Me section with career details. Skills section with categorized
            tech stack. Contact form for communication. Fast loading and SEO
            friendly. Smooth animations for better experience. Hosted online with
            a custom domain.
          </p>
          <br />
          <div className="btn-group">
            <a
              href="https://github.com/Fireff5/port"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Code
            </a>
          </div>
        </li>

        <li className="border p-4 rounded shadow dark:border-gray-600">
          <h4 className="font-bold">
            Secure Client-Server Socket Communication
          </h4>
          <p>
            Secure Client–Server Socket Communication – A network application that
            allows safe data transfer between a client and server using TCP/IP
            sockets. The project uses SSL/TLS encryption to protect messages,
            supports multiple clients, and ensures reliable, real-time
            communication.
          </p>
          <br />
          <div className="btn-group">
            <a
              href="https://github.com/Fireff5/Secure-Communication"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Code
            </a>
          </div>
        </li>

        <li className="border p-4 rounded shadow dark:border-gray-600">
          <h4 className="font-bold">E-commerce Website</h4>
          <p>
            Developed a full-stack e-commerce website using React for the front-end
            and Node.js with Express for the back-end. Implemented user
            authentication, product listings, shopping cart functionality, and
            payment processing using Stripe API. Ensured responsive design and
            optimized performance for a seamless user experience across devices.
          </p>
          <br />
          <div className="btn-group">
             <a
              href="https://ecommerce-mobileshop.netlify.app/"
              target='_blank'
              rel="noopener noreferrer"
              className="view-btn"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Fireff5/MobileShop"
              target='_blank'
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Code
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
