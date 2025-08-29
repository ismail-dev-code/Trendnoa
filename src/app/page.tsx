
import Footer from "./components/Footer";
import WhyTrendnoa from "./components/WhyTrendnoa";
import FeaturedTrend from "./components/FeaturedTrend";
import ClientLayout from "./components/ClientLayout";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <ClientLayout>
        <NavBar />

        <FeaturedTrend />
        <WhyTrendnoa />

        <Footer />
      </ClientLayout>
    </>
  );
}
