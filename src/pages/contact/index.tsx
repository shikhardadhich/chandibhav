import React from "react";
import { Meta } from "../../layout/Meta";
import { AppConfig } from "../../utils/AppConfig";
import { Header } from "../../templates/Header";
import Link from "next/link";

const About1 = () => {
  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header></Header>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-8/12 flex flex-col justify-center">
            <p>
              If you have any questions or would like to get in touch with us
              for any reason, please see our contact information below:
            </p>
            <p>
              <br />
            </p>
            <p>Editor: Virendra Vyas</p>
            <p>Phone: +919769012836</p>
            <p>
              Email:{" "}
              <a data-fr-linked="true" href="mailto:virendra1711@gmail.com">
                virendra1711@gmail.com
              </a>
            </p>
            <p>
              <br />
            </p>
            <p>Mridul Jain: +919644567000</p>
            <p>
              <br />
            </p>
            <p>For marketing inquiries, please contact:</p>
            <p>Nisha Vyas</p>
            <p>Phone: +91700748585</p>
            <p>
              Email:{" "}
              <a data-fr-linked="true" href="mailto:goldkabhav@gmail.com">
                goldkabhav@gmail.com
              </a>
            </p>
            <p>
              <br />
            </p>
            <p>
              To receive daily news updates via WhatsApp, please join our
              service by sending your name and city to:
            </p>
            <p>WhatsApp News Service: +918448469588</p>
            <p>
              <br />
            </p>
            <p>
              You can also stay up-to-date with the latest news and updates by
              following us on social media:
            </p>
            <p>
              Facebook Group:{" "}
              <a
                data-fr-linked="true"
                href="https://www.facebook.com/groups/goldsilverpricenews"
              >
                https://www.facebook.com/groups/goldsilverpricenews
              </a>
            </p>
            <p>
              YouTube:{" "}
              <a
                data-fr-linked="true"
                href="https://youtube.com/c/GoldPriceTodayNews"
              >
                https://youtube.com/c/GoldPriceTodayNews
              </a>
            </p>
            <p>
              Twitter:{" "}
              <a data-fr-linked="true" href="https://twitter.com/today_gold">
                https://twitter.com/today_gold
              </a>
            </p>
            <p>
              Telegram:{" "}
              <a
                data-fr-linked="true"
                href="https://telegram.me/goldsilverprice"
              >
                https://telegram.me/goldsilverprice
              </a>
            </p>
            <p>
              Instagram:{" "}
              <a
                data-fr-linked="true"
                href="https://www.instagram.com/goldpricetodaynews/"
              >
                https://www.instagram.com/goldpricetodaynews/
              </a>
            </p>
            <p>
              <br />
            </p>
            <p>
              -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <p>Social Media Link</p>
            <p>
              Facebook-{" "}
              <Link
                href={"https://www.facebook.com/groups/goldsilverpricenews"}
              >
                <a data-fr-linked="true" className="text-blue-600/50">
                  https://www.facebook.com/groups/goldsilverpricenews
                </a>
              </Link>
            </p>
            <p>
              Youtube: &nbsp;
              <Link href={"https://youtube.com/c/GoldPriceTodayNews"}>
                <a className="text-blue-600/50">
                  https://youtube.com/c/GoldPriceTodayNews
                </a>
              </Link>
            </p>
            <p>
              Twitter:{" "}
              <Link href={"https://twitter.com/today_gold"}>
                <a className="text-blue-600/50">
                  https://twitter.com/today_gold
                </a>
              </Link>
            </p>
            <p>
              Telegram:{" "}
              <Link href={"https://telegram.me/goldsilverprice"}>
                <a className="text-blue-600/50">
                  https://telegram.me/goldsilverprice
                </a>
              </Link>
            </p>
            <p>
              Instagram:{" "}
              <Link href={"https://www.instagram.com/goldpricetodaynews/"}>
                <a className="text-blue-600/50">
                  https://www.instagram.com/goldpricetodaynews/
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About1;
