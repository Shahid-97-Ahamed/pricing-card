import { Suspense } from 'react';
import './App.css'
import Navbar from './components/navbar/navbar';
import PricingCard from './components/card/pricingCard';
import Recharts from './components/charts/recharts';

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {


  return (
    <>
    <header>
       <Navbar />
    </header>
    <main>
      
      <Suspense fallback={<span className="loading loading-dots loading-md"></span>}>
        <PricingCard pricingPromise={pricingPromise} />
      </Suspense>
  
    <Recharts>
      
    </Recharts>
    </main>
     
    </>
  )
}

export default App
