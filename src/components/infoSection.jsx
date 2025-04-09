"use client";

import React from "react";
import { contactInfoData } from "@/data/sliderData";
const branches = [
  {
    name: "Villa Madero",
    address: "Av. Crovara 154, B1751 Villa Madero, Buenos Aires",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26247.780419331804!2d-58.53395622568359!3d-34.680642199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9d9ca706bb1%3A0x8bae7bc5da9475c0!2sPescader%C3%ADa%20Mellino!5e0!3m2!1ses-419!2sar!4v1741822922720!5m2!1ses-419!2sar",
  },
  {
    name: "Bustamante",
    address: "Dirección 2, Buenos Aires",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26247.780419331804!2d-58.53395622568359!3d-34.680642199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc92170503825%3A0x638a133465bcdf9c!2sPescader%C3%ADa%20Mellino!5e0!3m2!1ses-419!2sar!4v1741821905867!5m2!1ses-419!2sar",
  },
];
export default function InfoSection() {
  return (
    <section className="flex justify-center items-center py-8">
      <div className="max-w-7xl w-full mx-auto bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] rounded-lg p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 uppercase tracking-wider">
            {contactInfoData.openDaysTitle}
          </h2>
          <p className="mt-2 text-gray-600">
            {contactInfoData.openDaysSchedule}
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg shadow-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                Dirección Principal
              </h3>
              <p className="text-gray-600">
                {contactInfoData.address.line1}, {contactInfoData.address.line2}
                , {contactInfoData.address.line3}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                Teléfono Principal
              </h3>
              <p className="text-gray-600">
                {contactInfoData.phones[0]?.display}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                Email Principal
              </h3>
              <p className="text-gray-600">{contactInfoData.email.display}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow text-center md:text-left">
            <h3 className="font-semibold text-gray-800 mb-2">
              Dirección (Alternativa)
            </h3>
            <a
              href={contactInfoData.address.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 hover:underline"
            >
              {contactInfoData.address.line1}
              <br />
              {contactInfoData.address.line2}
              <br />
              {contactInfoData.address.line3}
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow text-center md:text-left">
            <h3 className="font-semibold text-gray-800 mb-2">
              Teléfonos (Alternativos)
            </h3>
            <div className="text-gray-600">
              {contactInfoData.phones.map((phone, index) => (
                <a
                  key={index}
                  href={phone.link}
                  className="block hover:text-gray-800 hover:underline"
                >
                  {phone.link}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-2xl text-center md:text-left">
            <h3 className="font-semibold text-gray-800 mb-2">
              Email (Alternativo)
            </h3>
            <a
              href={contactInfoData.email.link}
              className="text-gray-600 hover:text-gray-800 hover:underline"
            >
              {/* {contactInfoData.email.display} */} "-"
            </a>
          </div>
        </div>

        <iframe
          src={branches[0].mapUrl}
          width="100%"
          height="450"
          style={{ border: 0, marginTop: "40px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow"
        ></iframe>
      </div>
    </section>
  );
}
