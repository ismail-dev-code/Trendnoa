
import Footer from "./components/Footer";
import WhyTrendnoa from "./components/WhyTrendnoa";
import FeaturedTrend from "./components/FeaturedTrend";
import ClientLayout from "./components/ClientLayout";
import NavBar from "./components/NavBar";
import NewYearOffers from "./components/NewYearOffers";

export default function Home() {
  return (
    <>
      <ClientLayout>
        <NavBar />

        <FeaturedTrend />
        <NewYearOffers/>
        <WhyTrendnoa />

        <Footer />
      </ClientLayout>
    </>
  );
}
