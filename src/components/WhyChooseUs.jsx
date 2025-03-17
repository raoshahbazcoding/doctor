import { User, Puzzle, HandHeart, HeartPulse } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: <User className="h-6 w-6 text-[#1d5c5c]" />,
      title: "Integrated Personalization",
      description: "Finibus ornare senectus enim nisi ultrices malesuada sem cursus at.",
    },
    {
      icon: <Puzzle className="h-6 w-6 text-[#1d5c5c]" />,
      title: "Medical Innovation",
      description: "Finibus ornare senectus enim nisi ultrices malesuada sem cursus at.",
    },
    {
      icon: <HandHeart className="h-6 w-6 text-[#1d5c5c]" />,
      title: "Comprehensive Attention",
      description: "Finibus ornare senectus enim nisi ultrices malesuada sem cursus at.",
    },
    {
      icon: <HeartPulse className="h-6 w-6 text-[#1d5c5c]" />,
      title: "Health Transformation",
      description: "Finibus ornare senectus enim nisi ultrices malesuada sem cursus at.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-gray-100 to-[#1d5c5c]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="p-8">
            <div className="uppercase text-[#1d5c5c] font-medium mb-4">WHY CHOOSE US</div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Trusted Hands, Trusted Care: The Doctors Who Put You First
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
              pulvinar dapibus leo.
            </p>
            <a
              href="/about"
              className="border border-[#1d5c5c] text-[#1d5c5c] px-6 py-3 inline-flex items-center uppercase text-sm"
            >
              DISCOVER MORE
              <svg
                className="ml-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="bg-white p-10 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#e8f4f4] p-4 inline-block rounded-lg mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

