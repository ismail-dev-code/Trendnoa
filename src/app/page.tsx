
import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Hero Section */}
      <main>
        {/* Logo / Branding */}
       <NavBar/>

      </main>

    

      {/* Footer */}
     <Footer/>
    </div>
  );
}
