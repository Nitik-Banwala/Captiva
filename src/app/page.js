import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/common/Navbar";
import Empowered from "@/components/Empowered";
import Newmodel from "@/components/Newmodel";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero />
    <Empowered/>
    <Newmodel/>
   </div>
  );
}
