"use client";
import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";

const Wheel = dynamic(
    () => import("react-custom-roulette").then((mod) => mod.Wheel),
    { ssr: false }
);

const wheelOptions = [
    { id: 1, option: "10%", win: true },
    { id: 2, option: "0%", win: false },
    { id: 3, option: "15%", win: true },
    { id: 4, option: "0%", win: false },
    { id: 5, option: "25%", win: true },
    { id: 6, option: "0%", win: false },
    { id: 7, option: "30%", win: true },
    { id: 8, option: "0%", win: false },
];

export default function DiscountWheelPopup({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [result, setResult] = useState(null);
    const [discountCode, setDiscountCode] = useState(null);
    const [spinClicked, setSpinClicked] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("discountWheelPlayed")) {
            setIsOpen(false);
            onClose && onClose();
        }
    }, [onClose]);

    const bgColors = useMemo(() => ["#ffffff", "#0d6efd"], []);
    const textColors = useMemo(() => ["#0d6efd", "#ffffff"], []);

    const handleSpinClick = () => {
        if (spinClicked || localStorage.getItem("discountWheelPlayed")) return;
        setSpinClicked(true);
        const newPrizeNumber = Math.floor(Math.random() * wheelOptions.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
    };

    const handleSpinStop = () => {
        setMustSpin(false);
        localStorage.setItem("discountWheelPlayed", "true");
        if (wheelOptions[prizeNumber].win) {
            setResult(`🎉 ¡Ganaste un ${wheelOptions[prizeNumber].option} de descuento!`);
            const first = Math.floor(Math.random() * 10);
            const mid = Math.floor(Math.random() * 10) + 70; // Valor entre 70 y 79
            const last = Math.floor(Math.random() * 10);
            const hash = `${first}${mid}${last}`;
            setDiscountCode(`MELLINO-CUPON-${hash}`);
        } else {
            setResult("Lo siento, 0% de descuento.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0"
                onClick={() => {
                    setIsOpen(false);
                    onClose && onClose();
                }}
            ></div>
            <div className="relative bg-white p-4 rounded-lg shadow-2xl text-center w-11/12 sm:w-96 md:w-[500px] lg:w-[600px] border">
                <button
                    onClick={() => {
                        setIsOpen(false);
                        onClose && onClose();
                    }}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
                >
                    ✖
                </button>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    ¡Gira la Ruleta y Gana un Descuento!
                </h3>
                <div className="mb-4 flex justify-center">
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={wheelOptions}
                        backgroundColors={bgColors}
                        textColors={textColors}
                        onStopSpinning={handleSpinStop}
                    />
                </div>
                <button
                    onClick={handleSpinClick}
                    disabled={mustSpin || spinClicked}
                    className={`mt-4 px-6 py-3 rounded-full text-white text-lg font-semibold transition ${
                        mustSpin || spinClicked
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                    {mustSpin ? "Girando..." : "Girar Ruleta"}
                </button>
                {result && (
                    <div className="mt-4 text-xl font-semibold text-blue-900">
                        {result}
                    </div>
                )}
                {discountCode && (
                    <div className="mt-2 text-lg font-semibold text-green-700">
                        Código: {discountCode}
                    </div>
                )}
            </div>
        </div>
    );
}
