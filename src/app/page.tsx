import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Footer from './components/Footer';
import Header from './components/Header';
import Welcome from './components/Welcome';
import WhatHappensAtNomadi from './components/WhatHappensAtNomadi';
import Trips from './components/Trips';
import Subscribe from './components/Subscribe';

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Welcome />
      <WhatHappensAtNomadi />
      <WhoWeAre />
      <Trips />
      <Subscribe />
      <Footer />
    </>
  );
};
