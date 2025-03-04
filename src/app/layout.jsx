// src/app/layout.jsx
import "./globals.css";

export const metadata = {
    title: "Mellino_DEV",
    description: "Mellino Landing Page",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
        <body>{children}</body>
        </html>
    );
}
