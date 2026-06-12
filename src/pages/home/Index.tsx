
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchFilter from "@/components/SearchFilter";
import Inventory from "@/components/Inventory";
import WhyChooseUs from "@/components/WhyChooseUs";
import News from "@/components/News";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SearchFilter />
      <Inventory />
      <WhyChooseUs />
      <News />
      <Location />
      <Reviews />
      <Footer />
    </div>
  );
}
