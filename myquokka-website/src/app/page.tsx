import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import InfoCategories from './components/InfoCategories';
import CustomServices from './components/CustomServices';
import Membership from './components/Membership';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <InfoCategories />
      <CustomServices />
      <Membership />
      <Footer />
    </main>
  );
} 