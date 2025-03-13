"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-900 text-white text-center">
            <h1 className="text-6xl font-bold">500</h1>
            <h2 className="text-2xl mt-2">Error interno del servidor</h2>
            <p className="mt-4 text-red-200">Ocurrió un problema inesperado.</p>
            <button
                onClick={() => reset()}
                className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-full text-white text-lg transition"
            >
                Intentar nuevamente
            </button>
        </div>
    );
}
