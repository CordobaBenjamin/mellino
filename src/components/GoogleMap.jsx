'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: -34.6037,
    lng: -58.3816
};

const branches = [
    { lat: -34.6037, lng: -58.3816, title: 'Sucursal 1' },
    { lat: -34.6137, lng: -58.3816, title: 'Sucursal 2' }
];

export default function MyGoogleMap() {
    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                options={{ mapId: process.env.NEXT_PUBLIC_MAP_ID }}
            >
                {branches.map((branch, index) => (
                    <Marker
                        key={index}
                        position={{ lat: branch.lat, lng: branch.lng }}
                        title={branch.title}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
}
