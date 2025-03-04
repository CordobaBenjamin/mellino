// // src/components/GoogleMap.jsx
// 'use client';
//
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { useState } from 'react';
//
// const containerStyle = {
//     width: '100%',
//     height: '400px'
// };
//
// export default function GoogleMap() {
//     const [center] = useState({ lat: -34.6037, lng: -58.3816 }); // Ejemplo: Buenos Aires
//
//     const branches = [
//         { lat: -34.6037, lng: -58.3816, title: 'Sucursal 1' },
//         { lat: -34.6137, lng: -58.3816, title: 'Sucursal 2' }
//     ];
//
//     return (
//         <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_API_KEY || ''}>
//             <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
//                 {branches.map((branch, index) => (
//                     <Marker
//                         key={index}
//                         position={{ lat: branch.lat, lng: branch.lng }}
//                         title={branch.title}
//                     />
//                 ))}
//             </GoogleMap>
//         </LoadScript>
//     );
// }
