import { FaWhatsapp } from 'react-icons/fa';
import {contactInfoData, sliderMainData} from '@/data/sliderData';

export default function WhatsAppButton() {
    return (
        <a
            href={contactInfoData.socialMedia.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
        >
            <FaWhatsapp className="text-3xl" />
        </a>
    );
}
