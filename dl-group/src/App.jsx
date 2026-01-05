import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Results from "./sections/Results";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <main className="bg-slate-950 min-h-screen text-white selection:bg-blue-500/30">
      <Navbar />
      
      <div className="flex flex-col gap-0">
        <Hero />
        <Services />
        <Results />
        <Testimonials />
      </div>
      
      <Footer />
    </main>
  );
}

export default App;