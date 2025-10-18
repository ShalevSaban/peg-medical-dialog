import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GalleryCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const HorizontalGallerySection = () => {
  const galleryCards: GalleryCard[] = [
    {
      id: 1,
      title: "Card Title 1",
      description: "Add your description here. This is placeholder text that can be easily edited.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Card Title 2",
      description: "Add your description here. This is placeholder text that can be easily edited.",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Card Title 3",
      description: "Add your description here. This is placeholder text that can be easily edited.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Card Title 4",
      description: "Add your description here. This is placeholder text that can be easily edited.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Card Title 5",
      description: "Add your description here. This is placeholder text that can be easily edited.",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Card Title 6",
      description: "Add your description here. This is placeholder text that can be easily edited.",
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-center text-primary mb-16 animate-fade-in-up">
          Our Gallery
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {galleryCards.map((card) => (
              <CarouselItem key={card.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group h-full">
                  <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 aspect-[4/3]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="left-0 -translate-x-12 bg-primary text-white hover:bg-primary/90 border-none shadow-lg">
            <ChevronLeft className="h-6 w-6" />
          </CarouselPrevious>
          <CarouselNext className="right-0 translate-x-12 bg-primary text-white hover:bg-primary/90 border-none shadow-lg">
            <ChevronRight className="h-6 w-6" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};
