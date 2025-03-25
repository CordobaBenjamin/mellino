"use client";
import { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
    { option: "5%" },
    { option: "10%" },
    { option: "15%" },
    { option: "20%" },
    { option: "25%" },
    { option: "30%" },
    { option: "40%" },
    { option: "50%" },
];

export default function DiscountWheelPopup({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [prize, setPrize] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("discountWheelPlayed")) {
            setIsOpen(false);
            onClose && onClose();
        }
    }, []);

    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
    };

    const handleSpinStop = () => {
        setMustSpin(false);
        setPrize(data[prizeNumber].option);
        localStorage.setItem("discountWheelPlayed", "true");
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
            <div className="relative bg-white p-4 rounded-lg shadow-2xl text-center w-80 border">
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
                <div className="mb-4">
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={data}
                        backgroundColors={["#3f3f3f", "#df3428"]}
                        textColors={["#ffffff"]}
                        onStopSpinning={handleSpinStop}
                    />
                </div>
                <button
                    onClick={handleSpinClick}
                    disabled={mustSpin}
                    className={`mt-4 px-6 py-3 rounded-full text-white text-lg font-semibold transition ${
                        mustSpin
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                    {mustSpin ? "Girando..." : "Girar Ruleta"}
                </button>
                {prize && (
                    <div className="mt-4 text-xl font-semibold text-blue-900">
                        🎉 ¡Ganaste un {prize} de descuento!
                    </div>
                )}
            </div>
        </div>
    );
}
