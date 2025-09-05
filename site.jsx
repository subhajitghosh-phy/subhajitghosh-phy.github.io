import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const tabs = ["About me", "Education", "Professional Experiences", "Publications", "CV", "Contact", "Miscellaneous"];

export default function PersonalWebsite() {
  const [activeTab, setActiveTab] = useState("About me");
  const coverHeight = "h-80"; // fixed larger height

  const renderContent = () => {
    switch (activeTab) {
      case "About me":
        return <p className="text-base"> I am a Postdoctoral Researcher at the Department of Physics at the
          University of Texas at Austin. My reseach is based on <strong>theoretical cosmology</strong> and <strong>particle physics</strong>.
          Outside my academic job I am a very boring guy. I will bore you with my hiking stories, my food tours, experiments with cooking, random knowledge 
        I aquired while watching youtube videos, blah blah blah. 
        </p>;
      case "Education":
        return (
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>Ph.D. – Tata Institute of Fundamental Research, Mumbai, India (2015–2020)</li>
            <li>M.Sc. – Indian Institute of Technology Kanpur, Kanpur, India (2013–2015)</li>
            <li>B.Sc. – Jadavpur University, Kolkata, India (2010–2013)</li>
          </ul>
        );
      case "Professional Experiences":
        return (
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>Postdoctoral Fellow – The University of Texas at Austin, Austin, USA (2023–Present)</li>
            <li>Postdoctoral Researcher – University of Notre Dame, Notre Dame, USA (2020–2023)</li>
          </ul>
        );
      case "CV":
  return (
    <div className="space-y-4 text-base">
      <p>Here is my CV (PDF embedded below):</p>
      <div className="w-full h-96">
        <iframe
          src="https://drive.google.com/file/d/15_HMcZ_pyKRZZGqvXZ4KD7fKD2YjrQxm/preview"
          className="w-full h-full border rounded-md"
          allow="autoplay"
        ></iframe>
      </div>
      <div>
        <p className="mb-2">LaTeX-rendered CV snippet:</p>
        <div id="cv-latex" className="prose max-w-none">
          {"$$ \\textbf{Curriculum Vitae} $$"}
          <br />
          {"$$ \\text{Professional Experiences, Education, Publications, etc.} $$"}
        </div>
      </div>
    </div>
  );
      case "Publications":
        return <p className="text-base">List of your publications here.</p>;
      case "Contact":
        return (
          <div className="space-y-4 text-base">
            <p>Get in touch with me:</p>

            {/* LinkedIn Box */}
            <a
              href="https://linkedin.com/in/subhajit-ghosh-2542b8249/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-4 border rounded-lg shadow-md hover:bg-gray-50"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
              <span className="font-medium text-blue-600">My LinkedIn Profile</span>
            </a>

            {/* Email Box */}
            <a
              href="mailto:sghosh@utexas.edu"
              className="flex items-center gap-2 p-4 border rounded-lg shadow-md hover:bg-gray-50"
            >
              <Mail className="w-6 h-6 text-red-600" />
              <span className="font-medium text-red-600">sghosh@utexas.edu</span>
            </a>
          </div>
        );
      case "Miscellaneous":
        return <p className="text-base">Ahh, I guess you are here for the boring stuff. You have to wait a bit dear!</p>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center font-[Cochin]">
      {/* Background cover */}
      <div
        className={`w-full ${coverHeight} bg-cover bg-center relative`}
        style={{ backgroundImage: "url('/cover.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Headshot and name */}
      <div className="flex flex-col items-center -mt-20 mb-6 relative z-10">
        <img
          src="/headshot.jpg"
          alt="Headshot"
          className="w-32 h-32 rounded-full shadow-lg mb-4 object-cover border-4 border-white"
        />
        <h1 className="text-3xl font-bold">Subhajit Ghosh</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 flex-wrap justify-center">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-2xl shadow-md transition-all ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-2xl"
      >
        {renderContent()}
      </motion.div>
    </div>
  );
}
