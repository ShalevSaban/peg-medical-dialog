import businessDevImage from "@/assets/business-dev.jpg";
import oemImage from "@/assets/oem-manufacturing.jpg";
import equipmentImage from "@/assets/equipment-lifecycle.jpg";
import marketEntryImage from "@/assets/market-entry.jpg";

interface ServiceProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  index: number;
}

const ServiceItem = ({ title, description, image, imageAlt, reverse, index }: ServiceProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
      {/* Image */}
      <div 
        className={`${reverse ? 'md:col-start-2' : ''} animate-fade-in-up`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-video">
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Content */}
      <div 
        className={`${reverse ? 'md:col-start-1 md:row-start-1' : ''} animate-fade-in-up delay-100`}
        style={{ animationDelay: `${index * 100 + 100}ms` }}
      >
        <h3 className="text-primary mb-4">{title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export const ServicesSection = () => {
  const services = [
    {
      title: "Business Development & Sales",
      description: "Expanding international sales channels through strategic distributor development and targeted market penetration.",
      image: businessDevImage,
      imageAlt: "Business Development",
      reverse: false,
    },
    {
      title: "OEM & Manufacturing Partnerships",
      description: "Connecting innovators with reliable manufacturers and distributors to bring medical technology to market.",
      image: oemImage,
      imageAlt: "OEM Manufacturing",
      reverse: true,
    },
    {
      title: "Equipment Lifecycle Management",
      description: "Maximizing asset value through secondary market identification for surplus and pre-owned equipment.",
      image: equipmentImage,
      imageAlt: "Equipment Lifecycle",
      reverse: false,
    },
    {
      title: "Market Entry Strategy",
      description: "Navigate North American and U.K. markets with expert guidance on regulatory compliance and distribution.",
      image: marketEntryImage,
      imageAlt: "Market Entry",
      reverse: true,
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-center text-primary mb-20 animate-fade-in-up">
          Comprehensive Solutions
        </h2>

        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
