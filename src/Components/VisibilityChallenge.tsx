// components/VisibilityChallenge.tsx
export default function VisibilityChallenge() {
  const stats = [
    {
      value: "1",
      unit: "%",
      title: "Global Scientific Output",
      description:
        "Despite hosting 16.7% of the global population, Africa contributes less than 1% of globally visible scientific publications.",
    },
    {
      value: "0.49",
      unit: "",
      title: "Citation Impact",
      description:
        "Average citation per publication for Nigerian researchers is 0.49, compared to 0.75 for Kenyan researchers, indicating a visibility gap.",
    },
    {
      value: "4.17",
      unit: "%",
      title: "Global Visibility",
      description:
        "Regional platforms represent only 4.17% of globally visible African journals, limiting discoverability and impact.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-3 sm:mb-4">
            The Visibility Challenge
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Africa accounts for 16.7% of the global population yet remains
            marginally represented in global research infrastructures.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl sm:text-5xl font-bold text-[#1a2744] mb-3 sm:mb-4">
                {stat.value}
                <span className="text-red-400">{stat.unit}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1a2744] mb-2 sm:mb-3">
                {stat.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
