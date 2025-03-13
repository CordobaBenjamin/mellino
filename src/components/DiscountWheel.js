"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const prizes = [
    "10% de descuento",
    "15% de descuento",
    "5% de descuento",
    "50% de descuento",
    "¡Un producto gratis!",
    "20% de descuento",
    "30% de descuento",
    "¡Sigue intentando!"
];

export default function DiscountWheel() {
    const [isOpen, setIsOpen] = useState(false);
    const [spinning, setSpinning] = useState(false);
    const [prize, setPrize] = useState(null);
    const wheelRef = useRef(null);

    // Verifica si el usuario ya giró la ruleta
    useEffect(() => {
        const alreadyPlayed = localStorage.getItem("discountWheelPlayed");
        if (!alreadyPlayed) {
            setIsOpen(true);
        }
    }, []);

    const spinWheel = () => {
        if (spinning) return;

        setSpinning(true);
        const randomIndex = Math.floor(Math.random() * prizes.length);
        setPrize(prizes[randomIndex]);

        // Ángulo aleatorio basado en la posición del premio
        const rotation = 360 * 5 + (randomIndex * (360 / prizes.length));

        gsap.to(wheelRef.current, {
            rotation,
            duration: 4,
            ease: "power4.out",
            onComplete: () => {
                setSpinning(false);
                localStorage.setItem("discountWheelPlayed", "true"); // Guarda en LocalStorage
            }
        });
    };

    return isOpen ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-2xl text-center relative w-80 border border-gray-300">
                {/* Botón de cerrar */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
                >
                    ✖
                </button>

                <h3 className="text-2xl font-bold text-blue-900 mb-4">¡Gira la Ruleta y Gana un Descuento!</h3>

                {/* Ruleta */}
                <div className="relative w-56 h-56 mx-auto mb-4">
                    <div
                        ref={wheelRef}
                        className="w-full h-full rounded-full border-4 border-blue-900 bg-white flex items-center justify-center shadow-lg"
                    >
                        <p className="text-blue-900 font-bold text-lg">🎁</p>
                    </div>

                    {/* Indicador */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-0 h-0 border-l-8 border-r-8 border-b-16 border-transparent border-b-red-500"></div>
                </div>

                {/* Botón para girar */}
                <button
                    onClick={spinWheel}
                    disabled={spinning}
                    className={`mt-4 px-6 py-3 rounded-full text-white text-lg font-semibold transition ${
                        spinning ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                    {spinning ? "Girando..." : "Girar Ruleta"}
                </button>

                {/* Mensaje del premio */}
                {prize && (
                    <div className="mt-4 text-xl font-semibold text-blue-900">
                        🎉 ¡Ganaste {prize}!
                    </div>
                )}
            </div>
        </div>
    ) : null;
}
