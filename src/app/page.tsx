import Arrivals from "@/components/Home/arrivals";
import HeroSection from "@/components/Home/banner";
import BigDeals from "@/components/Home/big_deals";
import Facilities from "@/components/Home/facilities";
import MenCollection from "@/components/Home/men_collection";
import Offer from "@/components/Home/offer";
import Layout from "@/components/Layout/Layout";


export default function Home() {
  return (
   <Layout>
    <HeroSection/>
    <Facilities/>
    <Arrivals/>
    <Offer/>
    <MenCollection/>
    <BigDeals/>
   </Layout>
  );
}
