'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { sliderMainData } from '@/data/sliderData';

function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    );
}

export default function SliderMain() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            // Verifica que existe data para el slider
            if (!sliderMainData || sliderMainData.length === 0) {
                throw new Error("No hay datos para mostrar en el slider.");
            }
            // Simula un retardo en la carga para mostrar el spinner de forma profesional
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
            <div className="max-w-7xl mx-auto w-full overflow-hidden relative">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto w-full overflow-hidden relative">
                <p className="text-center text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto w-full overflow-hidden relative">
            <Swiper
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="w-full h-96"
            >
                {sliderMainData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <Image
                                src={item.image}
                                alt={`Slider image ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
