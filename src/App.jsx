import { Suspense } from 'react';
import './App.css'
import DauisyNav from './components/dauisyNav';
import DauisyPricing from './components/dauisyPricing/dauisyPricing';
import Navbar from './components/navbar/navbar';

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {


  return (
    <>
    <header>
       {/* <DauisyNav /> */}
       <Navbar />
      
    </header>
    <main>
      <h1 className='text-3xl font-bold text-center pt-3'>Subscribe to our Plan</h1>
      <Suspense fallback={<span className="loading loading-dots loading-md"></span>}>
        <DauisyPricing pricingPromise={pricingPromise} />
      </Suspense>
  
    </main>
     
    </>
  )
}

export default App
