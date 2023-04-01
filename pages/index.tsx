import About from '@/components/about';
import Stepper from '@/components/stepper';
import Experience from '@/components/experience';
import Research from '@/components/research';
import Socials from '@/components/socials';

export default function Home() {
  return (
    <div>
      <div className="py-5">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-bold font-title my-2">Sripati Jana</h1>
          <p className="text-gray-400 text-xl font-medium mt-2">
            Post-doctoral researcher at{' '}
            <span className="text-blue-300">EPFL, Switzerland</span>
          </p>
          <div className="mt-4 flex justify-center">
            <Socials />
          </div>
        </div>
      </div>

      <div className="max-w-8xl md:max-w-6xl sm:max-w-4xl mx-auto">
        <About />
      </div>

      <div className="max-w-8xl md:max-w-6xl sm:max-w-4xl mx-auto">
        <Stepper />
      </div>

      <div className="max-w-8xl md:max-w-6xl sm:max-w-4xl mx-auto">
        <Experience />
      </div>

      <div className="max-w-8xl md:max-w-6xl sm:max-w-4xl mx-auto">
        <Research />
      </div>
    </div>
  );
}
