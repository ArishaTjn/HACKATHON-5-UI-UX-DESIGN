import Image from "next/image";

import Hero from "@/components/Hero";

import TopSelling from "@/components/TopSelling";
import NewArrival from "@/components/NewArrival";
export default function Home() {
  return (
    <div>
  
 <Hero/>
 <NewArrival/>
 <TopSelling/>
 
    </div>
  );
}
