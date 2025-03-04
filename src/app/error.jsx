// src/app/error.jsx
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error('Error:', error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold mb-4">Ups... Ocurrió un error.</h2>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Reintentar
            </button>
        </div>
    );
}
