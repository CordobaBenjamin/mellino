'use client';

import { contactInfoData } from '../data/sliderData';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-10">
            {/* Contenedor Principal */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Izquierda: Horarios y Dirección */}
                <div>
                    <h3 className="text-lg font-bold">{contactInfoData.openDaysTitle}</h3>
                    <p className="text-sm mb-4">{contactInfoData.openDaysSchedule}</p>
                    <h3 className="text-lg font-bold">Dirección</h3>
                    <a href={contactInfoData.address.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300 hover:text-white">
                        <FaMapMarkerAlt /> {contactInfoData.address.line1} {contactInfoData.address.line2}, {contactInfoData.address.line3}
                    </a>
                </div>

                {/* Centro: Teléfonos */}
                <div>
                    <h3 className="text-lg font-bold">Teléfonos</h3>
                    {contactInfoData.phones.map((phone, index) => (
                        <a key={index} href={phone.link} className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300 hover:text-white">
                            <FaPhone /> {phone.display}
                        </a>
                    ))}
                </div>

                {/* Derecha: Email y Redes Sociales */}
                <div>
                    <h3 className="text-lg font-bold">Contacto</h3>
                    <a href={contactInfoData.email.link} className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300 hover:text-white">
                        <FaEnvelope /> {contactInfoData.email.display}
                    </a>
                    <h3 className="text-lg font-bold mt-4">Síguenos</h3>
                    <div className="flex justify-center md:justify-start gap-4 mt-2">
                        <a href="#" className="text-gray-300 hover:text-white text-lg"><FaFacebook /></a>
                        <a href="#" className="text-gray-300 hover:text-white text-lg"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Pie de Página */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-300">
                &copy; {new Date().getFullYear()} Mellino Pescadería - Todos los derechos reservados.
            </div>
        </footer>
    );
}
