import './App.css';
import RedButton from './components/RedButton';
import GreenButton from './components/GreenButton';
import BlueButton from './components/BlueButton';
import MainHeading from './components/MainHeading';
import SubHeading from './components/SubHeading';

function App() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <SubHeading />
        <MainHeading />
      </div>
      <div className="flex justify-center items-center flex-col gap-3 my-3">
        <RedButton />
        <GreenButton />
        <BlueButton />
      </div>
    </>
  );
}

export default App;
