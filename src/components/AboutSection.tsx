import leadershipImage from "@/assets/leadership.jpg";

export const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Left: Heading (60% - 3 cols) */}
          <div className="md:col-span-3">
            <h2 className="text-primary mb-8 animate-fade-in-up">
              Leadership with Decades of Expertise
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-100">
              <p>
                Led by <span className="font-semibold text-primary">Paul Ehud Glaser</span>, PEG Medical brings over 42 years of experience in medical device sales, business development, and surgical technology.
              </p>
              <p>
                With a proven track record representing industry leaders like <span className="font-semibold text-primary ">Medtronic, Johnson & Johnson Medical, AtriCure and many leading companies</span>, we've built and managed distribution networks across the United States, Canada, and the United Kingdom.
              </p>
            </div>
          </div>

          {/* Right: Image (40% - 2 cols) */}
          <div className="md:col-span-2 animate-fade-in-up delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg transform translate-x-4 translate-y-4" />
              <img
                src={leadershipImage}
                alt="Paul Ehud Glaser - Leadership"
                className="relative rounded-lg shadow-2xl w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
