"use client";

import React from "react";
import { contactInfoData } from "@/data/sliderData";

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
                  {phone.display}
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
              {contactInfoData.email.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
