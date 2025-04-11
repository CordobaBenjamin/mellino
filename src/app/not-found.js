import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-white text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <h2 className="text-2xl mt-2">Página no encontrada</h2>
            <p className="mt-4 text-blue-200">Lo sentimos, la página que buscas no existe.</p>
            <Link href="/" className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white text-lg transition">
                Volver al inicio
            </Link>
        </div>
    );
}
