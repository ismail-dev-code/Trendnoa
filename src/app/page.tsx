import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import WhyTrendnoa from "./components/WhyTrendnoa";
import FeaturedTrend from "./components/FeaturedTrend";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <FeaturedTrend/>
        <WhyTrendnoa />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
