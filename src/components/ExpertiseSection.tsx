export const ExpertiseSection = () => {
  const specialties = [
    "Neurosurgery",
    "Cardiac Surgery",
    "Vascular Devices",
    "Hospital Logistics and Leading Hospital Buying Groups",
    "Maxillofacial ",
    "Spinal Surgery"
  ];

  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-12 animate-fade-in-up">
            Proven Expertise In The Following Categories
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up delay-100">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-base md:text-lg font-medium hover:bg-white/20 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {specialty}
              </div>
            ))}
          </div>

          <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up delay-200">
            42 years of direct experience with deep relationships across hospitals, OEMs, and global distributors
          </p>
        </div>
      </div>
    </section>
  );
};
