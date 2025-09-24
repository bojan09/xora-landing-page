import {
  Header,
  Hero,
  Features,
  Pricing,
  Faq,
  Testimonials,
  Download,
  Footer,
} from "./sections";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};

export default App;
