import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

function App() {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-cover bg-no-repeat bg-hero-pattern bg-center'>
          <Navbar/>
          <Hero/>
      </div>
    
      <About/>
      <Experience/>
      <Works/>
      <Tech/>
      <Feedbacks/>
     
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
