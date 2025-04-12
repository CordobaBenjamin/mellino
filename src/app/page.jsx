// src/app/page.jsx
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderMain from "@/components/SliderMain";
import SliderDishes from "@/components/SliderDishes";
import SliderImageText from "@/components/SliderImageText";
import InfoSection from "@/components/infoSection";
import GoogleMap from "@/components/GoogleMap";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import DiscountWheel from "@/components/DiscountWheel";
import OfferPopup from "@/components/offerPopup";
import DiscountPopup from "@/components/offerPopup";
import DiscountWheelPopup from "@/components/DiscountWheel";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50">
      {/*<DiscountWheelPopup />*/}
      <OfferPopup />

      <section className="fixed bottom-4 right-4 z-50">
        <WhatsAppButton />
      </section>

      <header
        className="text-center py-12 md:py-16 bg-gradient-to-b from-blue-200 to-blue-50 text-blue-900"
        style={{ fontFamily: '"Merriweather", serif' }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-wider">
          La Cocina de Ana Mellino
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl">
          Sucursal - Lope de Vega
        </p>
      </header>

      <section className="pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SliderMain />
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <SliderDishes />
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SliderImageText />
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-white from-blue-50">
        <InfoSection />
      </section>

      {/* <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <GoogleMap />
      </section> */}

      <section className="bg-gradient-to-b from-blue-50 to-white">
        <GoogleReviews />
      </section>

      <footer className="bg-blue-900 text-white">
        <Footer />
      </footer>
    </main>
  );
}
