'use client'
import { FC, ReactElement } from "react";
import { HeroContain } from "./hero";
import { AboutContent } from "./about";
import { ServicesModule } from "./our-services";



export const LandingModule: FC = (): ReactElement => {
 
  return (
    <>
    <HeroContain/>
    <AboutContent/>
    <ServicesModule/>
    </>
  );
};
