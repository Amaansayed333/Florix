import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Technology from "./components/Technology.jsx";
import Applications from "./components/Applications.jsx";
import Team from "./components/Team.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Demosection from "./components/Demosection.jsx";

function App() {
    return (
        <div className="bg-gray-50 font-poppins">
            <Header />
            <Hero />
            <Demosection />
            <Technology />
            <Applications />
            <Team />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
