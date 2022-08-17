//for this basic function simply type rafce 
//for the fun component with the name of file type rfce or rfc

import styles from "./style";

import { Navbar, Hero, Business, Billing, Stats, Clients,CardDeal, Testimonials, Footer, CTA} from './components';


const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
{/* like here paddingX directs to class named as paddingX in styles.js which specifies the padding property*/ }
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero /> 
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>


    </div>
  );
}

export default App;