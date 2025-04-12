// src/app/layout.jsx
import "./globals.css";

export const metadata = {
    title: "Mellino Pescadería | Mariscos frescos en Buenos Aires",
    description: "Mellino Pescadería ofrece los mariscos y pescados más frescos en Buenos Aires. Calidad garantizada y frescura incomparable.",
    keywords: "pescadería, mariscos, pescados frescos, Buenos Aires, Mellino, pescadería en Argentina",
    openGraph: {
        title: "Mellino Pescadería | Lo mejor del mar en tu mesa",
        description: "Descubre pescados y mariscos frescos de la mejor calidad en Buenos Aires.",
        url: "https://mellinopescaderia.com.ar",
        siteName: "Mellino Pescadería",
        images: [
            {
                url: "/images/sliderMain (1).jpg",
                width: 1200,
                height: 630,
                alt: "Pescadería Mellino - Lo mejor del mar"
            }
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mellino Pescadería | Mariscos frescos en Buenos Aires",
        description: "Descubre pescados y mariscos frescos de la mejor calidad en Buenos Aires.",
        images: ["/images/sliderMain (1).jpg"],
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap"
                  rel="stylesheet"/>

            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="robots" content="index, follow"/>
            <meta name="author" content="Mellino Pescadería"/>
            <link rel="canonical" href="https://mellinopescaderia.com.ar"/>
            <link rel="icon" href="/src/app/favicon.ico"/>
            <title>La cocina de Ana Mellino</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Inline:opsz,wght@10..72,100..900&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Special+Gothic+Condensed+One&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            </style>
        </head>
        <body>{children}</body>
        </html>
    );
}
