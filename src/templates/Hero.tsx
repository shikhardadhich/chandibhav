import Link from "next/link";

import { Background } from "../background/Background";
import { Button } from "../button/Button";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";
import { MouseEventHandler } from "react";
import { supabase } from "../lib/supabase";

import router from "next/router";

const Hero = ({ silver_rates }: any) => {
  return (
    <Background color="bg-gray-100">
      <Section yPadding="pb-5">
        <HeroOneButton
          title={
            <>
              {"Silver Price Today in India (भारत)\n"}
              <span className="text-primary-500">
              चांदी का भाव (1 KG) - ₹
                {silver_rates.map((_rate: any, _index: any) => {
                  return <>{_rate.city == "India" ? _rate.rates : ""}</>;
                })}
              </span>
            </>
          }
          description="I Love Silver. Silver Is New GOLD!"
          button={null}
        />
      </Section>
    </Background>
  );
};

export { Hero };
