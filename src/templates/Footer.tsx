import Link from "next/link";

import { Background } from "../background/Background";
import { CenteredFooter } from "../footer/CenteredFooter";
import { Section } from "../layout/Section";
import { Logo } from "./Logo";

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter logo={<Logo />} iconList={<></>}>
        <li className="pr-5">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        <li className="pr-5">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className="pr-5">
          <Link href="/news">
            <a>News</a>
          </Link>
        </li>
        <li className="pr-5">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
