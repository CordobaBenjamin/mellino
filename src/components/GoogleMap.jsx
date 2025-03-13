'use client';

import { useState } from 'react';

const branches = [
    {
        name: 'Villa Madero',
        address: 'Dirección 1, Buenos Aires',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26247.780419331804!2d-58.53395622568359!3d-34.680642199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9d9ca706bb1%3A0x8bae7bc5da9475c0!2sPescader%C3%ADa%20Mellino!5e0!3m2!1ses-419!2sar!4v1741822922720!5m2!1ses-419!2sar'
    },
    {
        name: 'Bustamante',
        address: 'Dirección 2, Buenos Aires',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26247.780419331804!2d-58.53395622568359!3d-34.680642199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc92170503825%3A0x638a133465bcdf9c!2sPescader%C3%ADa%20Mellino!5e0!3m2!1ses-419!2sar!4v1741821905867!5m2!1ses-419!2sar'
    }
];

export default function BranchSelector() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '450px' }}>
            {/* Datos y botones */}
            <div style={{ width: '30%', padding: '20px' }}>
                <h2 className={'text-blue-400'}>{branches[activeIndex].name}</h2>
                <p className={'text-blue-400'}>{branches[activeIndex].address}</p>
                {branches.map((branch, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        style={{
                            display: 'block',
                            marginTop: '10px',
                            padding: '10px',
                            background: index === activeIndex ? '#002B5B' : '#ccc',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            width: '100%'
                        }}
                    >
                        {branch.name}
                    </button>
                ))}
            </div>

            {/* Mapa */}
            <div style={{ width: '70%' }}>
                <iframe
                    src={branches[activeIndex].mapUrl}
                    width="100%"
                    height="450px"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
