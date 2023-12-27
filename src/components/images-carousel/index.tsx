'use client'

import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { ImagesCarouselProps } from './types'
import { useState } from 'react'

export const ImagesCarousel: React.FC<ImagesCarouselProps> = ({ images }) => {
  const [imageHighlighted, setImageHighlighted] = useState(images[0])

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Image
        src={imageHighlighted}
        alt=""
        width={600}
        height={600}
        quality={100}
        className="w-[600px] rounded-md object-cover pointer-events-none aspect-square"
      />
      <Carousel
        className="w-auto"
        opts={{
          align: 'start',
        }}
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem
              key={image}
              className="basis-1/2 md:basis-1/4 lg:basis-1/5"
            >
              <button onClick={() => setImageHighlighted(image)}>
                <Image
                  src={image}
                  alt=""
                  width={80}
                  height={80}
                  data-selected={image === imageHighlighted}
                  className="w-full aspect-square rounded-md object-cover pointer-events-none data-[selected=true]:border-2"
                />
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="ghost" />
        <CarouselNext variant="ghost" />
      </Carousel>
    </div>
  )
}
