import { LandingModule } from "@/components/pages";
import { NextPage } from "next";
import { ReactElement } from "react";


const Home:NextPage=():ReactElement=> {
  return (
    <div>
      <LandingModule/>
    </div>
  );
}
export default Home;
