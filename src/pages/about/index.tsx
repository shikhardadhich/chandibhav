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
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              <p>
                <Link href={"https://chandibhav.com"}>
                  <a className="text-blue-600/50">Chandibhav.com </a>
                </Link>{" "}
                is a leading news platform in the jewelry industry of India,
                dedicated to providing accurate information about silver prices.
                Our primary mission is to educate and empower the jeweller
                community through industry expertise and content, enabling them
                to make informed pricing decisions that can benefit their
                businesses.
              </p>
              <p>
                <br />
              </p>
              <p>
                Our platform offers valuable insights that help jewellers focus
                on their customers and grow their business. We strive to make
                information related to silver prices accessible to jewellers and
                are proud to have over 100,000 jewellers associated with our
                platform through various social media channels.
              </p>
              <p>
                <br />
              </p>
              <p>
                Our website provides up-to-date and precise daily silver prices,
                prompt market trend updates, historical data, and expert
                analysis. We cover a broad range of topics, including market
                trends, investment strategies, industry news, and regulatory
                updates. Our customizable alerts notify you of significant price
                movements, ensuring that you never miss an opportunity to make
                timely decisions.
              </p>
              <p>
                <br />
              </p>
              <p>
                We have designed our user-friendly interface to make accessing
                information quick and effortless. At{" "}
                <Link href={"https://chandibhav.com"}>
                  <a className="text-blue-600/50">Chandibhav.com </a>
                </Link>{" "}
                , we are committed to empowering jewelers to make informed
                decisions that benefit their business.
              </p>
              <p>--------------------------------------------------------</p>
            </p>
          </div>
          <div className="w-full lg:w-4/12 ">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Privacy Policy
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              <p>
                <br />
              </p>
              <p>
                At{" "}
                <Link href={"https://chandibhav.com"}>
                  <a className="text-blue-600/50">Chandibhav.com </a>
                </Link>{" "}
                , we value your privacy and are committed to protecting your
                personal information. This Privacy Policy outlines how we
                collect, use, disclose, and safeguard your personal information
                when you use our website.
              </p>
              <p>
                <br />
              </p>
              <p>
                {" "}
                <u>Information We Collect</u>
              </p>
              <p>
                <br />
              </p>
              <p>
                We may collect personal information such as your name, email
                address, and phone number when you sign up for our newsletter or
                use our contact form. We may also collect non-personal
                information such as your IP address, browser type, and operating
                system.
              </p>
              <p>
                <br />
              </p>
              <p>
                <u>How We Use Your Information</u>
              </p>
              <p>
                <br />
              </p>
              <p>
                We use your personal information to provide you with relevant
                information about gold and silver prices, market trends,
                investment strategies, industry news, and regulatory updates. We
                may also use your information to send you newsletters and other
                promotional materials.
              </p>
              <p>
                <br />
              </p>
              <p>
                We may use non-personal information to improve our
                website&apos;s performance, diagnose technical issues, and
                analyze user behavior.
              </p>
              <p>
                <br />
              </p>
              <p>
                <u>Disclosure of Your Information</u>
              </p>
              <p>
                <br />
              </p>
              <p>
                We may disclose your personal information to third-party service
                providers, such as email marketing platforms, to provide you
                with our services. We will only share the minimum amount of
                information necessary for them to provide the service.
              </p>
              <p>
                <br />
              </p>
              <p>
                We may also disclose your information if required by law or in
                response to a legal request.
              </p>
              <p>
                <br />
              </p>
              <p>
                <u>Security of Your Information</u>
              </p>
              <p>
                <br />
              </p>
              <p>
                We take appropriate measures to protect your personal
                information from unauthorized access, disclosure, or misuse. We
                use industry-standard encryption technology to safeguard your
                data during transmission.
              </p>
              <p>
                <br />
              </p>
              <p>
                However, please note that no method of transmission over the
                internet or method of electronic storage is 100% secure.
                Therefore, we cannot guarantee the absolute security of your
                information.
              </p>
              <p>
                <br />
              </p>
              <p>
                <u>Links to Other Websites</u>
              </p>
              <p>
                <br />
              </p>
              <p>
                Our website may contain links to other websites that are not
                owned or operated by us. We are not responsible for the privacy
                practices of these websites. We encourage you to review their
                privacy policies before submitting any personal information.
              </p>
              <p>
                <br />
              </p>
              <p>
                <u>Changes to Our Privacy Policy</u>
              </p>
              <p>
                <br />
              </p>
              <p>
                We reserve the right to modify this Privacy Policy at any time.
                We will post the updated policy on our website with the updated
                date. Your continued use of our website after any changes to
                this policy indicates your acceptance of the updated terms.
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About1;
