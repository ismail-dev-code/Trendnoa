import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import WhyTrendnoa from "./components/WhyTrendnoa";
import FeaturedTrend from "./components/FeaturedTrend";
import ClientLayout from "./components/ClientLayout";

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
