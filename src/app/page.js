import About from './_sections/About/About';
import Hero from './_sections/Hero/Hero';
import Question from './_sections/Question/Question';
import CustomWebBenefits from './CustomWebBenefits/CustomWebBenefits';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Question />
      <CustomWebBenefits />
    </main>
  );
}
