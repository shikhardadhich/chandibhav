import { Section } from '../layout/Section';
import CityTable from '../table/CityTable';



const Banner = ({silver_rates,isUserLoggedIn}:any) =>{ 
  
  
  return (
  <Section>
   

    <CityTable silver_rates= {silver_rates}  isUserLoggedIn = {isUserLoggedIn} ></CityTable>

  </Section>
)};

export { Banner };
