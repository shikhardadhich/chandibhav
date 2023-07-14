import { GetServerSideProps } from "next";
import { Base } from "../templates/Base";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import Script from 'next/script'
const Index = ({ silver_rates }: any) => {
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

  return ( <> 
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-JPV67GM5KE"></script>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9114385569020403"
     crossOrigin="anonymous"></script>
  <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-JPV67GM5KE');
        `}
      </Script><Base silver_rates={silver_rates} isUserLoggedIn={isUserLoggedIn} /></>);
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: silver_rates, error } = await supabase
    .from("citylist")
    .select("id, city, rates, created_at, is_active")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Error : " + error);
  }
  return {
    props: {
      silver_rates,
    },
  };
};
