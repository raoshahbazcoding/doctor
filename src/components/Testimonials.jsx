export default function Testimonials() {
    const testimonials = [
      {
        image: "/placeholder-user.jpg",
        quote:
          "I had an outstanding experience with Dentist His meticulous approach to prosthetic cosmetic dentistry truly sets him apart.",
        name: "Maryia Patupchyk",
        position: "Software Engineer",
      },
      {
        image: "/placeholder-user.jpg",
        quote:
          "I had an outstanding experience with Dentis His meticulous approach to prosthetic cosmetic dentistry truly sets him apart.",
        name: "Venessa Cardillo",
        position: "Sr. UX/UI Designer",
      },
      {
        image: "/placeholder-user.jpg",
        quote: "The entire team was friendly and made sure I was at ease throughout the treatment.",
        name: "Latoya Brown",
        position: "Software Engineer",
      },
    ]
  
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-16">What Our Clients Says</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative pt-16 pb-8 px-6 bg-[#e8f4f4] rounded-sm">
                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                  <div className="rounded-full border-4 border-white overflow-hidden">
                    <img
                      src={testimonial.image || "/placeholder-user.jpg"}
                      alt={testimonial.name}
                      className="w-[120px] h-[120px] rounded-full"
                    />
                  </div>
                </div>
  
                <p className="text-center mb-6">{testimonial.quote}</p>
  
                <h3 className="text-xl font-bold text-[#1d5c5c] text-center">{testimonial.name}</h3>
                <p className="text-center text-gray-600">{testimonial.position}</p>
              </div>
            ))}
          </div>
  
          <div className="flex justify-center mt-10 gap-2">
            <button className="h-3 w-3 rounded-full border border-[#1d5c5c]"></button>
            <button className="h-3 w-3 rounded-full bg-[#1d5c5c]"></button>
            <button className="h-3 w-3 rounded-full border border-[#1d5c5c]"></button>
          </div>
        </div>
      </section>
    )
  }
  
  