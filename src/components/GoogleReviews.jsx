"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

const truncateText = (text, maxLength) =>
    text.length > maxLength ? text.substring(0, maxLength).trim() + "..." : text;

const staticReviews = [
    {
        name: "Lucas Cormick",
        profile_photo_url: "/images/user1.png",
        rating: 5,
        relative_time_description: "hace 1 año",
        text: `Lindo local ubicado en Lope de Vega y Tinogasta, a cuadras de Avenida Beiro.

Porciones abundantes y precios razonables para la calidad de la comida, los productos que ofrecen y la atención que brindan.

Verían en la oferta que brindan en cada semana, algunos platos como sugerencia.

Picada de mar increíble. Brotola apanada imperdible. Rabas riquísimas. Paella super fresca.

Aceptan tarjeta de débito. Si pagás en efectivo y comprás por más de $20.000 te hacen un descuento.

Las chicas son muy amables y simpáticas, muy buena atención y siempre convidan algún manjar mientras esperás.

Recomendable, lo mejor de la zona.`,
    },
    {
        name: "Ricardo Moltrasio",
        profile_photo_url: "/images/user2.png",
        rating: 3,
        relative_time_description: "hace 3 meses",
        text: `Desde Flores a Devoto. La cocina marina excelente.

Quise comprar brotola pero no tienen. Es más comida hecha para llevar, que pescado fresco para comprar.

Los descuentos… ahí en la vidriera, porque no los hacen.`,
    },
    {
        name: "Silvy",
        profile_photo_url: "/images/user3.png",
        rating: 5,
        relative_time_description: "hace 5 años",
        text: `Muy buena pescadería de barrio, con muy buena variedad de pescados frescos y elaborados.

Fui un viernes santo, había muchísima gente, pero el personal fue muy eficiente y amable. Ofrecen bocadillos mientras esperás.

Los precios son acordes a la calidad. Recomiendo la paella, es exquisita.`,
    },
    {
        name: "Gonzalo Lago",
        profile_photo_url: "/images/user4.png",
        rating: 5,
        relative_time_description: "hace 10 meses",
        text: `La calidad de la comida es insuperable y la atención una maravilla.

Cocinan con pasión y se nota. Muchas gracias Antonio por tu cálida atención y los tips para servir los manjares.

¡10 en todo!`,
    },
    {
        name: "Guillermo Gimenez",
        profile_photo_url: "/images/user5.png",
        rating: 5,
        relative_time_description: "hace 4 meses",
        text: `Las chicas de la tarde Mellino Devoto, Johana y Ana, son unas genias.

Johana siempre sonriente, buena onda y recomendando comidas. Ana igual. Cada 15 días voy para una cena familiar.

La paella, el arroz con mariscos, las empanadas… ¡una delicia!

Cuiden a las chicas. ¡Gracias!`,
    },
    {
        name: "Silvia Eriksson",
        profile_photo_url: "/images/user6.png",
        rating: 5,
        relative_time_description: "hace 1 mes",
        text: `Excelente calidad, precios accesibles, buena atención.

Siempre te esperan con algo para degustar.`,
    },
];

export default function GoogleReviews() {
    const [reviews] = useState(staticReviews);

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
                            <p className="mt-3 text-blue-800 text-sm whitespace-pre-line">
                                {truncateText(review.text, 100)}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
