'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { sliderImageTextData } from '@/data/sliderData';

function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    );
}

export default function SliderImageText() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            if (!sliderImageTextData || sliderImageTextData.length === 0) {
                throw new Error("No hay datos para mostrar en el slider.");
            }
            // Simula un retardo para mostrar un loading profesional
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 100);
            return () => clearTimeout(timer);
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return (
            <div className="max-w-7xl mx-auto px-4">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-center text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8">
            {/* Texto Fijo */}
            <div className="md:w-1/2 flex items-center justify-center bg-white shadow p-4">
                <p className="text-lg text-blue-950">
                    <strong>Lo mejor del mar</strong> directo a tu mesa. Calidad garantizada y frescura incomparable.
                </p>
            </div>
            {/* Slider de Imágenes */}
            <div className="md:w-1/2">
                <Swiper
                    loop
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    className="h-64"
                >
                    {sliderImageTextData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-64">
                                <Image
                                    src={slide.image}
                                    alt={slide.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
