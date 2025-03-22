'use client';

import { useState } from 'react';

const branches = [
    {
        name: 'Villa Madero',
        address: 'Av. Crovara 154, B1751 Villa Madero, Buenos Aires',
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26247.780419331804!2d-58.53395622568359!3d-34.680642199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9d9ca706bb1%3A0x8bae7bc5da9475c0!2sPescader%C3%ADa%20Mellino!5e0!3m2!1ses-419!2sar!4v1741822922720!5m2!1ses-419!2sar',
    },
    {
        name: 'Bustamante',
        address: 'Dirección 2, Buenos Aires',
        mapUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26247.780419331804!2d-58.53395622568359!3d-34.680642199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc92170503825%3A0x638a133465bcdf9c!2sPescader%C3%ADa%20Mellino!5e0!3m2!1ses-419!2sar!4v1741821905867!5m2!1ses-419!2sar',
    },
];

export default function GoogleMap() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="bg-blue-100 shadow rounded-xl p-6 flex flex-col gap-6">
                {/* Información y botones */}
                <div className="flex flex-col gap-4">
                    <div className=" p-4 rounded-lg text-center">
                        <h2 className="text-xl font-semibold text-blue-900">
                            {branches[activeIndex].name}
                        </h2>
                        <p className="text-blue-800 mt-1">{branches[activeIndex].address}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        {branches.map((branch, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-full py-2 px-4 rounded-md transition-colors ${
                                    index === activeIndex
                                        ? 'bg-blue-900 text-white'
                                        : 'bg-gray-200 text-blue-900 hover:bg-gray-300'
                                }`}
                            >
                                Ir a {branch.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mapa */}
                <div>
                    <iframe
                        src={branches[activeIndex].mapUrl}
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg shadow"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
