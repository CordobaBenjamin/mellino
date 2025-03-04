'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { sliderDishesData } from '@/data/sliderData';

function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    );
}

export default function SliderDishes() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [navPrevEl, setNavPrevEl] = useState(null);
    const [navNextEl, setNavNextEl] = useState(null);

    useEffect(() => {
        try {
            if (!sliderDishesData || sliderDishesData.length === 0) {
                throw new Error("No hay datos para mostrar en el slider.");
            }
            // Simula un retardo breve para un loading profesional
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
        <div className="max-w-7xl mx-auto px-4 relative">
            <Swiper
                loop
                navigation={{ prevEl: navPrevEl, nextEl: navNextEl }}
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={3}
                className="h-auto"
            >
                {sliderDishesData.map((dish, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white shadow rounded overflow-hidden h-full flex flex-col">
                            <div className="relative w-full h-48">
                                <Image
                                    src={dish.image}
                                    alt={dish.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 flex-grow">
                                <h3 className="font-semibold">{dish.title}</h3>
                                <p className="text-sm text-blue-950">{dish.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Botones de navegación personalizados asignados con callback refs */}
            <div
                ref={setNavPrevEl}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-700 text-white p-2 rounded-full"
            >
                &larr;
            </div>
            <div
                ref={setNavNextEl}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-700 text-white p-2 rounded-full"
            >
                &rarr;
            </div>
        </div>
    );
}
