"use client";
import { useEffect, useState } from "react";
import { Meta } from "../layout/Meta";
import { Header } from "../templates/Header";
import { AppConfig } from "../utils/AppConfig";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabase";
import { Section } from "../layout/Section";

type silver_rates = [
  {
    rates: string;
  }
];
const City = () => {
  const router = useRouter();

  const [rates, setRates] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: silver_rates, error } = await supabase
          .from("citylist")
          .select("rates")
          .eq("city", router.asPath.replaceAll("/", ""));
        setRates(silver_rates[0].rates);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  async function getRate(cityName) {
    return "sss";
  }
  return (
    <section className="h-screen">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header></Header>
      <div className="flex justify-center">
        <h1 className=" mb-4 text-3xl flex font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="content-center text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {router.asPath.replaceAll("/", "")} -
          </span>{" "}
          ₹{rates} चांदी के दाम (1 KG)
        </h1>
      </div>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        <Section>
          <p>
            <b>&quot;Today&apos;s Silver Rate&quot;</b>
          </p>
          <p>
            You can see the current silver rate here. Information about
            today&apos;s silver rate and the price of one kilogram of silver is
            also provided. You can also check the silver rate in your city. The
            price of silver in India depends on various factors. In India, the
            silver rate is determined based on the rates of COMEX in the
            international market. The Bureau of Indian Standards has not made
            hallmarking of silver mandatory yet. Some jewelers get hallmarking
            done on their silver jewelry themselves. Hallmarking is done on
            silver coins, but it is not mandatory.
          </p>
          <p>
            <br />
          </p>
          <p>
            <b>What is silver?</b>
          </p>
          <p>
            Silver is a precious and industrial metal. It is a good conductor of
            electricity. Silver has an atomic number of 47 and an atomic mass of
            107.9. Silver starts melting at a temperature of 1060 degrees
            Celsius. It starts boiling at a temperature of 2000 to 2200 degrees
            Celsius.
          </p>
          <p>
            <br />
          </p>
          <p>
            <b>Where is silver used?</b>
          </p>
          <p>
            Silver is used in coins, jewelry, utensils, sculptures, solar
            panels, electronics, and in making chips.
          </p>
          <p>
            <br />
          </p>
          <p>How many types of purity levels are there for silver?</p>
          <p>Silver - 999 (pure) - used in industries</p>
          <p>Silver - 999.5 (pure) - used in industries</p>
          <p>Silver - 970 (sterling silver) - used in making jewelry</p>
          <p>Silver - 925 (sterling silver) - used in making jewelry</p>
          <p>Silver - 900 (coin silver)</p>
          <p>Silver - 835</p>
          <p>Silver - 899</p>
          <p>
            <br />
          </p>
          <p>
            <b>What are the reasons for fluctuations in the price of silver?</b>
          </p>
          <p>
            <br />
          </p>
          <p>Exchange rate of Rupee and Dollar</p>
          <p>
            One of the main reasons for fluctuations in the price of silver is
            the movement of the Rupee against the Dollar. Silver is imported
            into the country, so we have to pay its price in dollars. Therefore,
            the value of the Rupee against the Dollar also affects the price of
            silver.
          </p>
          <p>
            <br />
          </p>
          <p>Gold prices</p>
          <p>
            In addition, the price of silver is also affected by the price of
            gold. If the price of gold rises, the price of silver also tends to
            rise.
          </p>
          <p>
            <br />
          </p>
          <p>Industry demand</p>
          <p>
            Silver is also an industrial metal, and it is used in industries
            such as solar panels, electronics, and chip manufacturing.
            Therefore, the demand from industry also affects the price of
            silver.
          </p>
          <p>
            <br />
          </p>
          <p>Silver mining</p>
          <p>
            The amount of silver mining also affects the price of silver. If the
            mining is low, the price tends to rise.
          </p>
          <p>
            <br />
          </p>
          <p>Geo-political tensions</p>
          <p>
            Geo-political tensions can also have an impact on the price of
            silver. This refers to conflicts or war situations between countries
            around the world.
          </p>
          <p>
            <br />
          </p>
          <p>Customs duty and GST</p>
          <p>
            Customs duty in India also has an impact on the price of silver.
            Silver is imported into the country, so the government imposes a
            customs duty on it. If there are any changes in this duty, it also
            affects the price of silver. In addition, the Goods and Services Tax
            (GST) imposed by the government also affects the price of silver.
          </p>
          <p>
            <br />
          </p>
          <p>
            The interest rates set by the central bank also affect the price of
            silver. If interest rates increase, the price of silver tends to
            decrease. Conversely, if interest rates decrease, the price of
            silver tends to increase. Similarly, inflation also has an impact on
            the price of silver.
          </p>
          <p>
            <br />
          </p>
          <p>Crude oil prices</p>
          <p>
            <br />
          </p>
          <p>
            Silver is mined using a lot of energy, and this requires a lot of
            crude oil. Therefore, fluctuations in crude oil prices can also have
            an impact on the price of silver.
          </p>
          <p>
            <br />
          </p>
          <p>How are silver prices determined in India?</p>
          <p>
            <br />
          </p>
          <p>
            The price of silver in India is determined based on its purity. If
            you are buying silver jewelry, its price is determined based on
            purity, labor cost, the price of other mixed metals, customs duty,
            GST, and packaging cost.
          </p>
          <p>
            <br />
          </p>
          <p>
            <b>Where to buy silver in India?</b>
          </p>
          <p>
            <br />
          </p>
          <p>
            You can invest in silver in several ways. Firstly, you can go to
            your local jeweler and buy silver. You can also buy silver coins,
            silver jewelry, or silver bars. In addition to this, you can also
            buy silver from commodity exchanges. Many companies also sell silver
            ETFs. You can also buy silver online from e-commerce websites.
            Furthermore, e-silver can also be purchased.
          </p>
          <p>
            <br />
          </p>
          <p>
            <b>Why buy silver?</b>
          </p>
          <p>
            <br />
          </p>
          <p>
            Silver is an excellent tool for investment. It comes in handy in
            emergencies. You can immediately sell your silver to a local jeweler
            and receive cash. Furthermore, due to its lower price, anyone can
            purchase it according to their preferences. Silver trendy jewelry is
            liked by women in the market. The design of lightweight silver
            jewelry is also trendy. Silver jewelry is also considered good for
            the human body.
          </p>
          <p>
            <br />
          </p>
          <p>
            Disclaimer: These prices are provided for informational purposes
            only. We have taken great care in displaying silver prices, however,
            if there is any error, we are not responsible. If you invest in
            silver, please consult your financial advisor first. People
            associated with Gold Price Today and Silver Prices do not engage in
            buying, selling, or trading silver privately. Gold Price Today and
            Silver Prices are not responsible for any losses you may incur.
          </p>
        </Section>
      </p>
    </section>
  );
};

export default City;
