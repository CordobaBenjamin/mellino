// src/components/GoogleReviews.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

const reviews = [
    {
        name: "Juan Pérez",
        profilePic: "/images/user1.jpg",
        rating: 5,
        date: "hace 2 semanas",
        comment: "Excelente calidad y atención. ¡Muy recomendable!",
    },
    {
        name: "María Gómez",
        profilePic: "/images/user2.jpg",
        rating: 4,
        date: "hace 1 mes",
        comment: "Los pescados siempre frescos y el servicio rápido.",
    },
    {
        name: "Carlos Rodríguez",
        profilePic: "/images/user3.jpg",
        rating: 5,
        date: "hace 3 meses",
        comment: "Sin dudas la mejor pescadería de Buenos Aires.",
    },
    {
        name: "Ana Torres",
        profilePic: "/images/user4.jpg",
        rating: 5,
        date: "hace 1 semana",
        comment: "Me encantó la calidad y frescura de los productos.",
    },
    {
        name: "Luis Fernández",
        profilePic: "/images/user5.jpg",
        rating: 4,
        date: "hace 2 meses",
        comment: "Buen servicio y variedad de productos del mar.",
    },
];

export default function GoogleReviews() {
    return (
        <section className="py-12 bg-blue-50">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="max-w-6xl mx-auto"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-left">
                            <div className="flex items-center gap-4">
                                <img
                                    src={review.profilePic}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-blue-900">{review.name}</p>
                                    <p className="text-gray-500 text-sm">{review.date}</p>
                                </div>
                            </div>
                            <div className="flex mt-2 text-yellow-500">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className="mt-3 text-blue-800 text-sm">{review.comment}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
