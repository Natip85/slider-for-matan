"use client";
import { useRef } from "react";
import { AlertCircle, Eye } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";

type TextSliderProps = {
  messages: { text: string; subtext: string }[];
};

export function TextSlider({ messages }: TextSliderProps) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-[240px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20 rounded-full bg-purple-400 p-2">
        <AlertCircle className="w-[51.5px] h-[51.5px]" stroke="white" />
      </div>
      <CarouselContent className=" h-[257px]">
        {messages.map(({ text, subtext }, index) => (
          <CarouselItem key={index} className="bg-purple-400">
            <div className="p-1">
              <Card className="border-0 shadow-none bg-purple-400">
                <CardContent className="flex flex-col gap-3 aspect-square items-center justify-center p-6">
                  <span className="text-base font-semibold text-white">
                    {text}
                  </span>
                  <span className="text-xs text-white mb-3">{subtext}</span>
                  <Button
                    variant={"ghost"}
                    size={"sm"}
                    className="bg-white rounded-3xl flex items-center gap-2 text-xs h-[27px]"
                  >
                    לצפייה בקריאות <Eye className="h-4 w-4" stroke="black" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
