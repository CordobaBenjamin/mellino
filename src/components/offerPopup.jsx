"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { offerSliderData } from "@/data/sliderData";

function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-900"></div>
        </div>
    );
}

export default function OfferPopup() {
    const [showPopup, setShowPopup] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            if (!offerSliderData || offerSliderData.length === 0) {
                throw new Error("No hay datos de ofertas.");
            }
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 200);
            return () => clearTimeout(timer);
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    }, []);

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded shadow-xl relative w-[90vw] aspect-video md:w-[80%] md:h-[80%] md:aspect-auto border border-gray-300 flex flex-col">
                <div className="flex justify-end">
                    <button
                        onClick={() => setShowPopup(false)}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                        ✖
                    </button>
                </div>
                {isLoading ? (
                    <LoadingSpinner />
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div className="w-full h-full overflow-hidden relative">
                        <Swiper
                            loop
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            modules={[Autoplay]}
                            className="w-full h-full rounded-lg shadow mb-2"
                        >
                            {offerSliderData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative w-full" style={{ paddingTop: "50%" }}>
                                        <Image
                                            src={item.image}
                                            alt={`Oferta ${index + 1}`}
                                            fill
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
                <div className="text-center font-bold text-blue-600 mt-2 text-xl">
                    SOLO POR ESTA SEMANA, NUESTROS PESCADOS A $8999/KG
                </div>
            </div>
        </div>
    );
}
