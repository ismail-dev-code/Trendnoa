
import Footer from "./components/Footer";
import WhyTrendnoa from "./components/WhyTrendnoa";
import FeaturedTrend from "./components/FeaturedTrend";
import ClientLayout from "./components/ClientLayout";
import NavBar from "./components/NavBar";
import NewYearOffers from "./components/NewYearOffers";
import TopCategories from "./components/TopCategories";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <>
      <ClientLayout>
        <NavBar />

        <FeaturedTrend />
        <NewYearOffers/>
        <TopCategories/>
        <FAQSection/>
        <WhyTrendnoa />

        <Footer />
      </ClientLayout>
    </>
  );
}
