"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

// Array de porcentajes
const prizes = ["5%", "10%", "15%", "20%", "25%", "30%", "40%", "50%"];

export default function DiscountWheel() {
    const [isOpen, setIsOpen] = useState(true);
    const [spinning, setSpinning] = useState(false);
    const [prize, setPrize] = useState(null);
    const wheelRef = useRef(null);

    useEffect(() => {
        // Mostrar la ruleta solo si el usuario aún no la ha jugado
        const alreadyPlayed = localStorage.getItem("discountWheelPlayed");
        if (alreadyPlayed) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }, []);

    const spinWheel = () => {
        if (spinning) return;
        setSpinning(true);
        const randomIndex = Math.floor(Math.random() * prizes.length);
        const finalPrize = prizes[randomIndex];
        // Calcular rotación: 5 vueltas completas + el ángulo para el premio (ajustado para centrar la porción)
        const rotation = 360 * 5 + randomIndex * (360 / prizes.length) + (360 / prizes.length) / 2;
        gsap.to(wheelRef.current, {
            rotation,
            duration: 4,
            ease: "power4.out",
            onComplete: () => {
                setSpinning(false);
                setPrize(finalPrize);
                localStorage.setItem("discountWheelPlayed", "true");
            }
        });
    };

    if (!isOpen) return null;

    // Tamaño y posición para los porcentajes sobre la ruleta
    const radius = 120; // Distancia desde el centro
    const sliceAngle = 360 / prizes.length;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-2xl text-center relative w-80 border border-gray-300">
                {/* Botón para cerrar */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
                >
                    ✖
                </button>

                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    ¡Gira la Ruleta y Gana un Descuento!
                </h3>

                {/* Contenedor de la ruleta */}
                <div className="relative w-64 h-64 mx-auto mb-4">
                    <div
                        ref={wheelRef}
                        className="relative w-full h-full rounded-full border-4 border-blue-900 bg-white shadow-lg overflow-hidden"
                    >
                        {/* Posicionar los porcentajes en el borde de la ruleta */}
                        {prizes.map((p, index) => {
                            const angle = sliceAngle * index;
                            return (
                                <div
                                    key={index}
                                    className="absolute left-1/2 top-1/2"
                                    style={{
                                        transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                                        transformOrigin: "center"
                                    }}
                                >
                                    <span className="text-xs font-semibold text-blue-900">{p}</span>
                                </div>
                            );
                        })}
                        {/* Centro de la ruleta: muestra el premio o el ícono */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-3xl font-bold text-blue-900">{prize || "🎁"}</p>
                        </div>
                    </div>

                    {/* Flecha indicadora (puntero) */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10">
                        <div className="w-0 h-0 border-l-8 border-r-8 border-b-16 border-transparent border-b-red-500"></div>
                    </div>
                </div>

                {/* Botón para girar la ruleta */}
                <button
                    onClick={spinWheel}
                    disabled={spinning}
                    className={`mt-4 px-6 py-3 rounded-full text-white text-lg font-semibold transition ${
                        spinning ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                    {spinning ? "Girando..." : "Girar Ruleta"}
                </button>

                {/* Mensaje al ganar */}
                {prize && (
                    <div className="mt-4 text-xl font-semibold text-blue-900">
                        🎉 ¡Ganaste un {prize} de descuento!
                    </div>
                )}
            </div>
        </div>
    );
}
