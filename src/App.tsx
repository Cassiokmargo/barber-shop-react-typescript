import FirstSection from "./components/FirstSection";
import Footer from "./components/Footer";
import FourSection from "./components/FourSection";
import Header from "./components/Header";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import WhatsApp from "./components/WhatsApp";


function App() {
  return (
    <>
      <div className="bg-barber">
        <Header />
        <FirstSection />
      </div>
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <WhatsApp />
      <Footer />
    </>
  );
}

export default App;
