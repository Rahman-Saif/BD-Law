import AI_Solutions from "@/components/AI_Solutions";
import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import OurServices from "@/components/OurServices";
import What_we_do from "@/components/What_we_do";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Banner/>
      <What_we_do/>
      <AI_Solutions/>
      <OurServices/>

      </div>
  );
}
