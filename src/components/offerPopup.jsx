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
    const [currentIndex, setCurrentIndex] = useState(0);

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
        <div className="fixed inset-0 flex z-50">
            <div className="bg-white p-4 m-auto rounded shadow-xl w-11/12 sm:max-w-[90vw] sm:aspect-[5/4] xl:w-1/2 xl:h-3/4    relative border border-gray-300 flex flex-col">
                <div className="flex justify-end">
                    <button
                        onClick={() => setShowPopup(false)}
                        className="text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
                    >
                        ✖
                    </button>
                </div>
                {isLoading ? (
                    <LoadingSpinner />
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <>
                        <div className="text-center font-bold text-blue-800 mb-4 sm:text-xl md:text-2xl xl:text-4xl">
                            Nuestros especiales de semana santa.
                        </div>
                        <div className="w-full h-full overflow-hidden relative">
                            <Swiper
                                loop
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                                modules={[Autoplay]}
                                className="w-full h-full rounded-lg shadow mb-2"
                            >
                                {offerSliderData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="pb-16 relative w-full" style={{ paddingTop: "50%" }}>
                                            <Image src={item.image} alt={`Oferta ${index + 1}`} fill />
                                        </div>
                                        <div className={'mt-4'}>
                                            <h2 className={'relative flex justify-center sm:text-l md:text-xl xl:text-2xl text-blue-800'}> {item.text} </h2>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
