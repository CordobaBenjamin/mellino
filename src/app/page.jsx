// src/app/page.jsx
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SliderMain from '@/components/SliderMain';
import SliderDishes from '@/components/SliderDishes';
import SliderImageText from '@/components/SliderImageText';
import InfoSection from '@/components/infoSection';

import GoogleMap from '@/components/GoogleMap';
import GoogleReviews from '@/components/GoogleReviews';
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import DiscountWheel from "@/components/DiscountWheel";




export default function Home() {
  return (
      <main className="min-h-screen bg-white ">


          {/* Contenido de la página */}
          <DiscountWheel />

          {/*Whatsapp Button*/}
          <section className="py-8">
              <WhatsAppButton />
          </section>


          {/* Titulo principal */}
          <div className="text-center py-8">
              <h1 className="text-6xl font-extrabold text-blue-950">Mellino</h1>
              <h2 className="mt-4 text-2xl text-blue-800">
                  7:30 - 13:00 hs. | 16:00 - 20:00 hs.
              </h2>
          </div>
        {/* Slider principal */}
        <section className="py-8 bg-gray-200">
          <SliderMain />
        </section>

        {/* Slider de platillos */}
        <section className="py-8 bg-white">
          <SliderDishes />
        </section>

        {/* Slider con imagen + texto fijo */}
        <section className="py-8 bg-gray-200">
          <SliderImageText />
        </section>

          <section className="py-8 bg-white">
              <InfoSection />
          </section>

          {/*Google Map */}
        <section className="py-8">
          <GoogleMap />
        </section>

          {/*Google Map */}
          <section className="py-8">
              <GoogleReviews />
          </section>

          {/*Footer */}
          <section className="py-8">
              <Footer />
          </section>
      </main>
  );
}
