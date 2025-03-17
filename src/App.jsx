import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import EmergencyRepairs from "./components/EmergencyRepairs"
import WhyChooseUs from "./components/WhyChooseUs"
import ShareStory from "./components/ShareStory"
import Testimonials from "./components/Testimonials"
import OurTeam from "./components/OurTeam"
import PartnerLogos from "./components/PartnerLogos"
import LatestNews from "./components/LatestNews"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <EmergencyRepairs />
      <WhyChooseUs />
      <ShareStory />
      <Testimonials />
      <OurTeam />
      <PartnerLogos />
      <LatestNews />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App

