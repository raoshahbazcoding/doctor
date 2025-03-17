import { Award, FileText, Heart } from "lucide-react"
import aboutus from '../assets/aboutus.png'

export default function AboutUs() {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-[#1d5c5c]" />,
      title: "Trusted Physicians",
      description: "Nascetur condimentum vivamus in consectetuer dictum ridiculus taciti.",
    },
    {
      icon: <FileText className="h-6 w-6 text-[#1d5c5c]" />,
      title: "Holistic Approach",
      description: "Nascetur condimentum vivamus in consectetuer dictum ridiculus taciti.",
    },
    {
      icon: <Heart className="h-6 w-6 text-[#1d5c5c]" />,
      title: "Preventive Care",
      description: "Nascetur condimentum vivamus in consectetuer dictum ridiculus taciti.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img src={aboutus} alt="Doctor" className="w-full h-auto" />
          </div>

          <div>
            <div className="uppercase text-[#1d5c5c] font-medium mb-4">ABOUT US</div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Transforming Lives, One Health Journey at a Time.</h2>
            <h2 className="text-gray-600 mb-8"> One Health Journey at a Time.</h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
              pulvinar dapibus leo.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-[#e8f4f4] p-4 h-fit">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-light mb-2">{feature.title}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <a href="/appointment" className="bg-[#1d5c5c] text-white px-6 py-3 uppercase">
                GET APPOINTMENT
              </a>
              <a
                href="/contact"
                className="border border-[#1d5c5c] text-[#1d5c5c] px-6 py-3 uppercase flex items-center"
              >
                <svg
                  className="mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 5.25H4C3.59 5.25 3.25 5.59 3.25 6V18C3.25 18.41 3.59 18.75 4 18.75H20C20.41 18.75 20.75 18.41 20.75 18V6C20.75 5.59 20.41 5.25 20 5.25Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 15.25H8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                CALL +92 123 456 0939
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

