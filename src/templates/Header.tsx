import Link from "next/link";

import { Background } from "../background/Background";

import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

import router from "next/router";

const Header = () => {
  
  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li className="pr-5">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li className="pr-2">
            <Link href="/news">
              <a>Silver Price News</a>
            </Link>
          </li>

          <li className="pr-2">
            <Link href="https://goldpricetoday.co.in/" passHref>
              <a target="_blank">Gold Price Today</a>
            </Link>
          </li>

          <li className="pr-2">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>
    </Background>
    
  );
};

export { Header };
