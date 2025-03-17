import { Syringe, Skull, SmileIcon as Tooth, SyringeIcon as Needle, ShieldAlert, HeartPulse } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Syringe className="h-6 w-6 text-[#1d5c5c]" />,
      title: "Counseling",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power..",
    },
    {
      icon: <Skull className="h-6 w-6 text-[#1d5c5c]" />,
      title: "Facial Aesthetic",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power..",
    },
    {
      icon: <Tooth className="h-6 w-6 text-[#1d5c5c]" />,
      title: "Restorative Dentist",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power..",
    },
    {
      icon: <Needle className="h-6 w-6 text-[#1d5c5c]" />,
      title: "Dermal Facial Fillers",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power..",
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-[#1d5c5c]" />,
      title: "General Preventative",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power..",
    },
    {
      icon: <HeartPulse className="h-6 w-6 text-[#1d5c5c]" />,
      title: "Counseling",
      description:
        "At the Center of Intuitive Living and Wellness, we want to help you heal from past struggles and take back your inner power..",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-lg">What can we offer you?</p>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-16">
          Wide range of <span className="text-[#1d5c5c]">Dental Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`p-8 ${index === 1 ? "bg-white shadow-xl z-10 -mt-4" : ""}`}>
              <div className="bg-[#e8f4f4] p-4 inline-block rounded mb-4">{service.icon}</div>
              <h3 className="text-xl font-light mb-4">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="inline-flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="/services" className="bg-[#1d5c5c] text-white px-8 py-4 inline-block uppercase">
            VIEW ALL SERVICES
          </a>
        </div>
      </div>
    </section>
  )
}

