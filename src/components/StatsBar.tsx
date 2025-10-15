export const StatsBar = () => {
  const stats = [
    { value: "42+", label: "Years Experience" },
    { value: "3", label: "Continents" },
    { value: "Leading", label: "Medical Brands" },
    { value: "Global", label: "Network" },
  ];

  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white/80 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
