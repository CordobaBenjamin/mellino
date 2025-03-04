// // src/components/GoogleReviews.jsx
// 'use client';
//
// import { useEffect, useState } from 'react';
//
// const mockReviews = [
//     {
//         author: 'Juan Pérez',
//         rating: 5,
//         text: 'Excelente atención y productos muy frescos.'
//     },
//     {
//         author: 'María López',
//         rating: 4,
//         text: 'Me encanta la calidad del pescado, volveré pronto.'
//     },
//     {
//         author: 'Carlos González',
//         rating: 5,
//         text: 'La mejor paella que probé en mucho tiempo.'
//     }
// ];
//
// export default function GoogleReviews() {
//     const [reviews, setReviews] = useState([]);
//
//     useEffect(() => {
//         // Aquí podrías hacer un fetch real a la API de Google Places
//         setReviews(mockReviews);
//     }, []);
//
//     return (
//         <div className="max-w-7xl mx-auto px-4">
//             <h2 className="text-2xl font-bold mb-4">Reseñas de Google</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {reviews.map((review, index) => (
//                     <div key={index} className="p-4 shadow bg-white rounded">
//                         <p className="text-sm text-gray-700">
//                             <strong>{review.author}</strong>
//                         </p>
//                         <p className="text-yellow-500">
//                             {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
//                         </p>
//                         <p className="text-gray-600">{review.text}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
