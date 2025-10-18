import marketingSales from "@/assets/MTC marketing.jpg"
import oneOnOne from "@/assets/1 on 1.jpg"
import doctors from "@/assets/5.jpg"
import programs from '@/assets/4.jpg'
import dinner from '@/assets/dinner.jpg'
import annualMeetings from '@/assets/annual meetings.jpg'




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
      title: "Peg Medical – Marketing Strategies",
      description: "Education / Training / Reference center.",
      image: marketingSales,
    },
    {
      id: 2,
      title: "1:1 meetings",
      description: "",
      image: oneOnOne,
    },
    {
      id: 3,
      title: "Educational and training program",
      description: "Focus seminars for doctors and OR staff And Engineering Dept",
      image: doctors,
    },
    {
      id: 4,
      title: "Educational and training program",
      description: "",
      image: programs,
    },
    {
      id: 5,
      title: "Annual meetings",
      description: "",
      image: annualMeetings,
    },
    {
      id: 6,
      title: "Dinner and Learn Events",
      description: "",
      image: dinner,
    },
  ];

  return (
    <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-muted/30">
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
