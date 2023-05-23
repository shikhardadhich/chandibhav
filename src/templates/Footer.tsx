import Link from "next/link";

import { Background } from "../background/Background";
import { CenteredFooter } from "../footer/CenteredFooter";
import { Section } from "../layout/Section";
import { Logo } from "./Logo";
import { MouseEventHandler, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import router from "next/router";

const Footer = () => {
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

  const handleLogOut: MouseEventHandler = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push("/login");
    }
  };
  return (
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
        <li className="pr-5">
            <>
              {" "}
              {!isUserLoggedIn ? (
                <Link href="/login">
                  <a>Sign In </a>
                </Link>
              ) : (
                <button onClick={handleLogOut}>Logout</button>
              )}
            </>
          </li>
      </CenteredFooter>
    </Section>
  </Background>
)};

export { Footer };
