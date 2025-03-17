import contact from '../assets/contact.png'

export default function ContactUs() {
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-[#e8f4f4] flex flex-col md:flex-row">
            <div className="p-10 md:p-16 md:w-1/2">
              <div className="uppercase text-[#1d5c5c] font-medium mb-4">CONTACT US</div>
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Become The Next
                <br />
                Our Happy Client
              </h2>
              <p className="text-gray-700 mb-8">
                If your dentures have broken, we endeavour to repair them ASAP, often on the same day.
              </p>
              <a href="/appointment" className="bg-[#1d5c5c] text-white px-6 py-3 inline-block uppercase">
                GET APPOINTMENT
              </a>
            </div>
            <div className="md:w-1/2 relative h-[400px]">
              <img
                src={contact}
                alt="Doctor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  