import { GetServerSideProps } from 'next';
import { Base } from '../templates/Base';
import { supabase } from '../lib/supabase';
import { useEffect, useState } from 'react';


const Index = ({silver_rates}:any) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const getUserProfile = async () => {
      
      const {
        data: { session },
      } = await supabase.auth.getSession();

      
      if (session) {
        setIsUserLoggedIn(true);
      }
    };
    getUserProfile();
});
  

  return (<Base silver_rates={silver_rates} isUserLoggedIn={isUserLoggedIn} />)};

export default Index; 

 export const getServerSideProps: GetServerSideProps = async () => {
  
  const { data: silver_rates, error } = await supabase
        .from("citylist")
        .select("id, city, rates, created_at, is_active")
        .order("created_at",{ascending:false})
   
  if(error) {
    throw new Error("Error : "+error);
    
  }
  return {
    props:{
      silver_rates
    }
  }
  }