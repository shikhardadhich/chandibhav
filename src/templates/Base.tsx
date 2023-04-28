import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { HorizontalCards } from './HorizontalCards';

const Base = ({silver_rates,isUserLoggedIn}:any) => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero silver_rates= {silver_rates}  isUserLoggedIn = {isUserLoggedIn}/>
    <HorizontalCards silver_rates = {silver_rates} />
    <Banner silver_rates= {silver_rates}  isUserLoggedIn = {isUserLoggedIn} />
    <Footer />
  </div>
);

export { Base };
