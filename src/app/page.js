import About from './_sections/About/About';
import Hero from './_sections/Hero/Hero';
import Intermediate from '../utils/Intermediate/Intermediate';
import CustomWebBenefits from './_sections/CustomWebBenefits/CustomWebBenefits';
import Functionalities from './_sections/Functionalities/Functionalities';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Intermediate text="Why Choose a Custom-Built Website?" />
      <CustomWebBenefits />
      <Intermediate text="Find now some example functionalities we can implement" />
      <Functionalities />
    </main>
  );
}
