// src/components/SliderImageText.jsx
"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { sliderImageTextData } from "@/data/sliderData";

function LoadingSpinner() {
  return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-900"></div>
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
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 200);
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
        <div className="md:w-1/2 flex items-center justify-center bg-blue-100 shadow-lg p-6 rounded-lg">
          <p className="text-lg text-blue-900 font-semibold leading-relaxed">
            Nuestra calidad y frescura han llamado la atención de los medios. Aquí te
            compartimos algunos momentos en los que nuestra pescadería se destaca en
            televisión.
            <strong className="text-blue-950">
              ¡Orgullosos de ofrecer lo mejor del mar a tu mesa!{" "}
            </strong>
          </p>
        </div>

        <div className="md:w-1/2">
          <Swiper
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              modules={[Autoplay]}
          >
            {sliderImageTextData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full aspect-video rounded-lg overflow-hidden shadow">
                    <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        loading="eager"
                        priority
                        style={{objectFit: "cover"}}
                    />
                  </div>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
  );
}
