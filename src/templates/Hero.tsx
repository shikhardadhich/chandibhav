import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { MouseEventHandler } from 'react';
import { supabase } from '../lib/supabase';

import router from 'next/router';


const Hero = ({silver_rates,isUserLoggedIn}:any) => {

  
  
  const handleLogOut: MouseEventHandler = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signOut()

    if (error) {
      alert(JSON.stringify(error))
    } else {
      
      router.push('/login')
    }
  }
  
function handleClick() {
  return 'https://api.whatsapp.com/send?phone=143304235';
}


 
  return (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#">
            <a>Contact</a>
          </Link>
        </li>
        <li>
       <> {!isUserLoggedIn ? (
          <Link href="/login" >
            <a>Sign In </a>
          </Link>
        ):( <button onClick={handleLogOut}>Logout</button>)
        }</>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Silver Price Today in India (भारत)\n'}
            <span className="text-primary-500">चांदी के दाम (1 KG). ₹{silver_rates.map((_rate: any, _index: any) => {
        return (<>{
          _rate.city =='India'? _rate.rates:''}</>)})}
         </span>
          </>
        }
        description="Your one stop sloution for Silver. Its all about silver!"
        button={
          <Link href= {handleClick()}>
            <a>
              <Button xl>Get rates on your WhatsApp </Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
)};

export  { Hero };

