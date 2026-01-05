import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

/* ---------- Contact Info Card ---------- */
const InfoCard = ({ icon, title, text, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-5 bg-[#0f172a] rounded-2xl border border-white/10 hover:border-[#38BDF8]/50 transition-all duration-300 group"
  >
    <div className="w-12 h-12 flex items-center justify-center bg-[#38BDF8]/10 rounded-xl text-[#38BDF8] group-hover:bg-[#38BDF8] group-hover:text-white transition-all duration-300 text-xl">
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-400 uppercase tracking-wider">{title}</p>
      <p className="text-white font-medium">{text}</p>
    </div>
  </a>
);

/* ---------- Social Icon Component ---------- */
const SocialIcon = ({ icon, link, color }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-12 h-12 flex items-center justify-center rounded-full bg-[#0f172a] border border-white/10 ${color} hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300`}
  >
    <span className="text-xl">{icon}</span>
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <div className="w-24 h-1.5 bg-[#38BDF8] mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">
        {/* Left Side: Contact Info & Socials */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-4">Let's Talk!</h3>
          <p className="text-gray-400 mb-8">
            Have a project in mind or just want to say hi? Feel free to reach
            out. I am always open to discussing new projects and creative ideas.
          </p>

          <div className="space-y-4">
            <InfoCard
              icon={<FaEnvelope />}
              title="Email"
              text="imranparvez964@gmail.com"
              link="mailto:imranparvez964@gmail.com"
            />
            <InfoCard
              icon={<FaPhoneAlt />}
              title="Phone"
              text="+880 1912 300 964"
              link="tel:+8801912300964"
            />
            <InfoCard
              icon={<FaMapMarkerAlt />}
              title="Location"
              text="Dhaka, Bangladesh"
              link="#"
            />
          </div>

          {/* Social Media Links */}
          <div className="pt-8">
            <p className="text-white font-semibold mb-4">Follow Me</p>
            <div className="flex gap-4">
              <SocialIcon
                icon={<FaGithub />}
                link="#"
                color="hover:text-white"
              />
              <SocialIcon
                icon={<FaLinkedin />}
                link="#"
                color="hover:text-blue-400"
              />
              <SocialIcon
                icon={<FaFacebook />}
                link="#"
                color="hover:text-blue-600"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-[#10192f] p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
          {/* Background Glow Effect */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full"></div>

          <form className="space-y-5 relative z-10">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#38BDF8]/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#38BDF8]/50 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#38BDF8]/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your message here..."
                className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#38BDF8]/50 transition-all resize-none"
              ></textarea>
            </div>

            <button className="w-full py-4 bg-[#38BDF8] hover:opacity-90  text-[#020617] cursor-pointer  font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-1">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
