// src/components/Footer.jsx
"use client";

import {branchAddresses, contactInfoData} from "../data/sliderData";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-1">
            {contactInfoData.openDaysTitle}
          </h3>
          <p className="text-sm mb-4">{contactInfoData.openDaysSchedule}</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Teléfonos</h3>
          {contactInfoData.phones.map((phone, index) => (
            <a
              key={index}
              href={phone.link}
              className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-200 hover:text-white mb-1"
            >
              <FaPhone />
              {phone.display}
            </a>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Síguenos</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a
                href={contactInfoData.socialMedia.instagram}
              className="text-gray-200 hover:text-white text-2xl transition duration-200"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Mellino Pescadería - Todos los
        derechos reservados.
      </div>
    </footer>
  );
}
