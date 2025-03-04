'use client';

import React from 'react';
import { contactInfoData } from '@/data/sliderData';

export default function InfoSection() {
    return (
        <section className="py-8">
            {/* Encabezado */}
            <div className="text-center">
                <h2 className="text-xl font-bold text-gray-700 uppercase tracking-wider">
                    {contactInfoData.openDaysTitle}
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                    {contactInfoData.openDaysSchedule}
                </p>
            </div>

            {/* Información de contacto */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-6">
                {/* Dirección */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-2">DIRECCIÓN</h3>
                    <a
                        href={contactInfoData.address.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:underline"
                    >
                        {contactInfoData.address.line1}
                        <br />
                        {contactInfoData.address.line2}
                        <br />
                        {contactInfoData.address.line3}
                    </a>
                </div>
                {/* Teléfonos */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-2">TELÉFONOS</h3>
                    <div className="text-sm text-gray-600">
                        {contactInfoData.phones.map((phone, index) => (
                            <a
                                key={index}
                                href={phone.link}
                                className="block hover:underline"
                            >
                                {phone.display}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Email */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-2">EMAIL</h3>
                    <a
                        href={contactInfoData.email.link}
                        className="text-sm text-gray-600 hover:underline"
                    >
                        {contactInfoData.email.display}
                    </a>
                </div>
            </div>
        </section>
    );
}
