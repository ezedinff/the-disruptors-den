import Hero  from './components/Hero';
import WhoWeAre from './components/who-we-are';
import Footer from './components/Footer';
import Header from './components/Header';
import Welcome from './components/Welcome';
import WhatHappensAtNomadi from './components/What-Happens-At-Tdd';
import Events from './components/Events';
import Subscribe from './components/Subscribe';
import ContactUs from './components/Contact/ContactUs';
import Gallery from './components/Gallery';

export default function Page() {
  return (
    <> 
      <Header />
      <Hero />
      {/* <Welcome /> */}
      <WhatHappensAtNomadi />
      <WhoWeAre />
      <Events />
      <Subscribe />
      <Gallery />
      <ContactUs />
      <Footer />
    </>
  );
};
