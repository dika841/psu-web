"use client";
import { FC, ReactElement, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";


export const HeroContain: FC = (): ReactElement => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  const OPTIONS: EmblaOptionsType = {
    dragFree: true,
    containScroll: "keepSnaps",
    watchSlides: false,
    watchResize: true,
    watchFocus: true,
  };

  return (
    <div className="w-full mb-8 overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        opts={OPTIONS}
        className="w-full h-full gap-0"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-[36.5rem]">
          <CarouselItem className="w-full h-full">
            <div className="flex flex-col justify-center items-center gap-y-4 h-full bg-[url('/bg3.webp')] bg-indigo-950 bg-center bg-cover bg-no-repeat bg-blend-overlay">
              <h1 className="text-5xl font-bold text-slate-100 uppercase">
                Integrated IT Solution
              </h1>
              <Button variant={"outline"}>Get Started</Button>
            </div>
          </CarouselItem>
          <CarouselItem className="h-[36rem]">
            <div className="bg-green-500 flex flex-col justify-center items-start gap-y-4 px-8 h-full bg-[url('/bg2.webp')] bg-center bg-cover bg-no-repeat">
              <h1 className="text-5xl font-bold text-white">
                Build your own website with ease
              </h1>
              <Button variant={"secondary"}>Get Started</Button>
            </div>
          </CarouselItem>
          <CarouselItem className="h-[35rem]">
            <div className="bg-yellow-500 flex gap-y-4 flex-col justify-center items-center h-full bg-[url('/bg1.jpg')] bg-center bg-cover bg-no-repeat">
              <h1 className="text-5xl font-bold text-slate-700">
                We can Repair your Hardware
              </h1>
              <Button variant={"default"}>Get Started</Button>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
