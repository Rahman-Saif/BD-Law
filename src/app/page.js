import AI_Solutions from "@/components/AI_Solutions";
import Banner from "@/components/Banner";
// import Chatbot from "@/components/Chatbot";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import OurServices from "@/components/OurServices";
import PricingCard from "@/components/PricingCard";
import What_we_do from "@/components/What_we_do";
import Image from "next/image";
// import ChatbotWrapper from "@/components/ChatbotWrapper";
// const Chatbot = dynamic(() => import("@/components/Chatbot"), { ssr: false });


export default function Home() {
  return (
    <div>
      <Nav/>
      <Banner/>
      <What_we_do/>
      <AI_Solutions/>
      <OurServices/>
      <PricingCard/>
      <FAQ/>
      {/* <ChatbotWrapper/> */}
      <Footer/>
      </div>
  );
}
