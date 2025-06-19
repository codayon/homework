import './App.css';
import RedButton from './components/RedButton';
import GreenButton from './components/GreenButton';
import BlueButton from './components/BlueButton';
import PinkBadge from './components/PinkBadge';
import YellowAlertDiv from './components/YellowAlertDiv';
import TealCard from './components/TealCard';
import OrangeSubmitButton from './components/OrangeSubmitButton';
import GrayTextInput from './components/GrayTextInput';
import SkyBlueHeader from './components/SkyBlueHeader';
import IndigoLink from './components/IndigoLink';

function App() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">Component Showcase</h1>

      {/* Buttons Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Buttons</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <RedButton />
          <GreenButton />
          <BlueButton />
          <OrangeSubmitButton />
        </div>
      </section>

      {/* Display & Alert Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Displays & Alerts</h2>
        <div className="flex flex-wrap justify-center items-start gap-6">
          <YellowAlertDiv />
          <PinkBadge />
          <TealCard />
          <SkyBlueHeader />
        </div>
      </section>

      {/* Input & Link Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Inputs & Links</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <GrayTextInput />
          <IndigoLink />
        </div>
      </section>
    </div>
  );
}

export default App;
