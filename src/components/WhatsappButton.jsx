"use client";
import { FaWhatsapp } from 'react-icons/fa';
import { contactInfoData, sliderMainData } from '@/data/sliderData';

export default function WhatsAppButton() {
    const message = "¡Hola! Estoy interesado en obtener más información acerca de la pescaderia!.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${contactInfoData.socialMedia.whatsapp}?text=${encodedMessage}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-6 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110 opacity-95 animate-pulse hover:animate-none hover:opacity-100"
        >
            <FaWhatsapp className="text-5xl" />
        </a>
    );
}
