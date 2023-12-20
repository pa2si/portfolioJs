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
      <Intermediate text="Why choose a custom-built Website?" />
      <CustomWebBenefits />
      <Intermediate text="Find now some custom coding examples of general functionalities for web-apps" />
      <Functionalities />
    </main>
  );
}
