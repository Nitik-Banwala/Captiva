import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/common/Navbar";
import Empowered from "@/components/Empowered";
import Newmodel from "@/components/Newmodel";
import Leadership from "@/components/Leadership";
import Board from "@/components/Board";
import Footer from "@/components/common/Footer";
import Build from "@/components/Build";
import Apart from "@/components/Apart";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero />
    <Empowered/>
    <Newmodel/>
    <Leadership/>
    <Board/>
    <Apart/>
    <Build/>
    <Footer/>
   </div>
  );
}
