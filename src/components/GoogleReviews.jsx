"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

const staticReviews = [
    {
        name: "Juan Pérez",
        profile_photo_url: "/images/user1.jpg",
        rating: 5,
        relative_time_description: "hace 2 semanas",
        text: "Excelente calidad y atención. ¡Muy recomendable!",
    },
    {
        name: "María Gómez",
        profile_photo_url: "/images/user2.jpg",
        rating: 4,
        relative_time_description: "hace 1 mes",
        text: "Los pescados siempre frescos y el servicio rápido.",
    },
    {
        name: "Carlos Rodríguez",
        profile_photo_url: "/images/user3.jpg",
        rating: 5,
        relative_time_description: "hace 3 meses",
        text: "Sin dudas la mejor pescadería de Buenos Aires.",
    },
    {
        name: "Ana Torres",
        profile_photo_url: "/images/user4.jpg",
        rating: 5,
        relative_time_description: "hace 1 semana",
        text: "Me encantó la calidad y frescura de los productos.",
    },
    {
        name: "Luis Fernández",
        profile_photo_url: "/images/user5.jpg",
        rating: 4,
        relative_time_description: "hace 2 meses",
        text: "Buen servicio y variedad de productos del mar.",
    },
];

export default function GoogleReviews() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/google-reviews")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error al obtener las reseñas");
                }
                return res.json();
            })
            .then((data) => {
                if (data && data.length > 0) setReviews(data);
                else setReviews(staticReviews);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fallo al obtener reseñas reales, se usará datos estáticos.", err);
                setReviews(staticReviews);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="py-12 bg-blue-50">
                <div className="max-w-6xl mx-auto text-center">Cargando reseñas...</div>
            </section>
        );
    }

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
                                    src={review.profile_photo_url}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-blue-900">{review.name}</p>
                                    <p className="text-gray-500 text-sm">{review.relative_time_description}</p>
                                </div>
                            </div>
                            <div className="flex mt-2 text-yellow-500">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className="mt-3 text-blue-800 text-sm">{review.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
