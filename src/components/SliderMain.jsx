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
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-900"></div>
            </div>
        </div>
    );
}

export default function SliderMain() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            if (!sliderMainData || sliderMainData.length === 0) {
                throw new Error('No hay datos para mostrar en el slider.');
            }
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 200);
            return () => clearTimeout(timer);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ocurrió un error inesperado');
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
            <div className="relative w-full" style={{ paddingTop: '50%' }} >

                <div className="absolute inset-0">
                    <Swiper
                        loop
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        modules={[Autoplay]}
                        className="w-full h-full"
                    >
                        {sliderMainData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-full">
                                    <Image
                                        src={item.image}
                                        alt={`Slider image ${index + 1}`}
                                        fill
                                        loading="eager"
                                        priority
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}