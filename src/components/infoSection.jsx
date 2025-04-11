"use client";
import React, { useState } from "react";
import { contactInfoData, branchAddresses } from "@/data/sliderData";

export default function InfoSection() {
  const [selectedBranch, setSelectedBranch] = useState(branchAddresses[0]);

  return (
      <section className="flex justify-center items-center py-8">
        <div className="max-w-7xl w-full mx-auto bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] rounded-lg p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 uppercase tracking-wider">
              {contactInfoData.openDaysTitle}
            </h2>
            <p className="mt-2 text-gray-600">{contactInfoData.openDaysSchedule}</p>
          </div>

          <div
              onClick={() => setSelectedBranch(branchAddresses[0])}
              className={`cursor-pointer bg-gray-50 rounded-lg shadow-2xl p-6 mb-8 ${
                  selectedBranch.mapLink === branchAddresses[0].mapLink ? "border-4 border-blue-800" : ""
              }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Dirección Principal</h3>
                <p className="text-gray-600">
                  {branchAddresses[0].line1} {branchAddresses[0].line2} {branchAddresses[0].line3}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Teléfono Principal</h3>
                <p className="text-gray-600">{contactInfoData.phones[0]?.display}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Email Principal</h3>
                <p className="text-gray-600">{contactInfoData.email.display}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {branchAddresses
                .slice(1)
                .map((branchAddresses, index) => (
                <div
                    key={index}
                    onClick={() => setSelectedBranch(branchAddresses)}
                    className={`cursor-pointer bg-gray-50 p-6 rounded-lg shadow text-center md:text-left ${
                        selectedBranch.mapLink === branchAddresses.mapLink ? "border-4 border-blue-800" : ""
                    }`}
                >
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Mas Sucursales
                  </h3>
                  <a
                      href={branchAddresses.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 hover:underline"
                  >
                    {branchAddresses.line1}
                    <br />
                    {branchAddresses.line2}
                    <br />
                    {branchAddresses.line3}
                  </a>
                </div>
            ))}
          </div>

          <iframe
              src={selectedBranch.mapLink}
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