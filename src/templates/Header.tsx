import Link from "next/link";

import { Background } from "../background/Background";
import { Button } from "../button/Button";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";
import { MouseEventHandler, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

import router from "next/router";

const Header = () => {
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
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li className="pr-5">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li className="pr-5">
            <Link href="/news">
              <a>Silver News</a>
            </Link>
          </li>

          <li className="pr-5">
            <Link href="/about">
              <a>About</a>
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
        </NavbarTwoColumns>
      </Section>
    </Background>
  );
};

export { Header };
