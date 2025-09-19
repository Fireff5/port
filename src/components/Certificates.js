import React from "react";
import fullstackCert from "../assets/fullstack-cert.jpg";
import cyberCert from "../assets/cybersecurity-cert.jpg";
import ethicalHackingCert from "../assets/ethical-hacking-cert.jpg";
import './Certificates.css';

const Certificates = () => {
  return (
    <section id="certificates" className="p-8 bg-white dark:bg-gray-800 text-black dark:text-white">
      <h3 className="text-2xl font-semibold mb-4">Certificates</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
            <p className="mt-2">FullStack - Digisailor</p>
            <img
            src={fullstackCert}
            alt="FullStack - Digisailor"
            className="w-64 h-auto rounded shadow"
          />
          <a className="view-btn" href={fullstackCert} target="_blank" rel="noopener noreferrer">
             View 
          </a>
        </li>
        <li>
            <p className="mt-2">
            Cyber Security - Postulate Infotech Pvt Ltd
            </p>
            <img
            src={cyberCert}
            alt="Cyber Security - Postulate Infotech Pvt Ltd"
            className="w-64 h-auto rounded shadow"
          />
          <a className="view-btn" href={cyberCert} target="_blank" rel="noopener noreferrer">
             View
          </a>
        </li>
        <li>
             <p className="mt-2">
            Cyber Security and Ethical Hacking Online Course - Udemy
             </p>
              <img
              src={ethicalHackingCert}
              alt="Cyber Security and Ethical Hacking - Udemy"
              className="w-64 h-auto rounded shadow"
          />
          <a className="view-btn" href={ethicalHackingCert} target="_blank" rel="noopener noreferrer">
             View
          </a>
        </li>
      </ul>
    </section>
  );
}
export default Certificates;